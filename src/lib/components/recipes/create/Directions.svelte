<script>
	import Button from '$lib/components/common/Button.svelte';
	import Paper from '$lib/components/common/Paper.svelte';
	import Headline from '$lib/components/common/Headline.svelte';
	import PlusSquareTwoTone from '$lib/assets/icons/PlusSquareTwoTone.svelte';
	import Checkbox from '$lib/components/common/Checkbox.svelte';
	import PlusCircleTwoTone from '$lib/assets/icons/PlusCircleTwoTone.svelte';
	import CloseCircleTwoTone from '$lib/assets/icons/CloseCircleTwoTone.svelte';
</script>

<Paper>
	<Headline title="Directions" />

	<div class="direction">
		<div class="number">01</div>
		<div class="step">Do a bunch of stuff to make this text really long and cause it to wrap</div>
		<div class="checkbox">
			<Checkbox />
		</div>
	</div>

	<div class="add">
		<div class="next_number">02</div>
		<div class="text">Add Direction</div>
		<div class="add_icon"><PlusSquareTwoTone /></div>
	</div>

	<div class="create_wrapper">
		<div class="create">
			<div class="title_wrapper">
				<div class="next_number">02</div>
				<div class="heading">Add Direction</div>
			</div>

			<div class="add_icon--filled">
				<!-- <PlusSquareTwoTone bg={'var(--accent)'} stroke={'var(--contrast)'} /> -->
			</div>

			<input type="text" class="name" placeholder="Describe Step" />
		</div>

		<div class="create_buttons">
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
	.next_number {
		font-weight: 600;
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

	.add {
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
	.add .text {
		flex: 1;
	}
	.add_icon {
		height: 16px;
		width: 16px;
	}
	.add_icon--filled {
		align-self: center;
		justify-self: flex-end;
		height: 16px;
		width: 16px;
		margin-bottom: 10px;
	}

	.create {
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
	.create .title_wrapper {
		display: flex;
		gap: 10px;
	}
	.create_buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		margin-top: 15px;
	}
</style>
