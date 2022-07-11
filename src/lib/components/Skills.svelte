<script>
	import { skills } from "../stores/skills.js";
	import Icon from "@iconify/svelte";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-b-[1px] border-b-gray-300
	px-5 dark:bg-gray-800 md:px-10"
	id="skills"
>
	<h2 class="font-pt-sans my-10 text-5xl font-bold text-slate-500 dark:text-slate-300">Skills</h2>

	<section>
		<!-- Languages, Tools and Platforms -->
		<h3 class="font-raleway mb-3 text-xl text-gray-700 dark:text-gray-100">
			Languages, Frameworks &amp; Tools
		</h3>

		<ul class="font-pt-sans flex max-w-[90ch] flex-wrap gap-5 text-sm text-gray-600">
			{#each $skills as skill}
				<li class="flex flex-col items-center justify-center dark:text-gray-100">
					<Icon icon="simple-icons:{skill.icon}" class="text-3xl" />
					<span class="text-sm font-bold dark:font-light">{skill.name}</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Workflow -->
	<section class="mt-10">
		<h3
			class="font-pt-sans mb-3 text-xl font-bold text-gray-700 dark:font-normal dark:text-gray-100"
		>
			Workflow
		</h3>
		<ul class="grid gap-2">
			<li class="font-raleway flex items-center gap-3">
				<Icon icon="simple-line-icons:check" class="text-lg text-teal-500" />
				<span class="text-gray-600 dark:text-gray-100">Mobile-First, Responsive Web Design </span>
			</li>
			<li class="font-raleway flex items-center gap-3">
				<Icon icon="simple-line-icons:check" class="text-lg text-teal-500" />
				<span class="text-gray-600 dark:text-gray-100">Cross Browser Testing &amp; Debugging</span>
			</li>
			<li class="font-raleway flex items-center gap-3">
				<Icon icon="simple-line-icons:check" class="text-lg text-teal-500" />
				<span class="text-gray-600 dark:text-gray-100">Agile Development Process</span>
			</li>
		</ul>
	</section>
</article>
