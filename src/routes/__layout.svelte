<script>
	import "../app.css";
	import SideMenu from "../lib/components/SideMenu.svelte";
	import MobileNav from "../lib/components/MobileNav.svelte";
	// import Theme from "../lib/components/Theme.svelte";
</script>

<section class="lg:grid lg:grid-cols-[20vw,_1fr]">
	<MobileNav />
	<SideMenu />
	<main class="relative overflow-hidden lg:h-screen lg:overflow-y-auto">
		<slot />
		<!-- <Theme /> -->
	</main>
</section>
