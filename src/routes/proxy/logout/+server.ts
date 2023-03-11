import { redirect } from '@sveltejs/kit';
import { SESSION } from '$lib/types/Enums';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	console.log('logout before auth cookie');
	const authToken = cookies.get(SESSION.TOKEN);
	if (!authToken || authToken?.length === 0) {
		throw redirect(308, '/auth/login');
	}

	// TODO logout user in api
	cookies.delete(SESSION.TOKEN, { path: '/' });

	throw redirect(302, '/auth/login');
};
