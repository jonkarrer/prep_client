<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';

	const recipeData: Writable<Recipe> = getContext<Writable<Recipe>>('recipeData');
</script>

<input
	class="title"
	style:border={$recipeData[RecipeKeys.TITLE].length === 0
		? 'var(--dashed-border)'
		: 'var(--solid-border)'}
	bind:value={$recipeData[RecipeKeys.TITLE]}
	type="text"
	placeholder="Recipe Name"
/>

<style>
	input {
		width: 100%;
		padding: 12px 15px;

		font-size: var(--rg);
		border-radius: var(--border-radius);
	}
	input:focus {
		border: var(--solid-border);
		outline: none;
	}
	input.title {
		font-size: var(--xl);
	}
</style>
