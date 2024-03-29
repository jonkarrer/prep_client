<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import Tag from '$lib/components/common/Tag.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
	import type { PageData } from './$types';
	import Paper from '$lib/components/common/Paper.svelte';
	import type { Recipe } from '$lib/types/Recipe';
	import { goto } from '$app/navigation';
	import ModifyTools from '$lib/components/common/ModifyTools.svelte';
	import RecipeController from '$lib/controllers/RecipeController';
	import { PROXY_ROUTES } from '$lib/types/Enums';
	import { replaceSpecialChars } from '$lib/utils/replaceSpecialChars';
	import SearchOutlined from '$lib/assets/icons/SearchOutlined.svelte';

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
	<Button callback={() => console.log('search')} text="Search" icon={SearchOutlined} />
</Mobile>

<main>
	{#if recipes.length === 0}
		<section class="no_recipes">
			<h2>
				You don't have any recipes, <br />let's make
				<span style:color="var(--accent)">one.</span>
			</h2>
			<Button
				text="Create A Recipe"
				icon={PlusOutlined}
				toggle={false}
				callback={() => goto('/recipes/create')}
			/>
		</section>
	{/if}
	{#if recipes.length}
		<Paper>
			{#each recipes as recipe, i}
				<button on:click={() => goto('/recipes/view/' + recipe.id)}>
					<div class="heading">
						<h1>{replaceSpecialChars(recipe.title)}</h1>
						<ModifyTools
							deleteCallback={() => deleteRecipe(recipe, i)}
							editCallback={() => modifyRecipe(recipe.id)}
						/>
					</div>
					<div class="tags">
						{#if recipe.portions !== null}
							<Tag tagName={`${recipe.portions} Portions`} />
						{/if}
						<Tag tagName={`${recipe.ingredients.length} Ingredients`} />
						<Tag tagName={`${recipe.directions.length} Steps`} />
					</div>
				</button>
			{/each}
		</Paper>
	{/if}
</main>

<style>
	button {
		display: grid;
		gap: 24px;

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
		grid-template-columns: auto auto;
		align-items: baseline;
		justify-content: space-between;
	}

	h1 {
		font-size: var(--xl);
		color: var(--contrast);
		max-width: 250px;
	}
	.tags {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.no_recipes h2 {
		margin-bottom: 20px;
	}
</style>
