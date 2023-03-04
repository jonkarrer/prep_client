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
		class="root"
		class:active={$recipe[RecipeKeys.PORTIONS] > 0}
	/>

	<!-- <input type="range" min="0" max="auto" bind:value={$recipe[RecipeKeys.PORTIONS]} class="slider" /> -->
</Paper>

<style>
	.root {
		text-align: center;
		font-size: 24px;
		font-weight: 500;
	}
	.active {
		color: var(--accent);
		border: var(--solid-border);
	}
	.slider {
		margin-top: 24px;
		-webkit-appearance: none;
		appearance: none;

		width: 100%;
		height: 16px;
		padding: 8px;
		background: rgba(90, 90, 90, 0.2);
		outline: none;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
		border-radius: var(--border-radius);
		border: var(--solid-border);
	}

	.slider:hover {
		opacity: 1;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 35px;
		background: var(--contrast);
		box-shadow: none;
		border: var(--solid-border);
		border-radius: var(--border-radius);

		cursor: pointer;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 35px;
		background: var(--contrast);
		border: var(--solid-border);
		border-radius: var(--border-radius);
		box-shadow: none;

		cursor: pointer;
	}
</style>
