<script lang="ts">
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
		height: 18px;
		width: 18px;

		border: var(--solid-border);
	}

	.toggle {
		background: var(--accent);
	}
</style>
