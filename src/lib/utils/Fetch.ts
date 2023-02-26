export enum ContentType {
	JSON = 'application/json; charset=UTF-8',
	SQL = 'application/sql',
	PNG = 'image/png',
	TEXT = 'text/plain; charset=UTF-8'
}

export class Fetch {
	private headers: Headers;

	constructor(private url: RequestInfo | URL) {
		this.headers = new Headers({
			Accept: '*/*'
		});
	}

	async parseResponse(response: Response) {
		const type = response.headers.get('Content-Type');

		console.log('content type', type);

		if (type === ContentType.JSON) {
			return await response.json();
		}

		return await response.text();
	}
	async post(data: string, contentType: ContentType) {
		try {
			const request = new Request(this.url, {
				method: 'POST',
				headers: { ...this.headers, 'Content-Type': contentType },
				body: data
			});

			const response = await fetch(request);
			if (!response.ok) {
				throw new Error(await response.text());
			}

			const responseBody = this.parseResponse(response);

			return responseBody;
		} catch (error) {
			if (error instanceof SyntaxError) {
				// Unexpected token < in JSON
				console.error('There was a SyntaxError', error);
			} else {
				console.error(error);
			}
		}
	}
}
