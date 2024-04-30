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
		<div>
			<h2 class="font-bold tracking-wide text-4xl uppercase">Projects</h2>
			<p class="mb-3 text-sm text-black tracking-wider">
				Some projects & tools I have built and worked on...
			</p>
		</div>

		<section class="mt-16 grid gap-y-15 lg:gap-y-10">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</section>
	</article>
</div>
