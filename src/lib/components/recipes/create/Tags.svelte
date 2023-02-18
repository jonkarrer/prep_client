<script>
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import SaveTwoTone from '$lib/assets/icons/SaveTwoTone.svelte';
	import ReloadOutlined from '$lib/assets/icons/ReloadOutlined.svelte';
	import BlocksOutlined from '$lib/assets/icons/BlocksOutlined.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import Ingredients from '$lib/components/recipes/create/Ingredients.svelte';
	import Directions from '$lib/components/recipes/create/Directions.svelte';
</script>

<Paper>
	<Headline title="Tags" />
	<div class="tag_wrapper">
		<Button
			callback={(e) => console.log(e)}
			text="Add Tag"
			icon={PlusOutlined}
			borderStyles="dashed"
		/>
		<div class="tag">Name</div>
		<div class="tag">Name Long</div>
		<div class="tag">Name</div>
		<div class="tag">Name Really</div>
		<div class="tag">Name</div>
		<div class="tag">Name</div>
		<div class="tag">Name Really Long</div>
		<div class="tag">Name Long</div>
		<div class="tag">Name</div>
		<div class="tag">Name</div>
	</div>
</Paper>

<style>
	.tag_wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 15px;
	}
	.tag {
		display: flex;
		align-items: center;
		justify-content: center;

		min-width: 70px;
		padding: 6px 9px;

		font-size: var(--sm);
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: var(--border-radius);
	}
</style>
