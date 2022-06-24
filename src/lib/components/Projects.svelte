<script>
	import { projects } from "../stores/projects.js";
	import ProjectCard from "../components/ProjectCard.svelte";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-[1px] border-b-gray-300 px-5 py-10 md:py-0 md:px-10"
	id="projects"
>
	<h2 class="font-pt-sans my-5 mb-10 text-5xl font-bold text-slate-500">Projects</h2>

	<section class="grid gap-10 md:grid-cols-3 md:gap-10">
		{#each $projects as project}
			<ProjectCard {project} />
		{/each}
	</section>
</article>

<style>
</style>
