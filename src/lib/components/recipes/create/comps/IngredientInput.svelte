<script lang="ts">
	import { nanoid } from 'nanoid/non-secure';
	import Button from '$lib/components/common/Button.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeDraftKeys, type Ingredient, type RecipeDraft } from '$lib/types/Recipe';
	import QuantityInput from './QuantityInput.svelte';
	import UnitInput from './UnitInput.svelte';

	let isActive = false;
	const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');
	const workingIngredient: Ingredient = { id: '', name: '', unit: '', quantity: '' };

	$: console.log(workingIngredient);

	// Bind to html elements for validation
	let quantityInputElement: HTMLInputElement;
	let unitInputElement: HTMLInputElement;
	let nameInputElement: HTMLDivElement;

	function resetInputs() {
		// Reset ingredient data
		const blankIngredient: Ingredient = { id: '', name: '', unit: '', quantity: '' };
		$recipeDraft[RecipeDraftKeys.INGREDIENT] = blankIngredient;

		// Deactivate the dropdown
		isActive = false;
	}

	function areInputsValid(): boolean {
		let unitOfMeasure =
			/^(?:(?:\s*\s*(?:tsp|teaspoon|tbsp|tablespoon|cup|cups|ounce|oz|each|whole|half|quarter|pint|pt|quart|qt|gallon|lbs|pounds|kg|kilogram|gram|ml|milliliter|liter|cm|centimeter|mm|milometer|in|inch|ft|foot|large|lg|sm|small|md|medium|pieces|chunks|slice))+\s*)$/gi;

		if (
			$recipeDraft[RecipeDraftKeys.INGREDIENT].unit.length === 0 ||
			!unitOfMeasure.test($recipeDraft[RecipeDraftKeys.INGREDIENT].unit)
		) {
			console.log('invalid unit');

			unitInputElement.style.borderColor = 'var(--accent)';
			unitInputElement.focus();
			return false;
		} else {
			unitInputElement.style.borderColor = 'var(--darker)';
		}

		if ($recipeDraft[RecipeDraftKeys.INGREDIENT].name.length === 0) {
			nameInputElement.style.borderColor = 'var(--accent)';
			nameInputElement.focus();
			return false;
		} else {
			nameInputElement.style.borderColor = 'var(--darker)';
		}
		return true;
	}

	function insertIngredient() {
		if (!areInputsValid()) {
			console.log('Recipe Not inserted');
			return;
		}
		const newIngredient = { ...$recipeDraft[RecipeDraftKeys.INGREDIENT], id: nanoid(10) };
		// ! Need to use spread syntax to trigger a state update
		$recipeDraft[RecipeDraftKeys.INGREDIENTLIST] = [
			...$recipeDraft[RecipeDraftKeys.INGREDIENTLIST],
			newIngredient
		];

		resetInputs();
	}
</script>

<button class="root" on:click={() => (isActive = !isActive)}>
	<div class="title">
		<div>Add Ingredient</div>

		<div class="title_icon">
			<PlusSquareTwoTone {isActive} />
		</div>
	</div>

	<div style:display={isActive ? 'grid' : 'none'} class="input_wrapper">
		<QuantityInput
			quantityValueBinding={workingIngredient.quantity}
			quantityElementBinding={quantityInputElement}
		/>
		<UnitInput unitValueBinding={workingIngredient.unit} unitElementBinding={unitInputElement} />

		<input
			class="name"
			type="text"
			placeholder="Name"
			bind:this={nameInputElement}
			bind:value={$recipeDraft[RecipeDraftKeys.INGREDIENT].name}
			on:click={(e) => {
				e.stopPropagation();
			}}
			on:keyup={(e) => e.preventDefault()}
		/>
	</div>
</button>

<div style:display={isActive ? 'flex' : 'none'} class="action_buttons">
	<Button callback={insertIngredient} text="Commit" icon={PlusCircleTwoTone} width="90px" />
	<Button callback={(e) => console.log(e)} text="Erase" icon={CloseCircleTwoTone} width="90px" />
</div>

<style>
	.root {
		display: grid;
		align-items: center;
		grid-auto-flow: row;
		gap: 20px;

		width: 100%;
		margin-top: 15px;
		padding: 12px 15px;

		text-align: left;
		font-size: var(--rg);
		color: var(--darker);

		border: var(--dashed-border);
		border-radius: var(--border-radius);
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.title_icon {
		height: 16px;
		width: 16px;
	}

	.input_wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}
	input {
		width: 100%;
		padding: 12px 15px;

		font-size: var(--rg);
		border-radius: var(--border-radius);
	}
	input:focus {
		border: var(--solid-border);
		outline: none;
	}
	input.name {
		border: var(--dashed-border);
		grid-column: 1 / span 2;
	}

	.action_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
</style>
