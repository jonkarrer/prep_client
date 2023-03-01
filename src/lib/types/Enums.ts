export enum CONTENT_TYPE {
	JSON = 'application/json; charset=UTF-8',
	SQL = 'application/sql',
	PNG = 'image/png',
	TEXT = 'text/plain; charset=UTF-8'
}

export enum SESSION {
	TOKEN = 'session_token'
}

export enum PROXY_ROUTES {
	CREATE_RECIPE = '/proxy/recipes/create',
	MODIFY_RECIPE = '/proxy/recipes/modify',
	DELETE_RECIPE = '/proxy/recipes/delete'
}
