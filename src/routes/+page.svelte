<script>
	import "@unocss/reset/tailwind.css";
	import "uno.css";
	import HeroSection from "./Hero.svelte";
	import Footer from "./Footer.svelte";
	import Skills from "./Skills.svelte";
	import Projects from "./Projects.svelte";
</script>

<main class="bg-[#fafafb] font-opensans min-h-screen">
	<HeroSection />
	<Skills />
	<!-- <Experience /> -->
	<Projects />
	<Footer />
</main>
