<script>
	import { Route, router } from "tinro";

	import Nav from "./components/Nav.svelte";
	import Home from "./pages/Home.svelte";
	import Projects from "./pages/Projects.svelte";
	import Contact from "./pages/Contact.svelte";

	// Allows Tinro to scroll to the top for each page
	router.subscribe((_) => window.scrollTo(0, 0));
</script>

<main class="">
	<Route path="/">
		<Home />
	</Route>

	<Route path="/projects">
		<Projects />
	</Route>

	<Route path="/contact">
		<Contact />
	</Route>

	<Route fallback redirect="/">
		<Home />
	</Route>
</main>
<Nav />

<style>
	main {
		margin-bottom: 10vh;
	}
</style>
