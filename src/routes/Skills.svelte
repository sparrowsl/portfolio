<script>
	import skills from "$lib/stores/skills.js";
	import Header from "$lib/components/Header.svelte";
	import SkillCard from "$lib/components/SkillCard.svelte";
</script>

<div class="py-10 text-gray-800 skills md:py-5">
	<article class="container justify-center">
		<Header title="Skills" color="black" subtitle="Languages, Frameworks, Tools &amp; Platforms" />

		<section class="flex flex-wrap mt-10 max-w-3xl gap-8 font-rajdhani">
			{#each skills as skill (skill.name)}
				<SkillCard {skill} />
			{/each}
		</section>
	</article>
</div>
