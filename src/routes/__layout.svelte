<script>
	import "../tailwind.css";
	import "remixicon/fonts/remixicon.css";
	import SideMenu from "../lib/components/SideMenu.svelte";
</script>

<section class="grid lg:grid-cols-[250px,_1fr]">
	<SideMenu />
	<main class="h-screen overflow-y-auto scroll-smooth bg-gray-100">
		<slot />
	</main>
</section>

<style></style>
