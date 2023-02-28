import type { Recipe } from '$lib/types/Recipe';
import Send from '$lib/helpers/Send';
import { CONTENT_TYPE } from '$lib/types/Enums';
enum ROUTES {
	ALL_RECIPES = 'http://127.0.0.1/api/recipes',
	SINGLE_RECIPE = 'http://127.0.0.1/api/recipes/single/',
	CREATE_RECIPE = '/proxy/recipes/create'
}

export default class RecipeController {
	constructor(private authToken: string | undefined = undefined) {}

	async getAllForUser(): Promise<Array<Recipe>> {
		const request = new Request(ROUTES.ALL_RECIPES, {
			method: 'GET',
			headers: {
				'Content-Type': CONTENT_TYPE.JSON,
				Authorization: `Bearer ${this.authToken}`
			}
		});

		const data = await Send(request);
		return data;
	}

	async getSingle(recipeId: string): Promise<Recipe> {
		const request = new Request(ROUTES.SINGLE_RECIPE + recipeId, {
			method: 'GET',
			headers: {
				'Content-Type': CONTENT_TYPE.JSON,
				Authorization: `Bearer ${this.authToken}`
			}
		});

		const data = await Send(request);
		return data;
	}

	static async create(recipeData: Recipe) {
		const request = new Request(ROUTES.CREATE_RECIPE, {
			method: 'POST',
			headers: { 'Content-Type': CONTENT_TYPE.JSON },
			body: JSON.stringify(recipeData)
		});

		const response = await Send(request);

		return response;
	}
}
