<script lang="ts">
	export let unitValueBinding: string;
	export let unitElementBinding: HTMLInputElement;
	export let valid: boolean;

	// Regex for the unit of measure.
	let unitOfMeasure =
		/^(?:(?:\s*\s*(?:tsp|teaspoon|tbsp|tablespoon|cup|cups|ounce|oz|each|whole|half|quarter|pint|pt|quart|qt|gallon|lbs|pounds|kg|kilogram|gram|ml|milliliter|liter|cm|centimeter|mm|milometer|in|inch|ft|foot|large|lg|sm|small|md|medium|pieces|chunks|slice|clove|can|bunch))+\s*)$/gi;

	$: if (unitValueBinding.length === 0 || !unitOfMeasure.test(unitValueBinding)) {
		valid = false;
	} else {
		valid = true;
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
	.valid {
		border: var(--solid-border);
	}
</style>
