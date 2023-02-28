import { json, error, redirect } from '@sveltejs/kit';
import { Session } from '$lib/types/Session';
import { ContentType } from '$lib/types/Content';
import type { RequestHandler } from '../$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	// Get the auth token and recipe data
	const authToken = cookies.get(Session.TOKEN);
	if (!authToken || authToken?.length === 0) {
		throw redirect(308, '/auth/login');
	}
	const targetRecipeData = await request.json();

	// Send auth token and data to api
	const postData = new Request(`http://127.0.0.1/api/recipes/delete/${targetRecipeData.id}`, {
		method: 'DELETE',
		headers: new Headers({
			'Content-Type': ContentType.JSON,
			Authorization: `Bearer ${authToken}`
		})
	});

	const response = await fetch(postData);
	if (!response.ok) {
		throw error(500, await response.text());
	}

	const message = await response.json();

	return json(message);
};
