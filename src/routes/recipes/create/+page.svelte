<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import SaveTwoTone from '$lib/assets/icons/SaveTwoTone.svelte';
	import ReloadOutlined from '$lib/assets/icons/ReloadOutlined.svelte';
	import BlocksOutlined from '$lib/assets/icons/BlocksOutlined.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';

	let title = '';
</script>

<Mobile>
	<Button callback={(e) => console.log(e)} text="Save" icon={SaveTwoTone} />
	<Button callback={(e) => console.log(e)} text="Reset" icon={ReloadOutlined} />
	<Button callback={(e) => console.log(e)} text="Draft" icon={BlocksOutlined} />
</Mobile>

<form id="recipe_creation_form" action="POST">
	<label for="recipe_title">
		<input
			class="title"
			style:border={title.length === 0 ? 'var(--dashed-border)' : 'var(--solid-border)'}
			bind:value={title}
			type="text"
			placeholder="Recipe Name"
			required
		/>
	</label>

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
				<input type="text" class="unit" placeholder="Unit of Measure" />
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

	<Paper>
		<Headline title="Directions" />

		<div class="directions_wrapper">
			<div class="direction">
				<div class="number">01</div>
				<div class="step">
					Do a bunch of stuff to make this text really long and cause it to wrap
				</div>
				<div class="checkbox">
					<Checkbox />
				</div>
			</div>
			<div class="direction_add">
				<div class="next_number">02</div>
				<div class="text">Add Direction</div>
				<div class="add_icon"><PlusSquareTwoTone /></div>
			</div>

			<div class="direction_create">
				<div class="title_wrapper">
					<div class="next_number">02</div>
					<div class="heading">Add Direction</div>
				</div>

				<div class="add_icon-filled">
					<PlusSquareTwoTone bg={'var(--accent)'} stroke={'var(--contrast)'} />
				</div>

				<input type="text" class="name" placeholder="Describe Step" />
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

	<Paper>
		<Headline title="Tags" />
		<div class="tag_wrapper">
			<Button
				callback={(e) => console.log(e)}
				text="Add Tag"
				icon={PlusOutlined}
				borderStyles="dashed"
			/>
			<div class="tag">Name</div>
			<div class="tag">Name Long</div>
			<div class="tag">Name</div>
			<div class="tag">Name Really</div>
			<div class="tag">Name</div>
			<div class="tag">Name</div>
			<div class="tag">Name Really Long</div>
			<div class="tag">Name Long</div>
			<div class="tag">Name</div>
			<div class="tag">Name</div>
		</div>
	</Paper>
</form>

<style>
	form {
		display: grid;
		gap: 24px;
		margin: 20px var(--gutter-mobile);
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

	input.title {
		font-size: var(--xl);
	}

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

	.ingredient_create .heading {
		margin-bottom: 10px;
	}

	input.quantity {
		border: var(--dashed-border);
	}
	input.unit {
		border: var(--dashed-border);
	}
	input.name {
		border: var(--dashed-border);
		grid-column: 1 / span 2;
	}

	.direction {
		display: grid;
		grid-template-columns: auto auto 50px;
		align-items: baseline;
		gap: 10px;

		margin-top: 15px;
		padding: 12px 15px;

		border: var(--solid-border);
		border-radius: 3px;
	}
	.direction .step {
		font-size: var(--rg);
		color: var(--contrast);
	}
	.direction .number {
		font-size: var(--rg);
		color: var(--accent);
		font-weight: bold;
	}
	.direction > *:last-child {
		justify-self: flex-end;
	}
	.direction_add {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 15px;
		padding: 12px 15px;

		font-size: var(--rg);
		color: var(--darker);

		border: var(--dashed-border);
		border-radius: 3px;
	}
	.direction_add .text {
		flex: 1;
	}
	.next_number {
		font-weight: 600;
	}

	.direction_create {
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
	.direction_create .title_wrapper {
		display: flex;
		gap: 10px;
	}

	.tag_wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		margin-top: 15px;
	}
	.tag {
		display: flex;
		align-items: center;
		justify-content: center;

		min-width: 70px;
		padding: 6px 9px;

		font-size: var(--sm);
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: var(--border-radius);
	}

	.ingredient_create_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
</style>
