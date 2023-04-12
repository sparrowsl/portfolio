<script>
	import projects from "$lib/stores/projects.js";
	import ProjectCard from "../lib/components/ProjectCard.svelte";
	import ArticleTitle from "../lib/components/shared/ArticleTitle.svelte";
</script>

<div class="-mt-10 pb-10 text-gray-800 projects">
	<article class="container min-h-screen pt-15">
		<ArticleTitle title="Projects" color="black">Some projects I have built...</ArticleTitle>

		<section class="mt-16 grid gap-y-10">
			{#each projects as project}
				<ProjectCard project="{project}" />
			{/each}
		</section>
	</article>
</div>

<style>
	/* .projects {
		clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
	} */
</style>
