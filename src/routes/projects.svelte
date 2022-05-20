<script>
	import { projects } from "$lib/stores/store.js";
	import ProjectCard from "$lib/components/ProjectCard.svelte";

	console.log($projects);
</script>

<div class="w-full bg-slate-100 p-3 md:px-10 lg:p-0">
	<section class="container">
		<h1 class="my-7 text-center text-3xl text-[silver]">Projects</h1>
		<p class="font-light italic text-gray-500">
			These are some of the projects I have worked on...
		</p>

		<!-- Projects -->
		<div class="projects mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each $projects as project}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
</div>

<style>
	h1 {
		font-family: "Playfair Display", monospace, serif;
	}
	p {
		font-family: "PT Sans", sans-serif;
	}
</style>
