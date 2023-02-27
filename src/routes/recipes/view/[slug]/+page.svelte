<script lang="ts">
	import type { Recipe } from '$lib/types/Recipe';

	import PageTransition from '$lib/components/common/PageTransition.svelte';
	import type { PageData } from './$types';
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

	export let data: PageData;

	const ingredients = data.ingredients;
	const directions = data.directions;
	const tags = data.tags;
</script>

<Mobile>
	<Button callback={() => console.log('Version')} text="Version" icon={CaretDownOutlined} />
	<Button callback={() => console.log('Modify')} text="Modify" icon={EditTwoTone} />
	<Button callback={() => console.log('Delete')} text="Delete" icon={DeleteTwoTone} />
</Mobile>

<PageTransition>
	<main>
		<div class="recipe-name">
			<h3 class="outline">recipes/{data.title.toLowerCase()}</h3>
			<h1>{data.title}</h1>
		</div>

		<div class="stats">
			<Tag tagName={`${data.portions} Portions`} />
			<Tag tagName={`${ingredients.length} Ingredients`} />
			<Tag tagName={`${directions.length} Steps`} />
		</div>

		<Paper>
			<Headline title={'Ingredients'} />

			{#each ingredients as { quantity, unit, name }}
				<div class="ingredient">
					<Ingredient {quantity} {unit} {name} />
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
</PageTransition>

<style>
	main {
		display: grid;
	}
	.recipe-name {
		margin: 20px 0;
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
		font-size: var(--xxl);
		color: var(--contrast);
	}

	.stats {
		display: flex;
		gap: 10px;

		margin-bottom: 32px;
	}

	.ingredient,
	.direction {
		margin-top: 15px;
	}

	.directions_wrapper {
		margin-top: 32px;
	}
</style>
