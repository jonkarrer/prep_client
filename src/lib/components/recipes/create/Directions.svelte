<script lang="ts">
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import DirectionPreview from './comps/DirectionPreview.svelte';
	import DirectionInput from './comps/DirectionInput.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeDraftKeys, type RecipeDraft } from '$lib/types/Recipe';

	const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');
</script>

<Paper>
	<Headline title="Directions" />
	{#each $recipeDraft[RecipeDraftKeys.DIRECTIONLIST] as item, i}
		<DirectionPreview direction={item} order={i} />
	{/each}

	<DirectionInput nextOrder={$recipeDraft[RecipeDraftKeys.DIRECTIONLIST].length + 1} />
</Paper>

<style>
</style>
