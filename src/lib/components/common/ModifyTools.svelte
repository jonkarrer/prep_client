<script lang="ts">
	import DeleteTwoTone from '$lib/assets/icons/DeleteTwoTone.svelte';
	import EditTwoTone from '$lib/assets/icons/EditTwoTone.svelte';
	import Checkbox from './Checkbox.svelte';

	export let deleteCallback: () => any;
	export let editCallback: () => any;
	let toggle = false;
</script>

<div class="wrapper">
	<div class="tools" class:toggle>
		<button
			on:click={(e) => {
				e.stopPropagation();
				deleteCallback();
			}}><DeleteTwoTone /></button
		>

		<button
			on:click={(e) => {
				e.stopPropagation();
				editCallback();
			}}><EditTwoTone /></button
		>
	</div>
	<Checkbox bind:toggle />
</div>

<style>
	.wrapper {
		display: flex;
		gap: 18px;
	}
	.tools {
		display: none;
		gap: 18px;
		height: 16px;
	}
	button {
		height: 16px;
	}
	.toggle {
		display: flex;
	}
</style>
