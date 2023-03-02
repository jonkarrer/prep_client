import type { Handle } from '@sveltejs/kit';
import { SESSION } from '$lib/types/Enums';
import { redirect } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	if (!event.route.id?.includes('auth')) {
		const authToken = event.cookies.get(SESSION.TOKEN);
		if (!authToken || authToken?.length === 0) {
			console.log('No Auth', authToken);
			throw redirect(302, '/auth/login');
		}
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;
