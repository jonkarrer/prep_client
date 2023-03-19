import type { Recipe } from '$lib/types/Recipe';
import Send from '$lib/helpers/Send';
import { CONTENT_TYPE, PROXY_ROUTES } from '$lib/types/Enums';

export default class RecipeController {
	constructor(private authToken: string | undefined = undefined) {}

	async getAllRecipes(): Promise<Array<Recipe>> {
		const request = new Request(import.meta.env.VITE_API_ENDPOINT + '/api/recipes', {
			method: 'GET',
			headers: {
				'Content-Type': CONTENT_TYPE.JSON,
				Authorization: `Bearer ${this.authToken}`
			}
		});

		const data = await Send(request);
		return data;
	}

	async getSingleRecipe(recipeId: string): Promise<Recipe> {
		const request = new Request(
			import.meta.env.VITE_API_ENDPOINT + '/api/recipes/single/' + recipeId,
			{
				method: 'GET',
				headers: {
					'Content-Type': CONTENT_TYPE.JSON,
					Authorization: `Bearer ${this.authToken}`
				}
			}
		);

		const data = await Send(request);
		return data;
	}

	async create(recipeData: Recipe) {
		// Send auth token and data to api
		const request = new Request(import.meta.env.VITE_API_ENDPOINT + '/api/recipes/create', {
			method: 'POST',
			headers: new Headers({
				'Content-Type': CONTENT_TYPE.JSON,
				Authorization: `Bearer ${this.authToken}`
			}),
			body: JSON.stringify({ recipe: recipeData })
		});

		const response = await Send(request);
		return response;
	}

	async modify(recipeData: Recipe) {
		const request = new Request(
			import.meta.env.VITE_API_ENDPOINT + `/api/recipes/modify/${recipeData.id}`,
			{
				method: 'PUT',
				headers: new Headers({
					'Content-Type': CONTENT_TYPE.JSON,
					Authorization: `Bearer ${this.authToken}`
				}),
				body: JSON.stringify({ recipe: recipeData })
			}
		);

		const response = await Send(request);
		return response;
	}

	async delete(recipeData: Recipe) {
		const request = new Request(
			import.meta.env.VITE_API_ENDPOINT + `/api/recipes/delete/${recipeData.id}`,
			{
				method: 'DELETE',
				headers: new Headers({
					'Content-Type': CONTENT_TYPE.JSON,
					Authorization: `Bearer ${this.authToken}`
				})
			}
		);

		const response = await Send(request);
		return response;
	}

	static async proxy(route: PROXY_ROUTES, recipeData: Recipe) {
		const request = new Request(route, {
			method: 'POST',
			headers: { 'Content-Type': CONTENT_TYPE.JSON },
			body: JSON.stringify(recipeData)
		});

		const response = await Send(request);

		return response;
	}
}
