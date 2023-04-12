<script>
	import experiences, { selected } from "$lib/stores/experiences.js";
	import ArticleTitle from "$lib/components/shared/ArticleTitle.svelte";
	import ExperienceCard from "../lib/components/ExperienceCard.svelte";
	import { onMount } from "svelte";

	onMount(() => ($selected = experiences[0]));
</script>

<div class="bg-navy -mt-10 experience">
	<article class="container flex flex-col min-h-95svh justify-center">
		<ArticleTitle title="Experience">Where I have worked &amp currently working.</ArticleTitle>

		<section class="flex mt-5 gap-5">
			<div class="min-w-content tab-header">
				{#each experiences as experience (experience.company)}
					<button
						on:click="{() => ($selected = experience)}"
						class="{$selected.company === experience.company
							? 'border-(b r lightest_navy) bg-light_navy  text-teal-400'
							: 'text-slate hover:(bg-light_navy rounded)'} border-none transition-colors duration-300 text-left w-full py-2 px-8 block"
					>
						{experience.company}
					</button>
				{/each}
			</div>
			<ExperienceCard />
		</section>
	</article>
</div>

<style>
	.experience {
		clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
	}
</style>
