export default async function parse(response: Response) {
	const CONTENT_TYPE = response.headers.get('Content-Type');
	if (CONTENT_TYPE && CONTENT_TYPE.includes('application/json')) {
		const content = await response.json();
		return content;
	} else {
		const content = response.text();
		return content;
	}
}
