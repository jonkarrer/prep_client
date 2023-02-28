import { ContentType } from '$lib/types/Content';
import type { Recipe } from '$lib/types/Recipe';

export class RecipeModel {
	static async create(recipeData: Recipe) {
		try {
			const request = new Request('/controllers/recipes/create', {
				method: 'POST',
				headers: { 'Content-Type': ContentType.JSON },
				body: JSON.stringify(recipeData)
			});

			const response = await fetch(request);
			if (!response.ok) {
				throw new Error(await response.text());
			}

			return true;
		} catch (error) {
			console.log('Error during create:', error);
			return false;
		}
	}
	static async modify(recipeData: Recipe) {
		try {
			const request = new Request('/controllers/recipes/modify', {
				method: 'POST',
				headers: { 'Content-Type': ContentType.JSON },
				body: JSON.stringify(recipeData)
			});

			const response = await fetch(request);
			if (!response.ok) {
				throw new Error(await response.text());
			}

			return true;
		} catch (error) {
			console.log('Error during modify:', error);
			return false;
		}
	}
	static async delete(recipeData: Recipe) {
		try {
			const request = new Request('/controllers/recipes/delete', {
				method: 'POST',
				headers: { 'Content-Type': ContentType.JSON },
				body: JSON.stringify(recipeData)
			});

			const response = await fetch(request);
			if (!response.ok) {
				throw new Error(await response.text());
			}

			return true;
		} catch (error) {
			console.log('Error during delete:', error);
			return false;
		}
	}
}
