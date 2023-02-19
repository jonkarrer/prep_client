<script>
	import Checkbox from '$lib/components/common/Checkbox.svelte';
</script>

<div class="direction">
	<div class="number">01</div>
	<div class="step">Do a bunch of stuff to make this text really long and cause it to wrap</div>
	<div class="checkbox">
		<Checkbox />
	</div>
</div>

<style>
	.direction {
		display: grid;
		grid-template-columns: auto auto 50px;
		align-items: baseline;
		gap: 10px;

		margin-top: 15px;
		padding: 12px 15px;

		border: var(--solid-border);
		border-radius: 3px;
	}
	.direction .step {
		font-size: var(--rg);
		color: var(--contrast);
	}
	.direction .number {
		font-size: var(--rg);
		color: var(--accent);
		font-weight: bold;
	}
	.direction > *:last-child {
		justify-self: flex-end;
	}
</style>
