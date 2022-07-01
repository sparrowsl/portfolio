<script>
	import { projects } from "../stores/projects.js";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-[1px] border-b-gray-300 px-5 py-10 md:py-0 md:px-10"
	id="projects"
>
	<h2 class="font-pt-sans my-5 mb-10 text-5xl font-bold text-slate-500">Projects</h2>

	<section class="grid gap-10 md:grid-cols-3">
		{#each $projects as project}
			<div class="grid">
				<h3 class="font-raleway mb-2 text-xl font-bold text-gray-800">{project.title}</h3>
				<p class="font-raleway text-slate-600">{@html project.desc}</p>

				<div class="mt-5 flex h-fit justify-start gap-10">
					<a
						href={project.links.code}
						class="font-pt-sans animate-pulse rounded border-[1px] border-teal-400
						px-2 py-1 font-bold text-teal-600"
					>
						source code
					</a>
					<a
						href={project.links.demo}
						class="font-pt-sans flex items-center rounded border-[1px] border-blue-400
						px-2 font-bold text-blue-700"
					>
						live demo <i class="bx bx-chevron-right animate-pulse text-lg" />
					</a>
				</div>
			</div>
		{/each}
	</section>
</article>
