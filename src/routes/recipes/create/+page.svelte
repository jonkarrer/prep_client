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
</style>
