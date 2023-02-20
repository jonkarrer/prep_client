export type Ingredient = { id: string; name: string; quantity: string; unit: string };
export type ListItem = { id: string; order: number; text: string };

export enum RecipeKeys {
	ID = 'id',
	TITLE = 'title',
	PORTIONS = 'portions',
	INGREDIENTS = 'ingredients',
	DIRECTIONS = 'directions',
	TAGS = 'tags'
}

export enum RecipeDraftKeys {
	ID = 'id',
	TITLE = 'title',
	PORTIONS = 'portions',
	INGREDIENT = 'ingredient',
	INGREDIENTLIST = 'ingredientList',
	DIRECTION = 'direction',
	DIRECTIONLIST = 'directionList',
	TAG = '',
	TAGLIST = 'tagList'
}

export type Recipe = {
	id?: string;
	title: string;
	portions: number;
	ingredients: Array<Ingredient>;
	directions: Array<string>;
	tags: Array<string>;
};

export type RecipeDraft = {
	id?: string;
	title: string;
	portions: number;
	ingredient: Ingredient;
	ingredientList: Array<Ingredient>;
	direction: '';
	tag: '';
	directionList: Array<string>;
	tagList: Array<string>;
};
