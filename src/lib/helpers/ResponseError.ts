export default class ResponseError extends Error {
	constructor(message: string, private response: Response) {
		super(message);
	}

	log() {
		this.parse().then((content) => console.log(this.message, this.response.status, content));
		return;
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
