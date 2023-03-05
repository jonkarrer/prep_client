export type Ingredient = { id: string; name: string; quantity: string; unit: string };

export enum RecipeKeys {
	ID = 'id',
	TITLE = 'title',
	PORTIONS = 'portions',
	INGREDIENTS = 'ingredients',
	DIRECTIONS = 'directions'
}

export type Recipe = {
	id: string;
	title: string;
	portions: number | null;
	ingredients: Array<Ingredient>;
	directions: Array<string>;
};
