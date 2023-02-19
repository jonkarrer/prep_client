<script>
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import DirectionPreview from './comps/DirectionPreview.svelte';
	import DirectionInput from './comps/DirectionInput.svelte';
</script>

<Paper>
	<Headline title="Directions" />
	<DirectionPreview />
	<DirectionInput />
</Paper>

<style>
</style>
