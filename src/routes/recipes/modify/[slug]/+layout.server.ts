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

	const singleRecipe: Recipe = await new RecipeController(authToken).getSingle(recipeId);

	// Format Text from DB
	singleRecipe.title = replaceSpecialChars(singleRecipe.title);
	singleRecipe.ingredients.map((item: Ingredient) => (item.name = replaceSpecialChars(item.name)));
	singleRecipe.directions = singleRecipe.directions.map((item: string) =>
		replaceSpecialChars(item)
	);
	return singleRecipe;
};
