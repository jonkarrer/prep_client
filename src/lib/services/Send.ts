import ResponseError from './ResponseError';

export default class Send {
	constructor(private $url: string, private headers: Headers) {}

	async get() {
		try {
			const res = await fetch(this.$url, {
				method: 'GET',
				headers: this.headers
			});
			if (!res.ok) {
				throw new ResponseError('Bad Fetch Response', res);
			}
			const data = await this.parse(res);
			return data;
		} catch (err: any) {
			err.log();
		}
	}

	async post() {
		// const postData = new Request('http://127.0.0.1/api/recipes/create', {
		//   method: 'POST',
		//   headers: new Headers({
		//     'Content-Type': ContentType.JSON,
		//     Authorization: `Bearer ${authToken}`
		//   }),
		//   body: JSON.stringify({ recipe: newRecipeData })
		// });
	}

	async parse(response: Response) {
		const contentType = response.headers.get('Content-Type');
		if (contentType && contentType.includes('application/json')) {
			const content = await response.json();
			return content;
		} else {
			const content = response.text();
			return content;
		}
	}
}
