export type Ingredient = { id: string; ingredient: string; amount: string; unit: string };
export type ListItem = { id: string; order: number; text: string };

export enum RecipeKeys {
	ID = 'id',
	TITLE = 'title',
	PORTIONS = 'portions',
	INGREDIENTS = 'ingredients',
	DIRECTIONS = 'directions',
	TAGS = 'tags'
}

export type Recipe = {
	id?: string;
	title: string;
	portions: number;
	ingredients: Array<Ingredient>;
	directions: Array<ListItem>;
	tags: Array<string>;
};
