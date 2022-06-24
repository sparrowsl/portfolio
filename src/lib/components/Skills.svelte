<script>
	const tools = [
		{
			classes: "bx bxl-html5",
			name: "HTML"
		},
		{
			classes: "bx bxl-css3",
			name: "CSS"
		},
		{
			classes: "bx bxl-javascript",
			name: "JavaScript"
		},
		{
			classes: "bx bxl-javascript",
			name: "Svelte/SvelteKit"
		},
		{
			classes: "bx bxl-python",
			name: "Python"
		},
		{
			classes: "bx bxl-flask",
			name: "Flask"
		},
		{
			classes: "bx bxl-tailwind-css",
			name: "TailwindCSS"
		},
		{
			classes: "bx bxl-markdown",
			name: "Markdown"
		},
		{
			classes: "bx bxl-git",
			name: "Git"
		},
		{
			classes: "bx bxl-github",
			name: "GitHub"
		},
		{
			classes: "bx bxl-netlify",
			name: "Netlify"
		},
		{
			classes: "bx bxl-heroku",
			name: "Heroku"
		}
	];
</script>

<article
	class="flex min-h-screen flex-col justify-center border-b-[1px] border-b-gray-300 px-5 md:px-10"
	id="skills"
>
	<h2 class="font-playfair my-10 text-5xl font-bold text-slate-500">Skills</h2>

	<section>
		<!-- Languages, Tools and Platforms -->
		<h3 class="font-raleway mb-3 text-xl text-gray-700">Languages, Frameworks &amp; Tools</h3>
		<ul class="font-pt-sans flex max-w-[90ch] flex-wrap gap-5 text-sm text-gray-600">
			{#each tools as tool}
				<li class="flex flex-col items-center justify-center">
					<i class="{tool.classes} animate-pulse text-5xl" />
					<span class="text-sm text-teal-900">{tool.name}</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Workflow -->
	<section class="mt-10">
		<h3 class="font-raleway mb-3 text-xl font-bold text-gray-700">Workflow</h3>
		<ul class="grid gap-2">
			<li class="font-raleway flex items-center gap-3">
				<i class="bx bx-check text-teal-600" />
				<span class="text-gray-600">Mobile-First, Responsive Web Design </span>
			</li>
			<li class="font-raleway flex items-center gap-3">
				<i class="bx bx-check text-teal-600" />
				<span class="text-gray-600">Cross Browser Testing &amp; Debugging</span>
			</li>
			<li class="font-raleway flex items-center gap-3">
				<i class="bx bx-x text-red-400" />
				<span class="text-gray-600">Lorem ipsum dolor sit amet.</span>
			</li>
			<li class="font-raleway flex items-center gap-3">
				<i class="bx bx-x text-red-400" />
				<span class="text-gray-600">Lorem ipsum dolor sit amet.</span>
			</li>
		</ul>
	</section>
</article>

<style>
</style>
