<script lang="ts">
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';

	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');
</script>

<Paper>
	<Headline title="Portions" />
	<input
		type="number"
		bind:value={$recipe[RecipeKeys.PORTIONS]}
		placeholder="00"
		class="root"
		class:active={$recipe[RecipeKeys.PORTIONS] != null}
	/>
</Paper>

<style>
	.root {
		text-align: center;
		font-size: 22px;
		font-weight: 500;
	}
	.active {
		color: var(--accent);
		border: var(--solid-border);
	}
</style>
