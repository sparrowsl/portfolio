<script>
import "@unocss/reset/tailwind.css"
import "uno.css"
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import Footer from "./Footer.svelte"
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import HeroSection from "./Hero.svelte"
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import Projects from "./Projects.svelte"
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import Skills from "./Skills.svelte"
</script>

<main class="bg-[#fafafb] font-opensans min-h-screen">
	<HeroSection />
	<Skills />
	<!-- <Experience /> -->
	<Projects />
	<Footer />
</main>
