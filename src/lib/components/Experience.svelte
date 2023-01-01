<script>
	import { experiences } from "../stores/store.js";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-b border-b-gray-400 p-5 font-pt-sans md:px-10"
	id="experience"
>
	<h2 class="my-5 mb-10 text-5xl font-bold text-slate-300">Experience</h2>

	{#each $experiences as experience}
		<section class="mb-5 flex flex-col gap-3 md:flex-row">
			<div class="w-fit">
				<!-- title -->
				<h2 class="text-2xl text-gray-200">{experience.title}</h2>
				<!-- company -->
				<h3 class="mb-5 text-xl capitalize text-gray-300">
					{experience.company} .
					<span class="min-w-fit text-base italic text-gray-400">
						({experience.duration})
					</span>
				</h3>
			</div>
		</section>
	{/each}
</article>
