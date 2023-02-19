<script lang="ts">
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import IngredientInput from './comps/IngredientInput.svelte';
</script>

<Paper>
	<Headline title="Ingredients" />

	<div class="ingredient">
		<div>4, cups, sifted white sugar</div>
		<Checkbox />
	</div>

	<IngredientInput />
</Paper>

<style>
	.ingredient {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 15px;
		padding: 12px 15px;

		font-size: var(--rg);
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: 3px;
	}
</style>
