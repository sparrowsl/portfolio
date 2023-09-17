<script>
	import { animate, inView, stagger } from "motion";
	import { onMount } from "svelte";
	import skills from "$lib/stores/skills.js";
	import Header from "$lib/components/Header.svelte";
	import SkillCard from "$lib/components/SkillCard.svelte";

	let section;
	onMount(() => {
		inView(
			section,
			() => {
				animate(
					"figure",
					{ x: [-100, -500, 0] },
					{
						delay: stagger(0.1),
						duration: 0.5,
						easing: [0.22, 0.03, 0.26, 1],
					}
				);
			},
			{ margin: "300px 0px 300px 0px" },
			{ root: section }
		);
	});
</script>

<div class="py-10 text-gray-800 skills md:py-5">
	<article class="container justify-center">
		<Header title="Skills" color="black" subtitle="Languages, Frameworks, Tools &amp; Platforms" />

		<section bind:this={section} class="flex flex-wrap mt-10 max-w-3xl gap-8 font-rajdhani">
			{#each skills as skill (skill.name)}
				<SkillCard {skill} />
			{/each}
		</section>
	</article>
</div>
