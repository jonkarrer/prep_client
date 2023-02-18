<script lang="ts">
	export let callback: (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => any;
	export let text: string;
	export let icon: any;
	export let borderStyles: string = 'solid';
	export let width: string = 'auto';
</script>

<button
	style:width
	style:border={borderStyles === 'solid' ? 'var(--solid-border)' : 'var(--dashed-border)'}
	on:click={(e) => callback(e)}
>
	<div class="text">{text}</div>

	<div class="icon"><svelte:component this={icon} /></div>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;

		min-width: 70px;
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
		min-width: 11px;
		min-height: 11px;
	}
</style>
