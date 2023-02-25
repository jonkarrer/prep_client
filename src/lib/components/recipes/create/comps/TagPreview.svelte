<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';

	export let tag: string;
	export let selected = false;

	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');

	function toggleTag() {
		// If tag is already selected, it will be in the array.
		if ($recipe[RecipeKeys.TAGS].indexOf(tag) != -1) {
			// Remove from recipe data
			$recipe[RecipeKeys.TAGS] = $recipe[RecipeKeys.TAGS].filter((item: string) => item != tag);
			// Deselect
			selected = false;
			return;
		} else {
			// Select
			selected = true;
			// Add tag to recipe
			$recipe[RecipeKeys.TAGS] = [...$recipe[RecipeKeys.TAGS], tag];
		}
	}
</script>

<button class:selected on:click={toggleTag} class="tag">{tag}</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 5px 9px;

		font-size: var(--xs);
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: var(--border-radius);
	}
	.selected {
		background-color: var(--accent);
		color: var(--lighter);
	}
</style>
