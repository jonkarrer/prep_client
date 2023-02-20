<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import SaveTwoTone from '$lib/assets/icons/SaveTwoTone.svelte';
	import ReloadOutlined from '$lib/assets/icons/ReloadOutlined.svelte';
	import BlocksOutlined from '$lib/assets/icons/BlocksOutlined.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import type { Recipe, RecipeDraft } from '$lib/types/Recipe';

	const recipeDraft: RecipeDraft = {
		title: '',
		portions: 0,
		ingredient: { id: '', name: '', unit: '', quantity: '' },
		ingredientList: [],
		direction: '',
		directionList: [],
		tag: '',
		tagList: []
	};

	let draftStore: Writable<RecipeDraft> = writable(recipeDraft);
	setContext<Writable<RecipeDraft>>('recipeDraft', draftStore);

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
		let recipe: Recipe = {
			title: $draftStore.title,
			portions: $draftStore.portions,
			ingredients: $draftStore.ingredientList,
			directions: $draftStore.directionList,
			tags: $draftStore.tagList
		};

		console.log('FINAL RECIPE', recipe);
	}

	function saveDraft() {
		console.log('CURRENT DRAFT', $draftStore);
	}

	function resetAllValues() {
		const blankRecipeDraft: RecipeDraft = {
			title: '',
			portions: 0,
			ingredient: { id: '', name: '', unit: '', quantity: '' },
			ingredientList: [],
			direction: '',
			directionList: [],
			tag: '',
			tagList: []
		};
		draftStore.set(blankRecipeDraft);

		console.log('RESET ALL', $draftStore);
	}
</script>

<Mobile>
	<Button callback={saveRecipe} text="Save" icon={SaveTwoTone} />
	<Button callback={resetAllValues} text="Reset" icon={ReloadOutlined} />
	<Button callback={saveDraft} text="Draft" icon={BlocksOutlined} />
</Mobile>

<slot />
