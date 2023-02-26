import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { Session } from '$lib/types/Session';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	// Fetch single recipe using the slug as an id
	const authToken = cookies.get(Session.TOKEN);
	if (!authToken || authToken?.length === 0) {
		redirect(308, '/auth/login');
	}
};
