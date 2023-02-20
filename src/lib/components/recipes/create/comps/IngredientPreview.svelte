<script lang="ts">
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	export let name: string;
	export let quantity: string;
	export let unit: string;
</script>

<div class="ingredient">
	<div>{quantity}, {unit}, {name}</div>
	<Checkbox />
</div>

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
