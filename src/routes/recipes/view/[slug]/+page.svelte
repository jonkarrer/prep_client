<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import CaretDownOutlined from '$lib/assets/icons/CaretDownOutlined.svelte';
	import EditTwoTone from '$lib/assets/icons/EditTwoTone.svelte';
	import Ingredient from '$lib/components/recipes/Ingredient.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import Tag from '$lib/components/common/Tag.svelte';
	import Direction from '$lib/components/recipes/Direction.svelte';
	import DeleteTwoTone from '$lib/assets/icons/DeleteTwoTone.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import RecipeController from '$lib/controllers/RecipeController';
	import { PROXY_ROUTES } from '$lib/types/Enums';
	import { replaceSpecialChars } from '$lib/utils/replaceSpecialChars';

	export let data: PageData;

	const ingredients = data.ingredients;
	const directions = data.directions;

	function deleteRecipe() {
		RecipeController.proxy(PROXY_ROUTES.DELETE_RECIPE, data);
		goto('/recipes');
	}

	console.log(typeof data.portions);
</script>

<Mobile>
	<Button callback={() => goto(`/recipes/modify/${data.id}`)} text="Modify" icon={EditTwoTone} />
	<Button callback={deleteRecipe} text="Delete" icon={DeleteTwoTone} />
</Mobile>

<main>
	<div class="recipe-name">
		<h3 class="outline">recipes/{replaceSpecialChars(data.title).toLowerCase()}</h3>
		<h1>{replaceSpecialChars(data.title)}</h1>
	</div>

	<div class="stats">
		{#if data.portions !== null}
			<Tag tagName={`${data.portions} Portions`} />
		{/if}
		<Tag tagName={`${ingredients.length} Ingredients`} />
		<Tag tagName={`${directions.length} Steps`} />
	</div>

	<Paper>
		<Headline title={'Ingredients'} />

		{#each ingredients as { quantity, unit, name }}
			<div class="ingredient">
				<Ingredient {quantity} {unit} {name} preventOverflow={false} />
			</div>
		{/each}
	</Paper>

	<div class="directions_wrapper">
		<Paper>
			<Headline title={'Directions'} />

			{#each directions as direction, i}
				<div class="direction">
					<Direction order={i} {direction} preventOverflow={false} />
				</div>
			{/each}
		</Paper>
	</div>
</main>

<style>
	main {
		display: grid;
	}
	.recipe-name {
		margin-bottom: 20px;
	}
	.outline {
		font-size: var(--sm);
		color: var(--darker);

		width: 250px;
		margin-bottom: 4px;

		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
	}
	h1 {
		font-size: var(--3xl);
		color: var(--contrast);
	}
	.stats {
		display: flex;
		gap: 10px;

		margin-bottom: 24px;
	}
	.ingredient,
	.direction {
		margin-top: 15px;
	}
	.directions_wrapper {
		margin-top: 32px;
	}
</style>
