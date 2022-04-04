<script>
	import { fly } from 'svelte/transition';
	import { Route } from "tinro";

	import Nav from "./components/shared/Nav.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Projects from "./pages/Projects.svelte";
	import Contact from "./pages/Contact.svelte";
</script>

<main class="container">
	<Route path="/">
		<div transition:fly="{{ y: 200, duration: 2000 }}">
		<Home />
		</div>
	</Route>

	<Route path="/about">
		<div transition:fly="{{ y: 200, duration: 2000 }}">
			<About />
</div>
		</Route>

	<Route path="/projects">
		<div transition:fly="{{ y: 200, duration: 2000 }}">
			<Projects />
</div>
		</Route>

	<Route path="/contact">
		<div transition:fly="{{ y: 200, duration: 2000 }}">
			<Contact />
</div>
		</Route>
</main>
<Nav />


<style>
</style>
