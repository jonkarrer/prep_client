export function replaceSpecialChars(str: string) {
	str = str.replace(/&quot;/g, '"');
	str = str.replace(/&#039;/g, "'");
	str = str.replace(/&amp;/g, '&');

	str = str.replace(/\\u0022/g, '"');
	str = str.replace(/\\u0027/g, "'");
	str = str.replace(/\\u0026/g, '&');

	return str;
}
