import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
// import { recipes } from "$lib/database/recipe_database";

export const load: LayoutServerLoad = async ({ cookies }) => {
	// Get user id from session
	const userId = cookies.get('session');
	// if (!userId) {
	// 	console.log("No session id");
	// 	return error(500);
	// }

	return { userId };
};
