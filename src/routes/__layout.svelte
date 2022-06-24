<script>
	import "../app.css";
	import SideMenu from "../lib/components/SideMenu.svelte";
	import MobileNav from "../lib/components/MobileNav.svelte";
</script>

<section class="lg:grid lg:grid-cols-[20vw,_1fr]">
	<MobileNav />
	<SideMenu />
	<main class="h-screen overflow-y-auto scroll-smooth md:overflow-y-visible lg:overflow-y-auto">
		<slot />
	</main>
</section>

<style></style>
