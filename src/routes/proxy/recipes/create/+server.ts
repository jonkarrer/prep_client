import { json, error, redirect } from '@sveltejs/kit';
import { SESSION } from '$lib/types/Enums';
import { CONTENT_TYPE } from '$lib/types/Enums';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	// Get the auth token and recipe data
	const authToken = cookies.get(SESSION.TOKEN);
	if (!authToken || authToken?.length === 0) {
		throw redirect(308, '/auth/login');
	}
	const newRecipeData = await request.json();

	// Send auth token and data to api
	const postData = new Request('http://127.0.0.1/api/recipes/create', {
		method: 'POST',
		headers: new Headers({
			'Content-Type': CONTENT_TYPE.JSON,
			Authorization: `Bearer ${authToken}`
		}),
		body: JSON.stringify({ recipe: newRecipeData })
	});

	const response = await fetch(postData);
	if (!response.ok) {
		throw error(500, await response.text());
	}

	const message = await response.json();

	return json(message);
};
