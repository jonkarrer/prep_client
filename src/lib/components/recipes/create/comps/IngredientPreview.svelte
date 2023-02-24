<script lang="ts">
	import IngredientIcon from '$lib/assets/icons/IngredientIcon.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';

	export let name: string;
	export let quantity: string;
	export let unit: string;
</script>

<div class="preview">
	<div class="text"><strong>{quantity}</strong>, <strong>{unit}</strong>, {name}</div>

	<Checkbox />
</div>

<style>
	.preview {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.text {
		text-align: left;
		max-width: 55vw;
		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
		/* text-overflow: ellipsis; */
	}
	strong {
		font-weight: 600;
		color: var(--accent);
	}
</style>
