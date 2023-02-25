import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types/Recipe';

export const load: PageServerLoad = async ({ fetch, params }) => {
	// Fetch single recipe using the slug as an id
	const recipeId = params.slug;
	const req = await fetch(`http://127.0.0.1/api/recipes/view/${recipeId}`);
	if (!req.ok) {
		console.log(await req.text());
		error(500);
	}
	const singleRecipe: Recipe = await req.json();

	return singleRecipe;
};
