<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import SaveTwoTone from '$lib/assets/icons/SaveTwoTone.svelte';
	import ReloadOutlined from '$lib/assets/icons/ReloadOutlined.svelte';
	import BlocksOutlined from '$lib/assets/icons/BlocksOutlined.svelte';
	import Title from '$lib/components/recipes/create/Title.svelte';
	import Ingredients from '$lib/components/recipes/create/Ingredients.svelte';
	import Directions from '$lib/components/recipes/create/Directions.svelte';
	import Tags from '$lib/components/recipes/create/Tags.svelte';
</script>

<Mobile>
	<Button callback={(e) => console.log(e)} text="Save" icon={SaveTwoTone} />
	<Button callback={(e) => console.log(e)} text="Reset" icon={ReloadOutlined} />
	<Button callback={(e) => console.log(e)} text="Draft" icon={BlocksOutlined} />
</Mobile>

<form id="recipe_creation_form" action="POST">
	<Title />

	<Ingredients />

	<Directions />

	<Tags />
</form>

<style>
	form {
		display: grid;
		gap: 24px;
		margin: 20px var(--gutter-mobile);
	}
</style>
