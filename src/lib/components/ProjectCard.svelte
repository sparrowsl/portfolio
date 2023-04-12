<script>
	import Icon from "@iconify/svelte";

	/** @type {{title: string, description: string, image: string, stack: string[], links: {demo: string, code: string}}} */
	export let project;
</script>

<figure class="grid grid-cols-2 relative items-center">
	<img
		src="{project?.image || 'https://placehold.co/500x280'}"
		alt="placeholder view"
		loading="lazy"
		width="500"
		height="280"
	/>
	<figcaption class="mr-40 -ml-10">
		<h3 class="font-bold text-(right 2xl gray-700)">{project.title}</h3>
		<p class="bg-lightest_slate rounded-sm shadow-md mt-5 p-5 text-gray-700">
			{project.description}
		</p>

		<!-- Tech Stack -->
		<ul class="flex mt-2 text-sm gap-5 items-center justify-end">
			{#each project.stack as stack}
				<li class="text-gray-800">{stack}</li>
			{/each}
		</ul>

		<!-- External links -->
		<div class="flex mt-5 gap-5 items-center justify-end">
			<a href="{project.links.code}" target="_blank">
				<Icon icon="bi:github" class="text-(2xl gray-600) hover:text-gray-800" />
			</a>
			<a href="{project.links.demo}" target="_blank">
				<Icon icon="ci:external-link" class="text-(2xl gray-600) hover:text-gray-800" />
			</a>
		</div>
	</figcaption>
</figure>

<!-- <div class="grid gap-10 md:grid-cols-3">
	{#each $projects as project}
		<section class="grid">
			<h3 class="font-pt-sans font-normal text-xl mb-2 text-gray-200">
				{project.title}
			</h3>
			<p class="font-raleway text-gray-200">{@html project.desc}</p>

			<div class="flex font-pt-sans font-normal h-fit mt-5 gap-10 justify-start">
				<a
					href="{project.links.code}"
					class="border rounded border-teal-400 py-1 px-3 text-teal-600"
				>
					source code
				</a>
				<a
					href="{project.links.demo}"
					class="border rounded flex border-blue-700 px-2 text-blue-500 items-center"
				>
					demo
				</a>
			</div>
		</section>
	{/each}
</div> -->
