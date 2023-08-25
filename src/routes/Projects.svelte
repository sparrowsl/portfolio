<script>
	import projects from "$lib/stores/projects.js";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Header from "$lib/components/Header.svelte";
</script>

<div class="-mt-10 pb-10 text-gray-800 projects">
	<article class="container min-h-screen pt-15">
		<span class="text-center">
			<Header title="Projects" color="black">Some projects I have built...</Header>
		</span>

		<section class="mt-16 grid gap-y-15 lg:gap-y-10">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</section>
	</article>
</div>
