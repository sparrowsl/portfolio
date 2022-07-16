<script>
	import Icon from "@iconify/svelte";
	import { skills } from "../stores/store.js";
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
					<Icon icon="simple-icons:{skill}" class="text-3xl" />
					{#if skill === "svelte"}
						<span class="text-sm font-bold capitalize dark:font-light">{skill}/Sveltekit</span>
					{:else if (skill.includes("html") || skill.includes("css")) && !skill.includes("tailwind")}
						<span class="text-sm font-bold uppercase dark:font-light">{skill}</span>
					{:else}
						<span class="text-sm font-bold capitalize dark:font-light">{skill}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</section>

	<!-- Workflow -->
	<section class="mt-10">
		<h3
			class="font-pt-sans mb-3 text-xl font-bold text-gray-700 transition-colors
			dark:font-normal dark:text-gray-100"
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
