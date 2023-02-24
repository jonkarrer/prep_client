<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';

	let isActive = false;
	let directionValueBinding = '';
	let directionInputElement: HTMLDivElement;
	let valid = false;
	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');
	export let nextOrder: number;

	function resetInputs() {
		directionValueBinding = '';
	}

	function areInputsValid(): boolean {
		if (directionValueBinding.length < 2) {
			return false;
		}
		return true;
	}

	function insertDirection() {
		if (!valid) {
			directionInputElement.focus();
			return;
		}
		$recipe[RecipeKeys.DIRECTIONS] = [...$recipe[RecipeKeys.DIRECTIONS], directionValueBinding];

		directionValueBinding = '';
		isActive = false;
	}

	$: if (areInputsValid()) {
		valid = true;
		console.log(directionValueBinding);
	} else {
		valid = false;
	}
</script>

<button class="root" class:valid on:click={() => (isActive = !isActive)}>
	<div class="title">
		<div class="next_number">
			{nextOrder.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
		</div>
		<div>Add Direction</div>
	</div>

	<div class="title_icon">
		<PlusSquareTwoTone toggle={isActive} />
	</div>

	<div
		placeholder="Describe Step"
		class:valid
		class="content"
		bind:textContent={directionValueBinding}
		bind:this={directionInputElement}
		on:click={(e) => {
			e.stopPropagation();
		}}
		on:keyup={(e) => e.preventDefault()}
		style:display={isActive ? 'block' : 'none'}
		contenteditable
	/>
</button>

<div style:display={isActive ? 'flex' : 'none'} class="action_buttons">
	<Button
		bind:toggle={valid}
		callback={insertDirection}
		text="Commit"
		icon={PlusCircleTwoTone}
		width="90px"
	/>
	<Button callback={resetInputs} text="Erase" icon={CloseCircleTwoTone} width="90px" />
</div>

<style>
	.root {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: row;
	}
	.content {
		grid-column: 1 / span 2;
		border-radius: var(--border-radius);
		border: var(--dashed-border);
		text-align: left;
		padding: 12px 15px;
		font-size: var(--rg);
		outline: none;
	}

	.title {
		display: flex;
		gap: 10px;
	}
	.title_icon {
		align-self: center;
		justify-self: flex-end;
	}
	.next_number {
		font-weight: 600;
	}

	.valid {
		border: var(--solid-border);
		color: var(--contrast);
	}
	.valid .next_number {
		color: var(--accent);
	}
</style>
