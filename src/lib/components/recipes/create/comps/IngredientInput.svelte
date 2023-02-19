<script>
	import Button from '$lib/components/common/Button.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';

	let isActive = false;
</script>

<button class="root" on:click={() => (isActive = !isActive)}>
	<div class="title">
		<div>Add Ingredient</div>

		<div class="title_icon">
			<PlusSquareTwoTone {isActive} />
		</div>
	</div>

	<div style:display={isActive ? 'grid' : 'none'} class="input_wrapper">
		<input type="text" class="quantity" placeholder="Quantity" />
		<input type="text" class="unit" placeholder="Unit" />
		<input type="text" class="name" placeholder="Name" />
	</div>
</button>

<div style:display={isActive ? 'flex' : 'none'} class="action_buttons">
	<Button callback={(e) => console.log(e)} text="Commit" icon={PlusCircleTwoTone} width="90px" />
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
