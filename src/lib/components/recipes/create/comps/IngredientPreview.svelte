<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import IngredientPreview from '$lib/components/recipes/Ingredient.svelte';
	import NameInput from './NameInput.svelte';
	import QuantityInput from './QuantityInput.svelte';
	import UnitInput from './UnitInput.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe, type Ingredient } from '$lib/types/Recipe';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import DeleteTwoTone from '$lib/assets/icons/DeleteTwoTone.svelte';

	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');

	export let name: string;
	export let quantity: string;
	export let unit: string;
	export let id: string;

	// Bind values for insertion into ingredient
	let quantityInputValue = quantity;
	let unitInputValue = unit;
	let nameInputValue = name;

	// Bind Validity
	let quantityValidState = true;
	let unitValidState = true;
	let nameValidState = true;

	// Bind to html elements for validation
	let quantityInputElement: HTMLInputElement;
	let unitInputElement: HTMLInputElement;
	let nameInputElement: HTMLInputElement;

	let isActive = false;
	let allInputsAreValid = false;

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

	function insertModifiedIngredient() {
		if (!allInputsAreValid) {
			handleValidationFail();
			return;
		}

		const newIngredient: Ingredient = {
			id: id,
			name: nameInputValue,
			quantity: quantityInputValue,
			unit: unitInputValue
		};

		$recipe[RecipeKeys.INGREDIENTS] = $recipe[RecipeKeys.INGREDIENTS].map((item) => {
			if (item.id === id) return newIngredient;
			return item;
		});

		isActive = false;
	}

	function cancelChanges() {
		console.log('array', $recipe[RecipeKeys.INGREDIENTS]);

		quantityInputValue = quantity;
		unitInputValue = unit;
		nameInputValue = name;

		isActive = false;
	}

	function deleteDirection() {
		$recipe[RecipeKeys.INGREDIENTS] = $recipe[RecipeKeys.INGREDIENTS].filter((item) => {
			if (item.id === id) return;
			return item;
		});

		isActive = false;
	}

	function activateEditMode() {
		isActive = !isActive;
	}

	$: {
		(function areInputsValid(): void {
			if (!quantityValidState || !unitValidState || !nameValidState) {
				allInputsAreValid = false;
			} else {
				allInputsAreValid = true;
			}
		})();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<button class="preview" on:click={activateEditMode}>
	<div class="heading">
		<span class="text preventOverflow" class:nuetralize={isActive}>
			<strong>{quantity}</strong> <strong>{unit}</strong>,
			<span>{name}</span>
		</span>

		<div class="checkbox" class:toggle={isActive} />
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
		callback={insertModifiedIngredient}
		text="Change"
		icon={PlusCircleTwoTone}
		width="90px"
	/>
	<Button callback={cancelChanges} text="Cancel" icon={CloseCircleTwoTone} width="90px" />
	<Button callback={deleteDirection} text="Delete" icon={DeleteTwoTone} width="90px" />
</div>

<style>
	.preview {
		display: grid;
		align-items: center;
		grid-auto-flow: row;
		color: var(--contrast);
		width: 100%;
	}
	.heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.input_wrapper {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-top: 15px;
		gap: 10px;
	}
	.checkbox {
		height: 18px;
		width: 18px;

		border: var(--solid-border);
	}
	.toggle {
		background: var(--accent);
	}
	.text {
		text-align: left;
	}
	strong {
		font-weight: 600;
		color: var(--accent);
	}
	.preventOverflow {
		max-width: 150px;
		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
	}
	.nuetralize,
	.nuetralize * {
		color: var(--darker);
	}
</style>
