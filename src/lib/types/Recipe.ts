export type Ingredient = { id: string; name: string; quantity: string; unit: string };

export enum RecipeKeys {
	ID = 'id',
	TITLE = 'title',
	PORTIONS = 'portions',
	INGREDIENTS = 'ingredients',
	DIRECTIONS = 'directions',
	TAGS = 'tags'
}

export type Recipe = {
	id: string;
	title: string;
	portions: number;
	ingredients: Array<Ingredient>;
	directions: Array<string>;
	tags: Array<string>;
};
