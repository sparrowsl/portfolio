<script>
	import { projects } from "../stores/projects.js";
</script>

<article
	id="projects"
	class="flex min-h-screen flex-col justify-center px-5 py-10 md:py-0 md:px-10"
>
	<h2 class="my-5 mb-10 font-pt-sans text-5xl font-bold text-slate-300">Projects</h2>
	<!-- <h1 class="mb-14 indent-5 text-3xl font-semibold">Some projects I have worked on</h1> -->

	<div class="grid gap-10 md:grid-cols-3">
		{#each $projects as project}
			<section class="grid">
				<h3 class="mb-2 font-pt-sans text-xl font-normal text-gray-200">
					{project.title}
				</h3>
				<p class="font-raleway text-gray-200">{@html project.desc}</p>

				<div class="mt-5 flex h-fit justify-start gap-10 font-pt-sans font-normal">
					<a
						href="{project.links.code}"
						class="rounded border border-teal-400 px-3 py-1 text-teal-600"
					>
						source code
					</a>
					<a
						href="{project.links.demo}"
						class="flex items-center rounded border border-blue-700 px-2 text-blue-500"
					>
						demo
					</a>
				</div>
			</section>
		{/each}
	</div>
</article>
