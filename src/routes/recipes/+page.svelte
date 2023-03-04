<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import Search from '$lib/components/common/Search.svelte';
	import Tag from '$lib/components/common/Tag.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
	import CaretDownOutlined from '$lib/assets/icons/CaretDownOutlined.svelte';
	import type { PageData } from './$types';
	import PageTransition from '$lib/components/common/PageTransition.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import type { Recipe } from '$lib/types/Recipe';
	import { goto } from '$app/navigation';
	import ModifyTools from '$lib/components/common/ModifyTools.svelte';
	import RecipeController from '$lib/controllers/RecipeController';
	import { PROXY_ROUTES } from '$lib/types/Enums';

	export let data: PageData;
	let recipes: Array<Recipe> = data.recipes ?? [];

	function deleteRecipe(recipe: Recipe, key: number) {
		recipes = recipes.filter((item, index) => {
			if (index === key) return;
			return item;
		});
		RecipeController.proxy(PROXY_ROUTES.DELETE_RECIPE, recipe);
	}

	function modifyRecipe(recipeId: string) {
		goto(`/recipes/modify/${recipeId}`);
	}
</script>

<Mobile>
	<Button callback={() => goto('/recipes/create')} text="Create" icon={PlusOutlined} />
	<Button callback={() => console.log('view')} text="View" icon={CaretDownOutlined} />
	<Search />
</Mobile>

<PageTransition>
	<main>
		<Paper>
			{#each recipes as recipe, i}
				<button on:click={() => goto('/recipes/view/' + recipe.id)}>
					<div class="heading">
						<h1>{recipe.title}</h1>
						<ModifyTools
							deleteCallback={() => deleteRecipe(recipe, i)}
							editCallback={() => modifyRecipe(recipe.id)}
						/>
					</div>
					<div class="tags">
						<Tag tagName={`${recipe.portions} Portions`} />
						<Tag tagName={`${recipe.ingredients.length} Ingredients`} />
						<Tag tagName={`${recipe.directions.length} Steps`} />
					</div>
				</button>
			{/each}
		</Paper>
	</main>
</PageTransition>

<style>
	button {
		display: grid;
		gap: 16px;

		width: 100%;
		padding-bottom: 24px;
		border-bottom: solid 1px var(--contrast);

		text-align: left;
	}
	button:not(:first-child) {
		margin-top: 15px;
	}
	.heading {
		display: grid;
		grid-template-columns: 250px auto;
		align-items: baseline;
		justify-content: space-between;
	}

	h1 {
		font-size: var(--xl);
		color: var(--contrast);
	}
	.tags {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
