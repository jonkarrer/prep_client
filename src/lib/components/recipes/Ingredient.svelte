<script lang="ts">
	import { replaceSpecialChars } from '$lib/utils/replaceSpecialChars';

	export let name: string;
	export let quantity: string;
	export let unit: string;
	export let preventOverflow = true;
</script>

<div class="text" class:preventOverflow>
	<strong>{quantity}</strong> <strong>{unit}</strong>, {replaceSpecialChars(name)}
</div>

<style>
	.text {
		text-align: left;
	}
	strong {
		font-weight: 600;
		color: var(--accent);
	}
	.preventOverflow {
		max-width: 150px;
		white-space: nowrap;
		overflow: hidden !important;
		text-overflow: ellipsis;
	}
</style>
