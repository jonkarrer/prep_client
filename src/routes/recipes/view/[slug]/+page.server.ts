import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types/Recipe';
import { SESSION } from '$lib/types/Enums';
import RecipeController from '$lib/controllers/RecipeController';

export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
	// Fetch single recipe using the slug as an id
	const recipeId = params.slug;
	const authToken = cookies.get(SESSION.TOKEN);

	// TODO Hanlde errors and redirects
	const getSingle: Recipe = await new RecipeController(authToken).getSingle(recipeId);

	return getSingle;
};
