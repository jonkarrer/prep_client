<script lang="ts">
	import DeleteTwoTone from '$lib/assets/icons/DeleteTwoTone.svelte';
	import EditTwoTone from '$lib/assets/icons/EditTwoTone.svelte';
	import Checkbox from './Checkbox.svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let deleteCallback: () => any;
	export let editCallback: () => any;
	let toggle = false;
</script>

<div class="wrapper">
	{#if toggle}
		<div transition:fly={{ delay: 150, duration: 250, x: 10, easing: quintOut }} class="tools">
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
	{/if}
	<Checkbox bind:toggle />
</div>

<style>
	.wrapper {
		display: flex;
		align-items: baseline;
		gap: 18px;
	}
	.tools {
		display: flex;
		gap: 18px;
		height: 16px;
	}
</style>
