<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeDraftKeys, type RecipeDraft } from '$lib/types/Recipe';

	export let tag: string;
	export let selected = false;

	const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');

	function toggleTag() {
		// If tag is already selected, it will be in the array.
		if ($recipeDraft[RecipeDraftKeys.TAGLIST].indexOf(tag) != -1) {
			// Remove from recipe data
			$recipeDraft[RecipeDraftKeys.TAGLIST] = $recipeDraft[RecipeDraftKeys.TAGLIST].filter(
				(item: string) => item != tag
			);
			// Deselect
			selected = false;
			return;
		} else {
			// Select
			selected = true;
			// Add tag to recipe
			$recipeDraft[RecipeDraftKeys.TAGLIST] = [...$recipeDraft[RecipeDraftKeys.TAGLIST], tag];
		}
	}
</script>

<button class:selected on:click={toggleTag} class="tag">{tag}</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;

		min-width: 70px;
		padding: 6px 9px;

		font-size: var(--sm);
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: var(--border-radius);
	}
	.selected {
		background-color: var(--accent);
		color: #fff;
	}
</style>
