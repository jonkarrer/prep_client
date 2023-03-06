<script lang="ts">
	export let toggle = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class:toggle
	on:click={(e) => {
		e.stopPropagation();
		toggle = !toggle;
	}}
/>

<style>
	div {
		height: 18px;
		width: 18px;

		border: var(--solid-border);
	}

	.toggle {
		background: var(--accent);
	}
</style>
