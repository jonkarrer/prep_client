<script lang="ts">
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import IngredientPreview from './comps/IngredientPreview.svelte';
	import IngredientInput from './comps/IngredientInput.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeDraftKeys, type RecipeDraft } from '$lib/types/Recipe';

	const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');
</script>

<Paper>
	<Headline title="Ingredients" />

	{#each $recipeDraft[RecipeDraftKeys.INGREDIENTLIST] as item}
		<IngredientPreview quantity={item.quantity} unit={item.unit} name={item.name} />
	{/each}

	<IngredientInput />
</Paper>
