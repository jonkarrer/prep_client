<script lang="ts">
	import Checkbox from '$lib/components/common/Checkbox.svelte';

	export let name: string;
	export let quantity: string;
	export let unit: string;
</script>

<div class="preview">
	<div>{quantity}, {unit}, {name}</div>
	<Checkbox />
</div>

<style>
	.preview {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
