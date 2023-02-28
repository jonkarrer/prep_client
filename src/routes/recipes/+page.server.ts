import { Session } from '$lib/types/Session';
import type { PageServerLoad } from './$types';
import RecipeController from '$lib/controllers/RecipeController';

export const load: PageServerLoad = async ({ cookies }) => {
	// Get user id from session
	const authToken = cookies.get(Session.TOKEN);

	// TODO Hanlde errors and redirects
	// Fetch all recipes
	const data = await new RecipeController(authToken).allRecipes();

	return { recipes: data };
};
