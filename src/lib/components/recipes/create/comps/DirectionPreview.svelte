<script lang="ts">
	import Checkbox from '$lib/components/common/Checkbox.svelte';

	export let direction: string;
	export let order: number;
</script>

<article class="preview">
	<div class="number">
		{(order + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
	</div>
	<p class="text">{direction}</p>
	<div class="checkbox">
		<Checkbox />
	</div>
</article>

<style>
	.preview {
		display: grid;
		grid-template-columns: 20px auto 1fr;
		align-items: baseline;
		gap: 10px;
	}
	.text {
		font-size: var(--rg);
		color: var(--contrast);
		line-height: 1.5;
		max-width: 55vw;
		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
	}
	.number {
		font-size: var(--rg);
		color: var(--accent);
		font-weight: bold;
	}
	article > *:last-child {
		justify-self: flex-end;
	}
</style>
