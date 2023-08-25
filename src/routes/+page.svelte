<script>
	import "@unocss/reset/tailwind.css";
	import "uno.css";
	import Experience from "./Experience.svelte";
	import HeroSection from "./Hero.svelte";
	import Projects from "./Projects.svelte";
	import Skills from "./Skills.svelte";
	import Contact from "./Contact.svelte";
</script>

<main class="bg-light_slate text-white opensans">
	<HeroSection />
	<Skills />
	<Experience />
	<Projects />
	<Contact />
</main>
