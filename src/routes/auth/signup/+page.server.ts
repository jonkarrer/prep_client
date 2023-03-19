import type { LoginResponse } from '$lib/types/User';
import { SESSION } from '$lib/types/Enums';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import Send from '$lib/helpers/Send';
import type { PageServerLoad } from './$types';

export const actions: Actions = {
	 default: async ({ cookies, request, fetch }) => {
		 // Get user inputs from form
		 const formData = await request.formData();
		 const name = formData.get('name');
		 const email = formData.get('email');
		 const password = formData.get('password');

		const signupRequest = new Request(import.meta.env.VITE_API_ENDPOINT + '/api/user/signup', {
			 method: 'POST',
			 headers: {
				 'Content-Type': 'application/json'
			 },
			 body: JSON.stringify({
				 name: name,
				 email: email,
				 password: password
			 })
		 });

		const response = await Send(signupRequest);

		 // Parse data from api
		 const token: string = response.data.token;

		 cookies.delete(SESSION.TOKEN, { path: '/' });
		 cookies.set(SESSION.TOKEN, token, {
			 path: '/',
			 httpOnly: true,
			 sameSite: 'strict',
			 secure: process.env.NODE_ENV === 'production',
			 maxAge: 60 * 60 * 24 * 30
		 });

		 throw redirect(302, '/auth/login');
	 }
 };

// export const load: PageServerLoad = async () => {
// 	throw redirect(302, '/auth/login');
// };
