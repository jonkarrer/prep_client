<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
	import TagPreview from './comps/TagPreview.svelte';
	// import { getContext } from 'svelte';
	// import type { Writable } from 'svelte/store';
	// import { RecipeDraftKeys, type RecipeDraft } from '$lib/types/Recipe';

	// const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');

	const tempTags = [
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
		<Button
			callback={(e) => console.log(e)}
			text="Add Tag"
			icon={PlusOutlined}
			borderStyles="dashed"
		/>
		{#each tempTags as tag}
			<TagPreview {tag} />
		{/each}
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
