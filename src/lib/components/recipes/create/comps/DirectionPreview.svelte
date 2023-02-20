<script lang="ts">
	import Checkbox from '$lib/components/common/Checkbox.svelte';

	export let direction: string;
	export let order: number;
</script>

<div class="direction">
	<div class="number">
		{(order + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
	</div>
	<div class="text">{direction}</div>
	<div class="checkbox">
		<Checkbox />
	</div>
</div>

<style>
	.direction {
		display: grid;
		grid-template-columns: 20px auto 50px;
		align-items: baseline;
		gap: 10px;

		margin-top: 15px;
		padding: 12px 15px;

		border: var(--solid-border);
		border-radius: 3px;
	}
	.text {
		font-size: var(--rg);
		color: var(--contrast);
	}
	.number {
		font-size: var(--rg);
		color: var(--accent);
		font-weight: bold;
	}
	.direction > *:last-child {
		justify-self: flex-end;
	}
</style>
