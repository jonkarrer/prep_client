<script>
	(async () => {
		const req = await fetch(import.meta.env.VITE_API_ENDPOINT + '/api');
		console.log(await req.text());
	})();
</script>

<main>Hello</main>
