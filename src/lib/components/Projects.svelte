<script>
	import Icon from "@iconify/svelte";
	import { projects } from "../stores/projects.js";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-b-[1px] border-b-gray-300
	px-5 py-10 transition-colors dark:bg-gray-800 md:py-0 md:px-10"
	id="projects"
>
	<h2 class="font-pt-sans my-5 mb-10 text-5xl font-bold text-slate-500 dark:text-slate-300">
		Projects
	</h2>

	<div class="grid gap-10 md:grid-cols-3">
		{#each $projects as project}
			<section class="grid">
				<h3 class="font-pt-sans mb-2 text-xl text-gray-700 dark:font-normal dark:text-gray-200">
					{project.title}
				</h3>
				<p class="font-raleway text-slate-600 dark:text-gray-200">{@html project.desc}</p>

				<div class="mt-5 flex h-fit justify-start gap-10">
					<a
						href={project.links.code}
						class="font-pt-sans animate-pulse rounded border-[1px] border-teal-400
						px-2 py-1 font-bold text-teal-600 dark:font-normal"
					>
						source code
					</a>
					<a
						href={project.links.demo}
						class="font-pt-sans flex items-center rounded border-[1px] border-blue-400
						px-2 font-bold text-blue-700 dark:border-blue-700 dark:font-normal dark:text-blue-500"
					>
						demo
						<Icon icon="simple-line-icons:arrow-right" class="ml-1 text-[0.6em]" />
					</a>
				</div>
			</section>
		{/each}
	</div>
</article>
