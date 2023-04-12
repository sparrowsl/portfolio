<script>
	import experiences from "$lib/stores/experiences.js";
	import ArticleTitle from "../lib/components/shared/ArticleTitle.svelte";
</script>

<div class="bg-navy -mt-10 pt-20 experience">
	<article class="container flex flex-col min-h-screen py-20 justify-center">
		<ArticleTitle title="Experience">Where I have worked &amp currently working.</ArticleTitle>

		{#each experiences as experience}
			<section class="flex flex-col mb-5 gap-3 md:flex-row">
				<div class="w-fit">
					<!-- title -->
					<h2 class="text-2xl text-gray-200">{experience.title}</h2>
					<!-- company -->
					<h3 class="text-xl mb-5 text-gray-300 capitalize">
						{experience.company} .
						<span class="min-w-fit text-base text-gray-400 italic">
							({experience.duration})
						</span>
					</h3>
				</div>
			</section>
		{/each}
	</article>
</div>

<style>
	.experience {
		clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
	}
</style>
