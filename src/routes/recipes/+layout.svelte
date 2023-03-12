<script lang="ts">
	import ExperimentTwoTone from '$lib/assets/icons/ExperimentTwoTone.svelte';
	import EyeTwoTone from '$lib/assets/icons/EyeTwoTone.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
	import SearchOutlined from '$lib/assets/icons/SearchOutlined.svelte';
	import UserOutlined from '$lib/assets/icons/UserOutlined.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { Writable } from 'svelte/store';
	import { quintOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';

	let isNavDrawerOpen: Writable<boolean> = writable(false);
	setContext<Writable<boolean>>('isNavDrawerOpen', isNavDrawerOpen);

	function fly(node: any, { delay = 0, duration = 400, easing = quintOut, x = -15, y = 0 }) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;

		return {
			delay,
			duration,
			easing,
			css: (t: any) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);`
		};
	}

	afterNavigate(() => ($isNavDrawerOpen = false));
</script>

<main>
	<slot />
	{#if $isNavDrawerOpen}
		<nav class="drawer" in:fly={{ duration: 300 }} out:fly={{ duration: 300, x: -230 }}>
			<li class="nav_item">
				<button class="group">
					<div class="icon"><ExperimentTwoTone /></div>
					<div class="text">Recipes</div>
				</button>
				<menu>
					<li>
						<a href="/recipes">
							<div class="icon"><EyeTwoTone /></div>
							View All
						</a>
					</li>
					<li>
						<a href="/recipes/create">
							<div class="icon"><PlusOutlined /></div>
							Create New
						</a>
					</li>
					<li>
						<a href="/recipes/create">
							<div class="icon"><SearchOutlined /></div>
							Find
						</a>
					</li>
				</menu>
			</li>
			<button class="user_profile group">
				<div class="icon"><UserOutlined /></div>
				<a href="/user" class="text">User Profile</a>
			</button>
		</nav>
	{/if}
</main>

<style>
	main {
		margin: 100px var(--gutter-mobile);
	}
	.drawer {
		position: fixed;
		top: 0;
		left: 0;

		background-color: var(--primary);
		padding-left: var(--gutter-mobile);
		padding-right: 35px;
		padding-top: 50px;
		height: 100vh;

		border-right: var(--solid-border);
	}
	.nav_item {
		margin: 52px 0;
	}
	menu {
		border-left: var(--solid-border);
		margin-top: 10px;
		padding: 10px 0;
		margin-left: 10px;
	}
	menu li {
		margin-left: 10px;
		margin-top: 15px;
		font-size: var(--md);
	}
	menu li:first-child {
		margin-top: 0;
	}
	.group {
		display: flex;
		align-items: center;
		justify-content: flex-start;

		padding: 7px 9px;
		width: 155px;

		font-size: var(--md);
		color: var(--contrast);

		border-radius: var(--border-radius);
		border: var(--solid-border);

		cursor: pointer;
	}
	a {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--contrast);
	}

	.text {
		margin-left: 9px;
		color: var(--contrast);
	}

	.icon {
		height: 14px;
		width: 14px;
		min-width: 11px;
		min-height: 11px;
	}
	.user_profile {
		position: absolute;
		bottom: 20px;
	}
</style>
