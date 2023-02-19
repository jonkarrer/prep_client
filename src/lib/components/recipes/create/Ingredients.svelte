<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';

	let isCreateIngredientOpen = false;
</script>

<Paper>
	<Headline title="Ingredients" />

	<div class="ingredient">
		<div>4, cups, sifted white sugar</div>
		<Checkbox />
	</div>

	<div class="create_wrapper">
		<button class="create" on:click={() => (isCreateIngredientOpen = !isCreateIngredientOpen)}>
			<div class="add">
				<div class="heading">Add Ingredient</div>

				<div class="add_icon">
					<PlusSquareTwoTone isActive={isCreateIngredientOpen} />
				</div>
			</div>

			<div style:display={isCreateIngredientOpen ? 'grid' : 'none'} class="input_wrapper">
				<input type="text" class="quantity" placeholder="Quantity" />
				<input type="text" class="unit" placeholder="Unit" />
				<input type="text" class="name" placeholder="Name" />
			</div>
		</button>
		<div style:display={isCreateIngredientOpen ? 'flex' : 'none'} class="create_buttons">
			<Button
				callback={(e) => console.log(e)}
				text="Commit"
				icon={PlusCircleTwoTone}
				width="90px"
			/>
			<Button
				callback={(e) => console.log(e)}
				text="Erase"
				icon={CloseCircleTwoTone}
				width="90px"
			/>
		</div>
	</div>
</Paper>

<style>
	.ingredient {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 15px;
		padding: 12px 15px;

		font-size: var(--rg);
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: 3px;
	}

	.add {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.add_icon {
		height: 16px;
		width: 16px;
	}

	.create {
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

	.create_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
</style>
