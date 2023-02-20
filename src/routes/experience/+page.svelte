<script>
	import { experiences } from "../../lib/stores/experiences";
	import JobDetails from "./JobDetails.svelte";

	let active = experiences[0];
</script>

<article class="min-h-[90vh] py-5">
	<h1 class="mb-14 text-3xl font-semibold">Where I Have Worked</h1>

	<section class="grid gap-2 md:grid-cols-[max-content,1fr]">
		<aside class="h-fit overflow-x-scroll md:max-w-fit md:overflow-auto">
			<div class="flex gap-1 md:flex-col">
				{#each experiences as experience}
					<button
						on:click={() => (active = experience)}
						class="{active.company === experience.company
							? 'bg-white font-semibold text-gray-800'
							: 'hover:bg-dark_slate text-white hover:text-teal-400'} w-full
								rounded py-2 px-3 text-left text-sm transition-colors lg:text-base"
					>
						{experience.company}
					</button>
				{/each}
			</div>
		</aside>

		<JobDetails {active} />
	</section>
</article>
