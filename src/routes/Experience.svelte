<script>
	import { onMount } from "svelte";
	import experiences from "$lib/stores/experiences.js";
	import ArticleTitle from "$lib/components/shared/ArticleTitle.svelte";
	import ExperienceCard from "$lib/components/ExperienceCard.svelte";

	let selected;
	onMount(() => (selected = experiences[0]));
</script>

<div class="bg-navy -mt-10 py-20 experience md:p-0">
	<article class="container flex flex-col min-h-95svh justify-center">
		<ArticleTitle title="Experience">Where I have worked &amp currently working.</ArticleTitle>

		{#if selected}
			<section class="mt-5 md:(flex gap-5)">
				<div class="flex mb-5 overflow-x-scroll md:(block mb-0 overflow-hidden min-w-150px)">
					{#each experiences as experience (experience.company)}
						<button
							on:click="{() => (selected = experience)}"
							class="{selected?.company === experience.company
								? 'bg-light_navy text-teal-400'
								: 'text-slate hover:(bg-light_navy rounded)'} transition-colors duration-300 text-left w-full py-2 px-4 border-none lg:px-8 block whitespace-nowrap"
						>
							{experience.company}
						</button>
					{/each}
				</div>
				<ExperienceCard experience="{selected}" />
			</section>
		{/if}
	</article>
</div>

<style>
	.experience {
		clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
	}
</style>
