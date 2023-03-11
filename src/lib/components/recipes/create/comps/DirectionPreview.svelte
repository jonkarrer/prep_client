<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeKeys, type Recipe } from '$lib/types/Recipe';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import DeleteTwoTone from '$lib/assets/icons/DeleteTwoTone.svelte';

	export let direction: string;
	export let order: number;

	const recipe: Writable<Recipe> = getContext<Writable<Recipe>>('recipe');

	let isActive = false;
	let valid = false;
	let directionValueBinding = direction;

	function insertModifiedDirection() {
		if (!valid) {
			alert('Changes not valid');
			return;
		}
		$recipe[RecipeKeys.DIRECTIONS] = $recipe[RecipeKeys.DIRECTIONS].map((item, index) => {
			if (index === order) return directionValueBinding;
			return item;
		});

		isActive = false;
	}

	function cancelChanges() {
		directionValueBinding = direction;
		isActive = false;
	}

	function deleteDirection() {
		$recipe[RecipeKeys.DIRECTIONS] = $recipe[RecipeKeys.DIRECTIONS].filter((item, index) => {
			if (index === order) return;
			return item;
		});
	}

	$: if (directionValueBinding.length < 2) {
		valid = false;
	} else {
		valid = true;
	}
</script>

<article class="preview">
	<div class="direction">
		<div class="order">
			{(order + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}
		</div>
		{#if !isActive}
			<p class="text preventOverflow">{direction}</p>
		{/if}
		{#if isActive}
			<div contenteditable class="text editable" bind:textContent={directionValueBinding} />
		{/if}
	</div>

	<Checkbox bind:toggle={isActive} />
</article>

<div style:display={isActive ? 'flex' : 'none'} class="action_buttons">
	<Button
		bind:toggle={valid}
		callback={insertModifiedDirection}
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
		grid-template-columns: 1fr 20px;
		align-items: center;
		gap: 10px;
	}

	.direction {
		display: flex;
		align-items: baseline;
		gap: 10px;
	}
	.text {
		font-size: var(--rg);
		color: var(--contrast);
		line-height: 1.5;
	}
	.editable {
		width: 100%;
		border: var(--dashed-border);
		border-radius: var(--border-radius);
		padding: 4px 8px;
	}
	.editable:focus {
		border: var(--solid-border);

		outline: none;
	}

	.preventOverflow {
		max-width: 150px;
		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
	}

	.order {
		font-size: var(--rg);
		color: var(--accent);
		font-weight: bold;
	}
	article > *:last-child {
		justify-self: flex-end;
	}
</style>
