<script>
	import { browser } from "$app/env";
	import "../app.css";
	import SideMenu from "../lib/components/SideMenu.svelte";
	import MobileNav from "../lib/components/MobileNav.svelte";
	import Theme from "../lib/components/Theme.svelte";
	import { isDarkMode } from "../lib/stores/store.js";

	$: if ($isDarkMode && browser) {
		document.querySelector("html").classList.add("dark");
	} else if (!$isDarkMode && browser) {
		document.querySelector("html").classList.remove("dark");
	}
</script>

<section class="lg:grid lg:grid-cols-[20vw,_1fr]">
	<MobileNav />
	<SideMenu />
	<main class="relative overflow-hidden lg:h-screen lg:overflow-y-auto lg:scroll-smooth">
		<slot />
		<Theme />
	</main>
</section>
