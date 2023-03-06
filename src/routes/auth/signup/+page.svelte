<script lang="ts">
	import LogoTypeface from '$lib/assets/icons/LogoTypeface.svelte';
</script>

<main>
	<div class="logo-container"><LogoTypeface /></div>

	<form id="signup" method="POST">
		<input name="name" type="text" placeholder="Username" required />
		<input name="email" type="text" placeholder="Email" required />
		<input name="password" type="password" placeholder="Password" required />
		<input name="confirmation" type="password" placeholder="Confirm Password" required />
		<button type="submit" form="signup">Sign Up</button>
	</form>

	<a class="register" href="/auth/login">Already a member?</a>
</main>

<style>
	main {
		display: grid;
		place-content: center;
		height: 100vh;
		background: var(--primary);
	}
	form {
		max-width: 375px;
	}
	.logo-container {
		margin: 36px auto;
		width: 140px;
	}

	input[type='text'],
	input[type='password'] {
		width: 100%;
		padding: 12px;
		margin-bottom: 20px;

		border-radius: var(--border-radius);
		border: var(--solid-border);
	}

	button {
		width: 100%;
		padding: 12px;
		background-color: var(--accent);
		border-radius: var(--border-radius);
		border: var(--accent) solid 1px;

		color: var(--lighter);
		font-size: var(--rg);

		cursor: pointer;
	}

	.register {
		display: block;
		font-size: var(--f-sm);
		margin-top: 40px;
		text-align: center;
		color: var(--contrast);
		text-decoration: underline;
	}
</style>
