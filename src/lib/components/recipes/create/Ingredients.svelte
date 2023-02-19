<script lang="ts">
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import IngredientPreview from './comps/IngredientPreview.svelte';
	import IngredientInput from './comps/IngredientInput.svelte';
</script>

<Paper>
	<Headline title="Ingredients" />
	<IngredientPreview />
	<IngredientInput />
</Paper>
