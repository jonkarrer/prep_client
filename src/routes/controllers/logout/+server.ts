import { json, redirect } from '@sveltejs/kit';
import { Session } from '$lib/types/Session';
import { ContentType } from '$lib/types/Content';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request, cookies }) => {
	// Get the auth token and recipe data
	const authToken = cookies.get(Session.TOKEN);
	if (!authToken || authToken?.length === 0) {
		throw redirect(308, '/auth/login');
	}

	// Delete session token
	cookies.delete(Session.TOKEN, { path: '/' });

	throw redirect(308, '/auth/login');
};
