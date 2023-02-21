<script lang="ts">
	export let nameValueBinding: string;
	export let nameElementBinding: HTMLInputElement;
	export let valid: boolean;

	function areInputsValid(): boolean {
		if (nameValueBinding.length < 2) {
			return false;
		}
		return true;
	}

	$: if (areInputsValid()) {
		valid = true;
		console.log(nameValueBinding);
	} else {
		valid = false;
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
