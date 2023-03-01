import { json, redirect } from '@sveltejs/kit';
import { SESSION } from '$lib/types/Enums';
import type { RequestHandler } from './$types';
import RecipeController from '$lib/controllers/RecipeController';

export const POST: RequestHandler = async ({ request, cookies }) => {
	// Get the auth token and recipe data
	const authToken = cookies.get(SESSION.TOKEN);
	if (!authToken || authToken?.length === 0) {
		throw redirect(308, '/auth/login');
	}

	const modifiedRecipeData = await request.json();
	const message = await new RecipeController(authToken).modify(modifiedRecipeData);

	return json(message);
};
