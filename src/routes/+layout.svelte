<script>
	import "../app.css";
	import SideMenu from "../lib/components/SideMenu.svelte";
	import MobileNav from "../lib/components/MobileNav.svelte";
	import Navigation from "../lib/components/shared/Navigation.svelte";
</script>

<div class="container mx-auto max-w-6xl px-5">
	<!-- <MobileNav />
	<SideMenu /> -->
	<Navigation />
	<main class="">
		<slot />
	</main>
</div>

<!-- <About />
<Skills />
<Experience />
<Projects /> -->
