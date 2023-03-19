import { SESSION } from '$lib/types/Enums';
import type { PageServerLoad } from './$types';
import RecipeController from '$lib/controllers/RecipeController';

export const load: PageServerLoad = async ({ cookies }) => {
	// Get user id from SESSION
	const authToken = cookies.get(SESSION.TOKEN);

	// Fetch all recipes
	const data = await new RecipeController(authToken).getAllRecipes();

	return { recipes: data };
};
