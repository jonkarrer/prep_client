<script lang="ts">
	import LogoTypeface from '$lib/assets/icons/LogoTypeface.svelte';
	import PageTransition from '$lib/components/common/PageTransition.svelte';
</script>

<PageTransition>
	<main>
		<div class="logo-container"><LogoTypeface /></div>

		<form id="login" method="POST">
			<input name="email" type="text" placeholder="Email" required />
			<input name="password" type="password" placeholder="Password" required />
		</form>

		<div class="button-container">
			<input type="submit" form="login" value="Login" />
		</div>

		<a class="register" href="/auth/signup">Need to register?</a>
		<footer>
			<p>&copy; Prep 2023</p>
			<p>v0.2</p>
		</footer>
	</main>
</PageTransition>

<style>
	main {
		height: 100vh;
		padding: 50% 24px;
		background: var(--060);
		margin: auto;
	}

	.logo-container {
		margin: 36px auto;
		width: 130px;
	}

	/* Style for the form inputs */
	input[type='text'],
	input[type='password'] {
		width: 100%;
		padding: 12px;
		margin-bottom: 20px;

		border-radius: var(--border-radius);
		border: var(--solid-border);
	}

	/* Style for the submit button */
	input[type='submit'] {
		padding: 12px 20px;
		flex: 1;

		background-color: var(--accent);
		border-radius: var(--border-radius);
		border: var(--accent) solid 1px;

		color: var(--lighter);
		font-size: var(--rg);

		cursor: pointer;
	}

	.button-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		gap: 16px;
	}

	.register {
		display: block;
		font-size: var(--f-sm);
		margin-top: 40px;
		text-align: center;
		color: var(--contrast);
		text-decoration: underline;
	}

	/* Style for the link to the forgot password page */
	footer {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;

		padding: 16px 24px;
	}
</style>
