import type { LayoutServerLoad } from './$types';
import type { Recipe } from '$lib/types/Recipe';
import { SESSION } from '$lib/types/Enums';
import RecipeController from '$lib/controllers/RecipeController';
import { replaceSpecialChars } from '$lib/utils/replaceSpecialChars';
import type { Ingredient } from '$lib/types/Recipe';

export const load: LayoutServerLoad = async ({ fetch, params, cookies }) => {
	// Fetch single recipe using the slug as an id
	const recipeId = params.slug;
	const authToken = cookies.get(SESSION.TOKEN);

	const recipe: Recipe = await new RecipeController(authToken).getSingleRecipe(recipeId);

	// Format Text from DB
	recipe.title = replaceSpecialChars(recipe.title);
	recipe.ingredients.map((item: Ingredient) => (item.name = replaceSpecialChars(item.name)));
	recipe.directions = recipe.directions.map((item: string) =>
		replaceSpecialChars(item)
	);
	return recipe;
};
