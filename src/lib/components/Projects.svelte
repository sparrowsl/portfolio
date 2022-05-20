<script>
	import { fly } from "svelte/transition";

	import { projects } from "../store.js";
	import ProjectCard from "../components/ProjectCard.svelte";
</script>

<section in:fly={{ y: 200, duration: 500 }} class="container">
	<h1>My Projects</h1>

	<section class="projects">
		{#each $projects as project}
			<ProjectCard {project} />
		{/each}
	</section>
</section>

<style>
	.container {
		padding-inline: 7vw;
	}
	h1 {
		font-size: 3rem;
		text-align: center;
		color: silver;
		margin-block: 0.7em;
		font-family: "Playfair Display", monospace, serif;
	}
	.projects {
		display: grid;
		gap: 2.5em;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}

	@media screen and (min-width: 768px) {
		.container {
			padding-inline: 2vw;
		}
	}
</style>
