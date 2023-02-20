<script lang="ts">
	import { nanoid } from 'nanoid/non-secure';
	import Button from '$lib/components/common/Button.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeDraftKeys, type Ingredient, type RecipeDraft } from '$lib/types/Recipe';

	let isActive = false;
	const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');

	function resetInputs() {
		// Reset ingredient data
		const blankIngredient: Ingredient = { id: '', name: '', unit: '', quantity: '' };
		$recipeDraft[RecipeDraftKeys.INGREDIENT] = blankIngredient;

		// Deactivate the dropdown
		isActive = false;
	}

	function insertIngredient() {
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
		<input
			class="quantity"
			type="text"
			placeholder="Quantity"
			bind:value={$recipeDraft[RecipeDraftKeys.INGREDIENT].quantity}
			on:click={(e) => {
				e.stopPropagation();
			}}
			on:keyup={(e) => e.preventDefault()}
		/>
		<input
			class="unit"
			type="text"
			placeholder="Unit"
			bind:value={$recipeDraft[RecipeDraftKeys.INGREDIENT].unit}
			on:click={(e) => {
				e.stopPropagation();
			}}
			on:keyup={(e) => e.preventDefault()}
		/>
		<input
			class="name"
			type="text"
			placeholder="Name"
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
	input.quantity {
		border: var(--dashed-border);
	}
	input.unit {
		border: var(--dashed-border);
	}

	.action_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
</style>
