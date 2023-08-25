<script>
	import skills from "$lib/stores/skills.js";
	import Header from "$lib/components/Header.svelte";
	import SkillCard from "$lib/components/SkillCard.svelte";
</script>

<div class="py-10 text-gray-800 skills md:py-5">
	<article class="container flex flex-col pt-3 justify-center">
		<Header title="Skills" color="black">Languages, Frameworks, Tools &amp; Platforms</Header>

		<section class="flex flex-wrap mt-5 max-w-3xl gap-x-5 gap-y-10">
			{#each skills as skill}
				<SkillCard {skill} />
			{/each}
		</section>
	</article>
</div>
