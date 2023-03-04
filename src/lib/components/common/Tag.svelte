<script lang="ts">
	export let tagName: string;
</script>

<div class="tag">{tagName}</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 5px 9px;

		font-size: var(--xs);
		font-weight: 600;
		color: var(--contrast);

		border: var(--solid-border);
		border-radius: var(--border-radius);
	}
</style>
