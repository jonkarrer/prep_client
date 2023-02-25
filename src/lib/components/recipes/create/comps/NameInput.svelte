<script lang="ts">
	export let nameValueBinding: string;
	export let nameElementBinding: HTMLInputElement;
	export let valid: boolean;

	$: if (nameValueBinding.length < 2) {
		valid = false;
	} else {
		valid = true;
	}
</script>

<input
	type="text"
	placeholder="Name"
	class:valid
	bind:this={nameElementBinding}
	bind:value={nameValueBinding}
	on:click={(e) => {
		e.stopPropagation();
	}}
	on:keyup={(e) => e.preventDefault()}
/>

<style>
	input {
		grid-column: 1 / span 2;
	}
	.valid {
		border: var(--solid-border);
	}
</style>
