<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<div in:fly={{ y: -50, duration: 250, delay: 100 }}>
	<slot />
</div>
