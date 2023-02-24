<script lang="ts">
	export let callback: (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		}
	) => any;
	export let text: string;
	export let icon: any;
	export let width: string = 'auto';
	export let toggle = false;
</script>

<button class:toggle style:width on:click={(e) => callback(e)}>
	<div class="text">{text}</div>

	<div class="icon"><svelte:component this={icon} bind:toggle /></div>
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;

		padding: 7px 9px;

		font-size: var(--sm);
		color: var(--contrast);
		font-family: 500;

		border-radius: var(--border-radius);
		border: var(--solid-border);

		cursor: pointer;
	}

	.toggle {
		background-color: var(--accent);
	}
	.toggle .text {
		color: var(--lighter);
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
