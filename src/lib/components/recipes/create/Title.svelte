<script>
	let title = '';
</script>

<input
	class="title"
	style:border={title.length === 0 ? 'var(--dashed-border)' : 'var(--solid-border)'}
	bind:value={title}
	type="text"
	placeholder="Recipe Name"
	required
/>

<style>
	input {
		width: 100%;
		padding: 12px 15px;

		font-size: var(--rg);
		border-radius: var(--border-radius);
	}

	input:focus {
		border: var(--solid-border);
		outline: none;
	}

	input.title {
		font-size: var(--xl);
	}
</style>
