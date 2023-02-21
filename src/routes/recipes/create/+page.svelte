<script lang="ts">
	import Title from '$lib/components/recipes/create/Title.svelte';
	import Ingredients from '$lib/components/recipes/create/Ingredients.svelte';
	import Directions from '$lib/components/recipes/create/Directions.svelte';
	import Tags from '$lib/components/recipes/create/Tags.svelte';
	import Portions from '$lib/components/recipes/create/Portions.svelte';
</script>

<div id="recipe_creation_form">
	<Title />

	<Ingredients />

	<Directions />

	<Tags />

	<Portions />
</div>

<style>
	div {
		display: grid;
		gap: 24px;
		margin: 20px var(--gutter-mobile) 40px;
	}
	:global(.root) {
		gap: 20px;

		width: 100%;
		margin-top: 15px;
		padding: 12px 15px;

		font-size: var(--rg);
		color: var(--darker);

		border: var(--dashed-border);
		border-radius: var(--border-radius);
	}
	:global(.preview) {
		margin-top: 15px;
		padding: 12px 15px;

		font-size: var(--rg);
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: var(--border-radius);
	}
	:global(input) {
		width: 100%;
		padding: 12px 15px;

		font-size: var(--rg);
		border-radius: var(--border-radius);
		border: var(--dashed-border);
		outline: none;
	}
	:global(.action_buttons) {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		width: 100%;
		margin-top: 15px;
	}
	:global(.title_icon) {
		height: 16px;
		width: 16px;
	}
</style>
