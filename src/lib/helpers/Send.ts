import ResponseError from './ResponseError';

export default async function Send(request: Request) {
	try {
		const res = await fetch(request);
		if (!res.ok) {
			throw new ResponseError('Bad Fetch Response', res);
		}
		const data = await parse(res);
		return data;
	} catch (err: any) {
		if (err.log()) {
			return err.log();
		}
		console.log('error', err);
	}

	async function parse(response: Response) {
		const CONTENT_TYPE = response.headers.get('Content-Type');
		if (CONTENT_TYPE && CONTENT_TYPE.includes('application/json')) {
			const content = await response.json();
			return content;
		} else {
			const content = response.text();
			return content;
		}
	}
}
