<script lang="ts">
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import DirectionPreview from './comps/DirectionPreview.svelte';
	import DirectionInput from './comps/DirectionInput.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';

	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');
</script>

<Paper>
	<Headline title="Directions" />
	{#each $recipe[RecipeKeys.DIRECTIONS] as item, i}
		<DirectionPreview direction={item} order={i} />
	{/each}

	<DirectionInput nextOrder={$recipe[RecipeKeys.DIRECTIONS].length + 1} />
</Paper>
