import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Recipe } from '$lib/types/Recipe';
import { Session } from '$lib/types/Session';
import RecipeController from '$lib/controllers/RecipeController';

export const load: PageServerLoad = async ({ fetch, params, cookies }) => {
	// Fetch single recipe using the slug as an id
	const recipeId = params.slug;
	const authToken = cookies.get(Session.TOKEN);

	// TODO Hanlde errors and redirects
	const singleRecipe: Recipe = await new RecipeController(authToken).singleRecipe(recipeId);

	return singleRecipe;
};
