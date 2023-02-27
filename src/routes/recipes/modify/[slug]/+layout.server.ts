import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Recipe } from '$lib/types/Recipe';
import { Session } from '$lib/types/Session';

export const load: LayoutServerLoad = async ({ fetch, params, cookies }) => {
	// Fetch single recipe using the slug as an id
	const recipeId = params.slug;
	const authToken = cookies.get(Session.TOKEN);
	if (!authToken || authToken?.length === 0) {
		throw redirect(308, '/auth/login');
	}

	const req = await fetch(`http://127.0.0.1/api/recipes/view/${recipeId}`, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		})
	});
	if (!req.ok) {
		console.log(await req.text());
		error(500);
	}
	const singleRecipe: Recipe = await req.json();

	return singleRecipe;
};
