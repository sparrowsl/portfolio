<script>
	import projects from "$lib/stores/projects.js";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Header from "$lib/components/Header.svelte";
</script>

<div class="pt-36 text-gray-800 projects bg-navy md:pt-20">
	<article class="container min-h-screen py-15">
		<span class="text-center text-white">
			<Header title="Projects" color="white" subtitle="Some projects I have built..." />
		</span>

		<section class="mt-16 grid gap-y-15 lg:gap-y-10">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</section>
	</article>
</div>

<style>
	.projects {
		clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
	}
</style>
