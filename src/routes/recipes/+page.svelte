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
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import type { Recipe } from '$lib/types/Recipe';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const recipes: Array<Recipe> = data.recipes ?? [];
	console.log('Cient side', recipes);
</script>

<Mobile>
	<Button callback={() => goto('/recipes/create')} text="Create" icon={PlusOutlined} />
	<Button callback={(e) => console.log(e)} text="View" icon={CaretDownOutlined} />
	<Search />
</Mobile>

<PageTransition>
	<main>
		<Paper>
			{#each recipes as recipe}
				<button on:click={() => goto('/recipes/view/' + recipe.id)}>
					<div class="heading">
						<h1>{recipe.title}</h1>
						<Checkbox />
					</div>
					<div class="tags">
						{#each recipe.tags as tagName}
							<Tag {tagName} />
						{/each}
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
		align-items: first baseline;
		justify-content: space-between;
	}
	h1 {
		font-size: var(--xl);
	}
	.tags {
		display: flex;
		align-items: center;
		gap: 10px;
	}
</style>
