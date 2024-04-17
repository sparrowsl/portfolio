<script>
	import experiences from "$lib/stores/experiences.js";
	import Header from "$lib/components/Header.svelte";
	import ExperienceCard from "$lib/components/ExperienceCard.svelte";

	let selected = experiences[0];
</script>

<section class="experience bg-navy -mt-10 py-20 md:p-0">
	<article class="container flex flex-col min-h-95svh justify-center">
		<Header title="Experience" subtitle="Where I have worked &amp; currently working." />

		<section class="mt-5 md:(flex gap-5)">
			<div class="flex mb-5 overflow-x-scroll md:(block mb-0 overflow-hidden min-w-fit)">
				{#each experiences as experience (experience)}
					<button
						on:click={() => (selected = experience)}
						class="{selected?.company === experience.company
							? 'bg-light_navy text-teal font-semibold'
							: 'text-slate hover:(bg-light_navy rounded)'} transition-colors text-left w-full p-2 lg:px-4 block whitespace-nowrap">
						{experience.company}
					</button>
				{/each}
			</div>
			<ExperienceCard experience={selected} />
		</section>
	</article>
</section>

<style>
	.experience {
		clip-path: polygon(0 20%, 100% 0, 100% 80%, 0 100%);
	}
</style>
