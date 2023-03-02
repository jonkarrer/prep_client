<script>
	export let toggle = false;
</script>

<button
	class:toggle
	on:click={(e) => {
		e.stopPropagation();
		toggle = !toggle;
	}}
/>

<style>
	button {
		height: 16px;
		width: 16px;

		border: var(--solid-border);
	}

	.toggle {
		background: var(--accent);
	}
</style>
