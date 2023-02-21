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

	function areInputsValid(): boolean {
		if (tagValueBinding.length < 2) {
			return false;
		}
		return true;
	}

	function insertTag() {
		if (!valid) {
			tagInputElement.focus();
			return;
		}
		tempTags = [...tempTags, tagValueBinding];

		tagValueBinding = '';
		isActive = false;
	}

	$: if (areInputsValid()) {
		valid = true;
		console.log(tagValueBinding);
	} else {
		valid = false;
	}
</script>

<button class="root" class:valid on:click={() => (isActive = !isActive)}>
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

<div style:display={isActive ? 'flex' : 'none'} class="action_buttons">
	<Button callback={insertTag} text="Commit" icon={PlusCircleTwoTone} width="90px" />
	<Button callback={(e) => console.log(e)} text="Erase" icon={CloseCircleTwoTone} width="90px" />
</div>

<style>
	.root {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: row;
	}

	.title {
		display: flex;
		gap: 10px;
	}
	.title_icon {
		align-self: center;
		justify-self: flex-end;
	}

	input {
		grid-column: 1 / span 2;
	}

	.valid {
		border: var(--solid-border);
		color: var(--contrast);
	}
</style>
