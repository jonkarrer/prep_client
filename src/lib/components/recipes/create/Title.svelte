<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeDraftKeys, type RecipeDraft } from '$lib/types/Recipe';

	const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');
</script>

<input
	class="title"
	style:border={$recipeDraft[RecipeDraftKeys.TITLE].length === 0
		? 'var(--dashed-border)'
		: 'var(--solid-border)'}
	bind:value={$recipeDraft[RecipeDraftKeys.TITLE]}
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
