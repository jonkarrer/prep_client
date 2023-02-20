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

	const recipe: Recipe = {
		title: '',
		portions: 0,
		tags: [],
		directions: [],
		ingredients: []
	};
	let recipeStore: Writable<Recipe> = writable(recipe);
	setContext<Writable<Recipe>>('recipe', recipeStore);

	$: console.log($recipeStore);

	function saveRecipe() {
		console.log('FINAL RECIPE', $recipeStore);
	}

	function saveDraft() {
		console.log('CURRENT DRAFT', $recipeStore);
	}

	function resetAllValues() {
		const blankRecipe: Recipe = {
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
