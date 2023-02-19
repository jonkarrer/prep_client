<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import type { Recipe } from '$lib/types/Recipe';

	// * This is the context store for the create recipe page...
	//... using the layout component as a wrapper, this is a clever way to localize state management.
	const recipe: Recipe = {
		title: '',
		portions: 0,
		ingredients: [],
		directions: [],
		tags: []
	};

	let store: Writable<Recipe> = writable(recipe);

	setContext<Writable<Recipe>>('recipeData', store);

	$: console.log($store);
</script>

<slot />
