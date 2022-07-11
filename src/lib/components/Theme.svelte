<script>
	import Icon from "@iconify/svelte";

	let isDark = true;
	const toggleTheme = () => {
		isDark = !isDark;
	};
</script>

<div
	class="fixed bottom-5 right-7 grid place-items-center rounded-full bg-gray-800 p-3 dark:bg-gray-100"
	on:click={toggleTheme}
>
	{#if isDark}
		<Icon icon="emojione:sun" class="text-2xl" />
	{:else}
		<Icon icon="emojione:crescent-moon" class="text-2xl" />
	{/if}
</div>
