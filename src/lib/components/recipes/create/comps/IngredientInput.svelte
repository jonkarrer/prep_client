<script lang="ts">
	import { nanoid } from 'nanoid/non-secure';
	import Button from '$lib/components/common/Button.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Ingredient, type Recipe } from '$lib/types/Recipe';
	import QuantityInput from './QuantityInput.svelte';
	import UnitInput from './UnitInput.svelte';
	import NameInput from './NameInput.svelte';

	let isActive = false;
	let allInputsAreValid = false;
	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');

	// Bind values for insertion into ingredient
	let quantityInputValue = '';
	let unitInputValue = '';
	let nameInputValue = '';

	// Bind Validity
	let quantityValidState = false;
	let unitValidState = false;
	let nameValidState = false;

	// Bind to html elements for validation
	let quantityInputElement: HTMLInputElement;
	let unitInputElement: HTMLInputElement;
	let nameInputElement: HTMLInputElement;

	function resetInputs(): void {
		// Reset ingredient data
		quantityInputValue = '';
		unitInputValue = '';
		nameInputValue = '';
	}

	function handleValidationFail(): void {
		if (!quantityValidState) {
			quantityInputElement.focus();
			return;
		}
		if (!unitValidState) {
			unitInputElement.focus();
			return;
		}
		if (!nameValidState) {
			nameInputElement.focus();
			return;
		}
	}

	function insertIngredient(): void {
		if (!allInputsAreValid) {
			handleValidationFail();
			return;
		}

		const newIngredient: Ingredient = {
			id: nanoid(10),
			name: nameInputValue,
			quantity: quantityInputValue,
			unit: unitInputValue
		};

		$recipe[RecipeKeys.INGREDIENTS] = [...$recipe[RecipeKeys.INGREDIENTS], newIngredient];

		resetInputs();
		isActive = false;
	}

	$: {
		(function areInputsValid(): void {
			if (!quantityValidState || !unitValidState || !nameValidState) {
				console.log('All Inputs Not Valid');
				allInputsAreValid = false;
			} else {
				allInputsAreValid = true;
			}
		})();
	}
</script>

<button class="root" class:allInputsAreValid on:click={() => (isActive = !isActive)}>
	<div class="title">
		<div>Add Ingredient</div>

		<div class="title_icon">
			<PlusSquareTwoTone toggle={isActive} />
		</div>
	</div>

	<div style:display={isActive ? 'grid' : 'none'} class="input_wrapper">
		<QuantityInput
			bind:quantityValueBinding={quantityInputValue}
			bind:quantityElementBinding={quantityInputElement}
			bind:valid={quantityValidState}
		/>

		<UnitInput
			bind:unitValueBinding={unitInputValue}
			bind:unitElementBinding={unitInputElement}
			bind:valid={unitValidState}
		/>
		<NameInput
			bind:nameValueBinding={nameInputValue}
			bind:nameElementBinding={nameInputElement}
			bind:valid={nameValidState}
		/>
	</div>
</button>

<div style:display={isActive ? 'flex' : 'none'} class="action_buttons">
	<Button
		bind:toggle={allInputsAreValid}
		callback={insertIngredient}
		text="Commit"
		icon={PlusCircleTwoTone}
		width="90px"
	/>
	<Button callback={resetInputs} text="Erase" icon={CloseCircleTwoTone} width="90px" />
</div>

<style>
	.root {
		display: grid;
		align-items: center;
		grid-auto-flow: row;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.input_wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}

	.action_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
	.allInputsAreValid {
		border: var(--solid-border);
		color: var(--contrast);
	}
</style>
