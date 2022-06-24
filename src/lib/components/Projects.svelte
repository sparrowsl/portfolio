<script>
	import { projects } from "../stores/store.js";
	import ProjectCard from "../components/ProjectCard.svelte";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-[1px] border-b-gray-300 px-5 md:px-10"
	id="projects"
>
	<h2 class="font-playfair my-5 mb-10 text-5xl font-bold text-slate-500">Projects</h2>

	<section class="grid grid-cols-3 gap-5 md:gap-10">
		{#each $projects as project}
			<ProjectCard {project} />
		{/each}
	</section>
</article>

<style>
</style>
