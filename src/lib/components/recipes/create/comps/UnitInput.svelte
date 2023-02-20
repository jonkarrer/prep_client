<script lang="ts">
	export let unitValueBinding: string;
	export let unitElementBinding: HTMLInputElement;
	let valid = false;

	function areInputsValid(): boolean {
		let unitOfMeasure =
			/^(?:(?:\s*\s*(?:tsp|teaspoon|tbsp|tablespoon|cup|cups|ounce|oz|each|whole|half|quarter|pint|pt|quart|qt|gallon|lbs|pounds|kg|kilogram|gram|ml|milliliter|liter|cm|centimeter|mm|milometer|in|inch|ft|foot|large|lg|sm|small|md|medium|pieces|chunks|slice))+\s*)$/gi;

		if (unitValueBinding.length === 0 || !unitOfMeasure.test(unitValueBinding)) {
			console.log('invalid unit');
			return false;
		}
		return true;
	}

	$: if (areInputsValid()) {
		valid = true;
		console.log(unitValueBinding);
	} else {
		valid = false;
	}
</script>

<input
	type="text"
	placeholder="Unit"
	class:valid
	bind:this={unitElementBinding}
	bind:value={unitValueBinding}
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
