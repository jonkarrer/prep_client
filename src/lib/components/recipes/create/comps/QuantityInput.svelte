<script lang="ts">
	export let quantityValueBinding: string;
	export let quantityElementBinding: HTMLInputElement;
	export let valid: boolean;

	function areInputsValid(): boolean {
		// Regular expression to match a number or a fraction
		const numberFractionRegex = /^(?:(?:(\d+)\s+)?(\d+)(?:\/(\d+))?)$/;

		if (!quantityValueBinding.length || !numberFractionRegex.test(quantityValueBinding)) {
			console.log('invalid quantity');
			return false;
		}
		return true;
	}

	$: if (areInputsValid()) {
		valid = true;
		console.log(quantityValueBinding);
	} else {
		valid = false;
	}
</script>

<input
	type="text"
	placeholder="Quantity"
	class:valid
	bind:this={quantityElementBinding}
	bind:value={quantityValueBinding}
	on:click={(e) => {
		e.stopPropagation();
	}}
	on:keyup={(e) => e.preventDefault()}
/>

<style>
	.valid {
		border: var(--solid-border);
	}
</style>
