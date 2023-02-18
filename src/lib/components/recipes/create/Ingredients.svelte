<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
</script>

<Paper>
	<Headline title="Ingredients" />

	<div class="ingredient">
		<div>4, cups, sifted white sugar</div>
		<Checkbox />
	</div>
	<div class="ingredient_add">
		<div>Add Ingredient</div>
		<div class="add_icon"><PlusSquareTwoTone /></div>
	</div>

	<div class="ingredient_create_wrapper">
		<div class="ingredient_create">
			<div class="heading">Add Ingredient</div>

			<div class="add_icon-filled">
				<PlusSquareTwoTone bg={'var(--accent)'} stroke={'var(--contrast)'} />
			</div>

			<input type="text" class="quantity" placeholder="Quantity" />
			<input type="text" class="unit" placeholder="Unit" />
			<input type="text" class="name" placeholder="Name" />
		</div>
		<div class="ingredient_create_buttons">
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
	.ingredient_add {
		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: 15px;
		padding: 12px 15px;

		font-size: var(--rg);
		color: var(--darker);

		border: var(--dashed-border);
		border-radius: 3px;
	}
	.ingredient_create {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-flow: row;
		gap: 10px;

		margin-top: 15px;
		padding: 12px 15px;
		border: var(--dashed-border);
		font-size: var(--rg);
		color: var(--darker);
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

	.ingredient_create .heading {
		margin-bottom: 10px;
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
	.add_icon {
		height: 16px;
		width: 16px;
	}
	.add_icon-filled {
		align-self: center;
		justify-self: flex-end;
		height: 16px;
		width: 16px;
		margin-bottom: 10px;
	}
	.ingredient_create_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
</style>
