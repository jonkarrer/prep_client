<script lang="ts">
	import Mobile from '$lib/components/headers/Mobile.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import Search from '$lib/components/common/Search.svelte';
	import PlusOutlined from '$lib/assets/icons/PlusOutlined.svelte';
	import CaretDownOutlined from '$lib/assets/icons/CaretDownOutlined.svelte';
</script>

<Mobile>
	<Button callback={(e) => console.log(e)} text="Create" icon={PlusOutlined} />
	<Button callback={(e) => console.log(e)} text="View" icon={CaretDownOutlined} />
	<Search />
</Mobile>
