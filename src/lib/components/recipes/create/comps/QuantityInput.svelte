<script lang="ts">
	function areInputsValid(): boolean {
		// Regular expression to match a number or a fraction
		const numberFractionRegex = /^(?:(?:(\d+)\s+)?(\d+)(?:\/(\d+))?)$/;

		if (!quantityValueBinding.length || !numberFractionRegex.test(quantityValueBinding)) {
			console.log('invalid quantity');
			return false;
		} else {
			return true;
		}
	}

	export let quantityValueBinding: string;
	export let quantityElementBinding: HTMLInputElement;
	let valid = false;

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
	input {
		width: 100%;
		padding: 12px 15px;

		font-size: var(--rg);
		border-radius: var(--border-radius);
		border: var(--dashed-border);
	}
	input:focus {
		outline: none;
	}
	.valid {
		border: var(--solid-border);
	}
</style>
