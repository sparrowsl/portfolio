<script>
	import skills from "$lib/stores/skills.js";
	import ArticleTitle from "../lib/components/shared/ArticleTitle.svelte";
	import SkillCard from "../lib/components/SkillCard.svelte";
</script>

<!-- TODO: use clip-path and small min-height -->
<article class="flex flex-col min-h-95svh justify-center">
	<ArticleTitle title="Skills">Languages, Frameworks, Tools &amp; Platforms</ArticleTitle>

	<section class="flex flex-wrap mt-5 max-w-3xl gap-x-5 gap-y-10">
		{#each skills as skill}
			<SkillCard skill="{skill}" />
		{/each}
	</section>

	<!-- Workflow -->
	<!-- <section class="mt-10">
		<h3 class="font-pt-sans font-normal text-xl mb-3 transition-colors text-gray-100">Workflow</h3>

		<ul class="grid gap-2">
			<li class="flex font-raleway gap-3 items-center">
				<Icon icon="material-symbols:check-small-rounded" class="text-2xl text-teal-500" />
				<span class="text-gray-100">Mobile-First, Responsive Web Design </span>
			</li>
			<li class="flex font-raleway gap-3 items-center">
				<Icon icon="material-symbols:check-small-rounded" class="text-2xl text-teal-500" />
				<span class="text-gray-100">Cross Browser Testing &amp; Debugging</span>
			</li>
			<li class="flex font-raleway gap-3 items-center">
				<Icon icon="material-symbols:check-small-rounded" class="text-2xl text-teal-500" />
				<span class="text-gray-100">Agile Development Process</span>
			</li>
		</ul>
	</section> -->
</article>
