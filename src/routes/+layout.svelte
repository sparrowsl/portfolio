<script>
	import "../app.css";
	import SideMenu from "../lib/components/SideMenu.svelte";
	import MobileNav from "../lib/components/MobileNav.svelte";
</script>

<section class="lg:grid lg:grid-cols-[20vw,_1fr]">
	<MobileNav />
	<SideMenu />
	<main
		class="relative overflow-hidden bg-gray-800 lg:h-screen lg:overflow-y-auto lg:scroll-smooth"
	>
		<slot />
	</main>
</section>
