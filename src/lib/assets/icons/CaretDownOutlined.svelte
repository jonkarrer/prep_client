<script>
	export let toggle = false;
	$: stroke = toggle ? 'var(--lighter)' : 'var(--contrast)';
	$: bg = toggle ? 'var(--accent)' : 'var(--primary)';
</script>

<svg width="100%" height="100%" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		d="M73.8633 26.3672H16.1368C14.4053 26.3672 13.4385 28.1953 14.5108 29.4434L43.3741 62.9121C44.2002 63.8701 45.7911 63.8701 46.626 62.9121L75.4893 29.4434C76.5616 28.1953 75.5948 26.3672 73.8633 26.3672Z"
		fill="#161616"
	/>
</svg>
