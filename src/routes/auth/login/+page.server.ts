import type { LoginResponse } from '$lib/types/User';
import { SESSION } from '$lib/types/Enums';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ cookies, request, fetch }) => {
		// Get user inputs from form
		const formData = await request.formData();
		const email = formData.get('email');
		const password = formData.get('password');

		// Send verification request
		const query = await fetch(import.meta.env.VITE_API_ENDPOINT + '/api/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});

		if (!query.ok) {
			return fail(401, { message: query.status });
		}

		// Parse query from api
		const response: LoginResponse = await query.json();
		const token: string = response.data.token;
		console.log('Login Response', response, email, password);

		cookies.delete(SESSION.TOKEN, { path: '/' });
		// Set user's _id into the cookie
		cookies.set(SESSION.TOKEN, token, {
			// send cookie for every page
			path: '/',
			// server side only cookie so you can't use `document.cookie`
			httpOnly: true,
			// only requests from same site can send cookies
			// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
			sameSite: 'strict',
			// only sent over HTTPS in production
			secure: process.env.NODE_ENV === 'production',
			// set cookie to expire after a month
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(302, '/recipes');
	}
};
