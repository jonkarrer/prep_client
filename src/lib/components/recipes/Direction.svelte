<script lang="ts">
	export let direction: string;
	export let order: number;
	export let preventOverflow = true;
</script>

<div class="direction">
	<div class="order">
		{(order + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
	</div>
	<p class="text" class:preventOverflow>{direction}</p>
</div>

<style>
	.direction {
		display: flex;
		align-items: baseline;
		gap: 10px;
	}
	.text {
		font-size: var(--rg);
		color: var(--contrast);
		line-height: 1.5;
	}
	.preventOverflow {
		max-width: 55vw;
		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
	}
	.order {
		font-size: var(--rg);
		color: var(--accent);
		font-weight: bold;
	}
</style>
