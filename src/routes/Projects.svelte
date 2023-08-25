<script>
	import { browser } from "$app/environment";
	import projects from "$lib/stores/projects.js";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import ArticleTitle from "$lib/components/shared/ArticleTitle.svelte";

	if (browser) {
		let projectsArray = document.querySelectorAll(".project");
		const appearOnScreen = new IntersectionObserver((entries, appearOnScreen) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					entry.target.classList.remove(...["animate-slide-in-left", "animate-duration-1200"]);
					return;
				}
				entry.target.classList.add(...["animate-slide-in-left", "animate-duration-1200"]);
				// appearOnScreen.unobserve(entry.target);
			});
		});

		projectsArray.forEach((proj) => appearOnScreen.observe(proj));
	}
</script>

<div class="-mt-10 pb-10 text-gray-800 projects">
	<article class="container min-h-screen pt-15">
		<span class="text-center">
			<ArticleTitle title="Projects" color="black">Some projects I have built...</ArticleTitle>
		</span>

		<section class="mt-16 grid gap-y-15 lg:gap-y-10">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</section>
	</article>
</div>
