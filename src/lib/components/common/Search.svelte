<script lang="ts">
	import SearchOutlined from '$lib/assets/icons/SearchOutlined.svelte';
</script>

<button>
	<div class="text">Search</div>

	<div class="icon"><SearchOutlined /></div>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		padding: 6px 9px;

		font-size: 12px;
		color: var(--contrast);

		border-radius: var(--border-radius);
		border: var(--solid-border);

		cursor: pointer;
	}

	.text {
		margin-right: 9px;
		font-size: 12px;
		color: var(--contrast);
	}

	.icon {
		height: 11px;
		width: 11px;
	}
</style>
