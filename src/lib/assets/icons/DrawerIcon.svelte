<script>
	export let toggle = false;
	$: stroke = toggle ? 'var(--lighter)' : 'var(--contrast)';
	$: bg = toggle ? 'var(--accent)' : 'var(--primary)';
</script>

<svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_32_65)">
		<rect width="30" height="2" rx="1" fill={stroke} />
		<rect y="11" width="26" height="2" rx="1" fill={stroke} />
		<rect y="22" width="20" height="2" rx="1" fill={stroke} />
	</g>
	<defs>
		<clipPath id="clip0_32_65">
			<rect width="30" height="24" fill="white" />
		</clipPath>
	</defs>
</svg>
