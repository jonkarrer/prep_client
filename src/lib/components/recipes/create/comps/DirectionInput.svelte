<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';

	export let nextOrder: number;

	let isActive = false;
	let valid = false;
	let directionValueBinding = '';

	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');

	function areInputsValid(): boolean {
		if (directionValueBinding.length < 2) {
			return false;
		}
		return true;
	}

	$: if (areInputsValid()) {
		valid = true;
		console.log(directionValueBinding);
	} else {
		valid = false;
	}

	function resetInputs() {
		directionValueBinding = '';
		isActive = false;
	}

	function insertDirection() {
		// ! Need to use spread syntax to trigger a state update
		$recipe[RecipeKeys.DIRECTIONS] = [...$recipe[RecipeKeys.DIRECTIONS], directionValueBinding];

		resetInputs();
	}
</script>

<button class:valid on:click={() => (isActive = !isActive)}>
	<div class="title">
		<div class="next_number">
			{nextOrder.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
		</div>
		<div>Add Direction</div>
	</div>

	<div class="title_icon">
		<PlusSquareTwoTone {isActive} />
	</div>

	<input
		type="text"
		placeholder="Describe Step"
		class:valid
		bind:value={directionValueBinding}
		on:click={(e) => {
			e.stopPropagation();
		}}
		on:keyup={(e) => e.preventDefault()}
		style:display={isActive ? 'block' : 'none'}
	/>
</button>

<div style:display={isActive ? 'flex' : 'none'} class="create_buttons">
	<Button callback={insertDirection} text="Commit" icon={PlusCircleTwoTone} width="90px" />
	<Button callback={(e) => console.log(e)} text="Erase" icon={CloseCircleTwoTone} width="90px" />
</div>

<style>
	button {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: row;
		gap: 20px;

		width: 100%;
		margin-top: 15px;
		padding: 12px 15px;

		font-size: var(--rg);
		color: var(--darker);

		border: var(--dashed-border);
		border-radius: var(--border-radius);
	}

	.title {
		display: flex;
		gap: 10px;
	}
	.title_icon {
		align-self: center;
		justify-self: flex-end;

		height: 16px;
		width: 16px;
	}
	.next_number {
		font-weight: 600;
	}

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
	input {
		grid-column: 1 / span 2;
	}

	.create_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
	.valid {
		border: var(--solid-border);
		color: var(--contrast);
	}
</style>
