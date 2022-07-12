<script>
	import Icon from "@iconify/svelte";
	import { isDarkMode } from "../stores/store.js";
</script>

<div
	class="fixed bottom-5 right-7 grid place-items-center rounded-full bg-gray-800 p-3 transition-colors
	 dark:bg-gray-100 lg:right-20 lg:bottom-14"
	on:click={() => ($isDarkMode = !$isDarkMode)}
>
	{#if $isDarkMode}
		<Icon icon="emojione:sun" class="text-2xl" />
	{:else}
		<Icon icon="emojione:crescent-moon" class="text-2xl" />
	{/if}
</div>
