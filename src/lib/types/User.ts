export type User = { id: string; email: string; password: string };

export type LoginResponse = {
	status: string;
	message: string;
	data: {
		user: {
			name: string;
			email: string;
			created_at: string;
			updated_at: string;
		};
		token: string;
	};
};
