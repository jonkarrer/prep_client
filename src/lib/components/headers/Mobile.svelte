<script lang="ts">
	import DrawerIcon from '$lib/assets/icons/DrawerIcon.svelte';
</script>

<header>
	<div class="drawer_icon">
		<DrawerIcon />
	</div>

	<slot />
</header>

<style>
	header {
		display: flex;
		align-items: center;
		gap: 16px;

		margin: 20px var(--gutter-mobile);
	}

	.drawer_icon {
		display: flex;
		align-items: center;
		flex: 1;
	}
</style>
