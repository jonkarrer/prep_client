<script>
	(async () => {
		const req = await fetch('http://127.0.0.1:8080/api');
		console.log(await req.text());
	})();
</script>

<main>Hello</main>
