<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';

	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');
</script>

<input
	style:border={$recipe[RecipeKeys.TITLE].length < 2
		? 'var(--dashed-border)'
		: 'var(--solid-border)'}
	bind:value={$recipe[RecipeKeys.TITLE]}
	type="text"
	placeholder="Recipe Name"
/>

<style>
	input {
		font-size: var(--xl);
	}
</style>
