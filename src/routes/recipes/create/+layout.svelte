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
	import { RecipeModel } from '$lib/models/RecipeModel';
	import { nanoid } from 'nanoid/non-secure';
	import { goto } from '$app/navigation';

	let allInputsAreValid = false;
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

	$: {
		(() => {
			if ($recipeStore.title.length < 2) {
				allInputsAreValid = false;
				return;
			}
			if ($recipeStore.ingredients.length === 0) {
				allInputsAreValid = false;
				return;
			}
			if ($recipeStore.directions.length === 0) {
				allInputsAreValid = false;
				return;
			}
			if ($recipeStore.portions === 0) {
				allInputsAreValid = false;
				return;
			}

			allInputsAreValid = true;
			return;
		})();
	}

	function validateAllInputs() {
		if ($recipeStore.title.length < 2) {
			alert('Recipe Title is Missing');
			return false;
		}
		if ($recipeStore.ingredients.length === 0) {
			alert('Recipe Ingredient is Missing');
			return false;
		}
		if ($recipeStore.directions.length === 0) {
			alert('Recipe Direction is Missing');
			return false;
		}
		if ($recipeStore.portions === 0) {
			alert('Recipe Portions is Missing');
			return false;
		}
		return true;
	}

	async function saveRecipe() {
		if (!validateAllInputs()) {
			return;
		}

		const request = RecipeModel.create($recipeStore);

		if (!request) {
			alert('Oops! Something went wrong. Please try again.');
			return;
		} else {
			goto('/recipes');
		}
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
	<Button toggle={allInputsAreValid} callback={saveRecipe} text="Save" icon={SaveTwoTone} />
	<Button callback={resetAllValues} text="Reset" icon={ReloadOutlined} />
	<Button callback={saveDraft} text="Draft" icon={BlocksOutlined} />
</Mobile>

<slot />
