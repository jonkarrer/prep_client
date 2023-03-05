<script lang="ts">
	import DrawerIcon from '$lib/assets/icons/DrawerIcon.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	let isNavDrawerOpen: Writable<boolean> = getContext<Writable<boolean>>('isNavDrawerOpen');
</script>

<header>
	<button class="drawer_icon" on:click={() => ($isNavDrawerOpen = !$isNavDrawerOpen)}>
		<DrawerIcon />
	</button>

	<slot />
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;

		display: flex;
		align-items: center;
		gap: 16px;

		width: 100%;
		padding: 20px var(--gutter-mobile);

		background-color: var(--primary);
		border-bottom: var(--solid-border);

		z-index: 1000;
	}
	.drawer_icon {
		display: flex;
		align-items: center;
		flex: 1;
		z-index: 1000;
	}
</style>
