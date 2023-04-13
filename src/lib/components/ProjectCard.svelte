<script>
	/** @type {{title: string, description: string, image: string, stack: string[], links: {demo: string, code: string}}} */
	export let project;
</script>

<figure class="grid items-center md:grid-cols-2">
	<img
		src="{project?.image || 'https://placehold.co/500x280'}"
		alt="placeholder view"
		loading="lazy"
		width="500"
		height="280"
		class="rounded shadow-xl"
	/>
	<figcaption class="-mt-9 md:(mr-5 -ml-20 mt-1) lg:(mr-40 -ml-10)">
		<h3 class="font-bold text-(right 2xl gray-700)">{project.title}</h3>
		<p class="bg-lightest_slate rounded-sm shadow-md p-5 text-gray-700 lg:mt-5">
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
				<div class="text-(2xl bi:github gray-600) hover:text-gray-800"></div>
			</a>
			<a href="{project.links.demo}" target="_blank">
				<div class="text-(2xl ci:external-link gray-600) hover:text-gray-800"></div>
			</a>
		</div>
	</figcaption>
</figure>
