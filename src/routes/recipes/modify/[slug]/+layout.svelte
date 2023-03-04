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
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import RecipeController from '$lib/controllers/RecipeController';
	import { PROXY_ROUTES } from '$lib/types/Enums';

	export let data: PageData;

	let allInputsAreValid = false;

	let recipeStore: Writable<Recipe> = writable(data);
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

		const request = RecipeController.proxy(PROXY_ROUTES.MODIFY_RECIPE, $recipeStore);

		if (!request) {
			alert('Oops! Something went wrong. Please try again.');
			return;
		} else {
			goto('/recipes');
		}
	}

	function deleteRecipe() {
		RecipeController.proxy(PROXY_ROUTES.DELETE_RECIPE, $recipeStore);
		goto('/recipes');
	}
</script>

<Mobile>
	<Button toggle={allInputsAreValid} callback={saveRecipe} text="Save" icon={SaveTwoTone} />
	<Button
		callback={() => goto(`/recipes/view/${$recipeStore.id}`)}
		text="Cancel"
		icon={ReloadOutlined}
	/>
	<Button callback={deleteRecipe} text="Delete" icon={BlocksOutlined} />
</Mobile>

<slot />
