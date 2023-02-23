import { error } from '@sveltejs/kit';
import { Session } from '$lib/types/Session';
import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types/Recipe';
// import { recipes } from "$lib/database/recipe_database";

export const load: PageServerLoad = async ({ cookies, fetch }) => {
	// Get user id from session
	const authToken = cookies.get(Session.TOKEN);
	// if (!userId) {
	// 	console.log('No session id');
	// 	return error(500);
	// }

	// Fetch all recipes
	const req = await fetch('http://127.0.0.1/api/recipes', {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${authToken}`
		})
	});
	if (!req.ok) {
		return error(404);
	}

	type AllRecipesResponse = {
		status: string;
		data: Array<Recipe>;
	};
	const res: AllRecipesResponse = await req.json();
	console.log('res', res);

	return { recipes: res.data };
};
