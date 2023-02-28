import type { Handle } from '@sveltejs/kit';
import { Session } from '$lib/types/Session';
import { error, redirect } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const authToken = event.cookies.get(Session.TOKEN);
	if (!authToken || authToken?.length === 0) {
		console.log('No Auth', authToken);

		throw redirect(302, '/auth/login');
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;
