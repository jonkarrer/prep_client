import { error, redirect } from '@sveltejs/kit';
import { Session } from '$lib/types/Session';
import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types/Recipe';

export const load: PageServerLoad = async ({ cookies, fetch }) => {
	// Get user id from session
	const authToken = cookies.get(Session.TOKEN);
	if (!authToken || authToken?.length === 0) {
		console.log('No Auth', authToken);

		throw redirect(302, '/auth/login');
	}

	// Fetch all recipes
	const req = await fetch('http://127.0.0.1/api/recipes', {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		})
	});
	if (!req.ok) {
		throw error(500);
	}

	type AllRecipesResponse = {
		status: string;
		data: Array<Recipe>;
	};
	const res: AllRecipesResponse = await req.json();
	console.log('res', res);

	return { recipes: res.data };
};
