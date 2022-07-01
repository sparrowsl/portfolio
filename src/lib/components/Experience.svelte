<script>
	import { experiences } from "../stores/experience.js";
</script>

<article
	class="font-pt-sans flex min-h-screen flex-col justify-center border-[1px] border-b-gray-300 p-5 md:px-10"
	id="experience"
>
	<h2 class="my-5 mb-10 text-5xl font-bold text-slate-500">Experience</h2>

	{#each $experiences as experience}
		<section class="mb-5 flex flex-col gap-3 md:flex-row">
			<div class="w-fit">
				<!-- title -->
				<h2 class="text-2xl text-gray-800">{experience.title}</h2>
				<!-- company -->
				<h3 class="mb-5 text-xl capitalize text-gray-600">
					{experience.company} .
					<span class="min-w-fit text-base italic text-gray-500">
						({experience.duration})
					</span>
				</h3>
			</div>
		</section>
	{/each}
</article>
