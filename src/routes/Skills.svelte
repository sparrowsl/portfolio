<script>
	import skills from "$lib/stores/skills.js";
	import ArticleTitle from "../lib/components/shared/ArticleTitle.svelte";
	import SkillCard from "../lib/components/SkillCard.svelte";
</script>

<div class="text-black skills">
	<article class="container flex flex-col pt-3 justify-center">
		<ArticleTitle title="Skills" color="black">
			Languages, Frameworks, Tools &amp; Platforms
		</ArticleTitle>

		<section class="flex flex-wrap mt-5 max-w-3xl gap-x-5 gap-y-10">
			{#each skills as skill}
				<SkillCard skill="{skill}" />
			{/each}
		</section>
	</article>
</div>
