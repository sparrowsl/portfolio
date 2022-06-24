<script>
	import { experiences } from "../stores/experience.js";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-[1px] border-b-gray-300 p-5 md:px-10"
	id="experience"
>
	<h2 class="font-pt-sans my-5 mb-10 text-5xl font-bold text-slate-500">Experience</h2>

	{#each $experiences as experience}
		<section class="mb-10 flex flex-col gap-3 border-b-2 pb-5 md:flex-row md:border-0 md:pb-0">
			<div class="w-fit">
				<!-- position -->
				<h2 class="font-pt-sans text-2xl text-gray-800">{experience.title}</h2>
				<!-- company -->
				<h3 class="font-pt-sans mb-5 text-xl capitalize text-gray-600">{experience.company}</h3>
				<!-- description -->
				<p class="font-raleway text-slate-700">
					{experience.description}
				</p>
			</div>
			<!-- duration -->
			<p class="font-pt-sans min-w-fit text-lg text-gray-400">{experience.duration}</p>
		</section>
	{/each}
</article>
