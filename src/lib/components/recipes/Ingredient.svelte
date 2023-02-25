<script lang="ts">
	export let name: string;
	export let quantity: string;
	export let unit: string;
</script>

<div class="text"><strong>{quantity}</strong> <strong>{unit}</strong>, {name}</div>

<style>
	.text {
		text-align: left;
		max-width: 55vw;
		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
	}
	strong {
		font-weight: 600;
		color: var(--accent);
	}
</style>
