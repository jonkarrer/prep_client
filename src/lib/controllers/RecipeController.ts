import type { Recipe } from '$lib/types/Recipe';
import Send from '$lib/services/Send';

enum ROUTES {
	ALL_RECIPES = 'http://127.0.0.1/api/recipes',
	SINGLE_RECIPE = 'http://127.0.0.1/api/recipes/view/'
}

export default class RecipeController {
	private headers: Headers;
	constructor(private authToken: string | undefined) {
		this.headers = new Headers({
			'Content-Type': 'application/json',
			Authorization: `Bearer ${this.authToken}`
		});
	}

	async allRecipes(): Promise<Array<Recipe>> {
		const data = new Send(ROUTES.ALL_RECIPES, this.headers).get();
		return data;
	}

	async singleRecipe(recipeId: string): Promise<Recipe> {
		const data = await new Send(ROUTES.SINGLE_RECIPE + recipeId, this.headers).get();
		return data;
	}
}
