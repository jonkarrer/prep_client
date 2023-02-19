<script>
	import Button from '$lib/components/common/Button.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
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
	.tags_wrapper {
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
