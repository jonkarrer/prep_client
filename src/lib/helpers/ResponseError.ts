import { redirect } from '@sveltejs/kit';

export default class ResponseError extends Error {
	constructor(message: string, private response: Response) {
		super(message);
	}

	log() {
		if (this.response.status === 401) {
			this.handleAuthError();
		}
		this.parse().then((content) => console.log(this.message, this.response.status, content));
		return;
	}

	handleAuthError() {
		throw redirect(302, '/auth/login');
	}

	async parse() {
		const CONTENT_TYPE = this.response.headers.get('Content-Type');
		if (CONTENT_TYPE && CONTENT_TYPE.includes('application/json')) {
			const content = await this.response.json();
			return content;
		} else {
			const content = await this.response.text();
			return content;
		}
	}
}
