<script lang="ts">
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import TagPreview from './comps/TagPreview.svelte';
	import TagInput from './comps/TagInput.svelte';

	$: tempTags = [
		'Gluten Free',
		'Vegan',
		'High Protein',
		'Low Carb',
		'Spicy',
		'Beef',
		'Soup',
		'Pasta',
		'Lunch',
		'Dessert',
		'Dairy Free',
		'Low Glycemic',
		'Cheesy'
	];
</script>

<Paper>
	<Headline title="Tags" />

	<div class="tags_wrapper">
		{#each tempTags as tag}
			<TagPreview {tag} />
		{/each}

		<TagInput bind:tempTags />
	</div>
</Paper>

<style>
	.tags_wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 15px;
	}
</style>
