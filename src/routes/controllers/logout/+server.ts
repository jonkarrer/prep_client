import { redirect } from '@sveltejs/kit';
import { Session } from '$lib/types/Session';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	const authToken = cookies.get(Session.TOKEN);
	if (!authToken || authToken?.length === 0) {
		throw redirect(308, '/auth/login');
	}

	// Delete session token
	cookies.delete(Session.TOKEN, { path: '/' });

	throw redirect(308, '/auth/login');
};
