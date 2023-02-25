<script lang="ts">
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import Ingredient from '$lib/components/recipes/Ingredient.svelte';

	export let name: string;
	export let quantity: string;
	export let unit: string;
</script>

<div class="preview">
	<Ingredient {quantity} {unit} {name} />
	<Checkbox />
</div>

<style>
	.preview {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
