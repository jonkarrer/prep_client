<script lang="ts">
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import Direction from '$lib/components/recipes/Direction.svelte';

	export let direction: string;
	export let order: number;
</script>

<article class="preview">
	<Direction {order} {direction} preventOverflow={true} />
	<div class="checkbox">
		<Checkbox />
	</div>
</article>

<style>
	.preview {
		display: grid;
		grid-template-columns: 2fr 1fr;
		align-items: baseline;
		gap: 10px;
	}

	article > *:last-child {
		justify-self: flex-end;
	}
</style>
