<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';

	let isActive = false;
	let tagValueBinding = '';
	let tagInputElement: HTMLInputElement;
	let valid = false;
	export let tempTags: Array<string>;

	function handleValidationFail(): void {
		tagInputElement.focus();
		return;
	}

	function areInputsValid(): boolean {
		if (tagValueBinding.length < 2) {
			return false;
		}
		return true;
	}

	$: if (areInputsValid()) {
		valid = true;
		console.log(tagValueBinding);
	} else {
		valid = false;
	}

	function insertTag() {
		if (!valid) {
			handleValidationFail();
		}
		tempTags = [...tempTags, tagValueBinding];

		tagValueBinding = '';
		isActive = false;
	}
</script>

<button class:valid on:click={() => (isActive = !isActive)}>
	<div class="title">
		<div>Add New Tag</div>
	</div>

	<div class="title_icon">
		<PlusSquareTwoTone {isActive} />
	</div>

	<input
		type="text"
		placeholder="Tag Label"
		class:valid
		bind:value={tagValueBinding}
		bind:this={tagInputElement}
		on:click={(e) => {
			e.stopPropagation();
		}}
		on:keyup={(e) => e.preventDefault()}
		style:display={isActive ? 'block' : 'none'}
	/>
</button>

<div style:display={isActive ? 'flex' : 'none'} class="create_buttons">
	<Button callback={insertTag} text="Commit" icon={PlusCircleTwoTone} width="90px" />
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

	input {
		width: 100%;
		padding: 12px 15px;

		font-size: var(--rg);
		border-radius: var(--border-radius);
		border: var(--dashed-border);
		grid-column: 1 / span 2;
	}
	input:focus {
		outline: none;
	}

	.create_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		width: 100%;
		margin-top: 15px;
	}
	.valid {
		border: var(--solid-border);
		color: var(--contrast);
	}
</style>
