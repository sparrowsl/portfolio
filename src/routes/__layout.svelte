<script>
	import "../tailwind.css";
	import "remixicon/fonts/remixicon.css";
	import SideMenu from "../lib/components/SideMenu.svelte";
</script>

<section class="grid lg:grid-cols-[20vw,_1fr]">
	<SideMenu />
	<main class="h-screen overflow-y-auto scroll-smooth">
		<slot />
	</main>
</section>

<style></style>
