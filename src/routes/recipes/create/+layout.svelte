<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import SaveTwoTone from '$lib/assets/icons/SaveTwoTone.svelte';
	import ReloadOutlined from '$lib/assets/icons/ReloadOutlined.svelte';
	import BlocksOutlined from '$lib/assets/icons/BlocksOutlined.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import type { Recipe } from '$lib/types/Recipe';
	import { Fetch, ContentType } from '$lib/utils/Fetch';
	import type { PageData } from './$types';
	import { nanoid } from 'nanoid/non-secure';

	export let data: PageData;

	const recipe: Recipe = {
		id: nanoid(),
		title: '',
		portions: 0,
		tags: [],
		directions: [],
		ingredients: []
	};

	let recipeStore: Writable<Recipe> = writable(recipe);
	setContext<Writable<Recipe>>('recipe', recipeStore);

	$: console.log($recipeStore);

	async function saveRecipe() {
		if ($recipeStore.title.length < 2) {
			alert('Recipe Title is Missing');
			return;
		}

		if ($recipeStore.ingredients.length === 0) {
			alert('Recipe Ingredient is Missing');
			return;
		}
		if ($recipeStore.directions.length === 0) {
			alert('Recipe Direction is Missing');
			return;
		}
		if ($recipeStore.portions === 0) {
			alert('Recipe Portions is Missing');
			return;
		}

		console.log('FINAL RECIPE', $recipeStore);
		const request = new Fetch('http://127.0.0.1/api/recipes/create');
		await request.post(
			JSON.stringify({ userId: data.userId, recipe: $recipeStore }),
			ContentType.JSON
		);
	}

	function saveDraft() {
		console.log('CURRENT DRAFT', $recipeStore);
	}

	function resetAllValues() {
		const blankRecipe: Recipe = {
			id: nanoid(),
			title: '',
			portions: 0,
			tags: [],
			directions: [],
			ingredients: []
		};
		recipeStore.set(blankRecipe);

		console.log('RESET ALL', $recipeStore);
	}
</script>

<Mobile>
	<Button callback={saveRecipe} text="Save" icon={SaveTwoTone} />
	<Button callback={resetAllValues} text="Reset" icon={ReloadOutlined} />
	<Button callback={saveDraft} text="Draft" icon={BlocksOutlined} />
</Mobile>

<slot />
