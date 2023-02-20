<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { RecipeDraftKeys, type RecipeDraft } from '$lib/types/Recipe';

	export let nextOrder: number;

	let isActive = false;
	const recipeDraft: Writable<RecipeDraft> = getContext<Writable<RecipeDraft>>('recipeDraft');

	function resetInputs() {
		$recipeDraft[RecipeDraftKeys.DIRECTION] = '';
		isActive = false;
	}

	function insertDirection() {
		// ! Need to use spread syntax to trigger a state update
		$recipeDraft[RecipeDraftKeys.DIRECTIONLIST] = [
			...$recipeDraft[RecipeDraftKeys.DIRECTIONLIST],
			$recipeDraft[RecipeDraftKeys.DIRECTION]
		];

		resetInputs();
	}
</script>

<button class="root" on:click={() => (isActive = !isActive)}>
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
		class="name"
		type="text"
		placeholder="Describe Step"
		bind:value={$recipeDraft[RecipeDraftKeys.DIRECTION]}
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
	.root {
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
	}
	input:focus {
		border: var(--solid-border);
		outline: none;
	}
	input.name {
		border: var(--dashed-border);
		grid-column: 1 / span 2;
	}

	.create_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
</style>
