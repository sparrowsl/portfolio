<script>
	import { Route } from "tinro";

	import Nav from "./components/Nav.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Projects from "./pages/Projects.svelte";
	import Contact from "./pages/Contact.svelte";
</script>

<main class="">
	<Route path="/">
		<Home />
	</Route>

	<Route path="/about">
		<About />
	</Route>

	<Route path="/projects">
		<Projects />
	</Route>

	<Route path="/contact">
		<Contact />
	</Route>
</main>
<Nav />

<style>
</style>
