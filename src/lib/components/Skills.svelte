<script>
	import Icon from "@iconify/svelte";
	import { skills } from "../stores/store.js";
</script>

<article
	class="flex min-h-screen flex-col justify-center border-b border-b-gray-400 bg-gray-800 px-5 md:px-10"
	id="skills"
>
	<h2 class="my-10 font-pt-sans text-5xl font-bold text-slate-300">Skills</h2>

	<section>
		<!-- Languages, Tools and Platforms -->
		<h3 class="font-raleway mb-3 text-xl text-gray-100">Languages, Frameworks &amp; Tools</h3>

		<ul class="flex max-w-[90ch] flex-wrap gap-5 font-pt-sans text-sm text-gray-600">
			{#each $skills as skill}
				<li class="flex flex-col items-center justify-center gap-1 text-gray-100">
					<Icon
						icon="simple-icons:{skill.toLowerCase() === 'sveltekit'
							? 'svelte'
							: skill.toLowerCase()}"
						class="text-3xl"
					/>
					<span class="text-sm font-light capitalize">{skill}</span>
				</li>
			{/each}
		</ul>
	</section>

	<!-- Workflow -->
	<section class="mt-10">
		<h3 class="mb-3 font-pt-sans text-xl font-normal text-gray-100 transition-colors">Workflow</h3>

		<ul class="grid gap-2">
			<li class="font-raleway flex items-center gap-3">
				<Icon icon="material-symbols:check-small-rounded" class="text-2xl text-teal-500" />
				<span class="text-gray-100">Mobile-First, Responsive Web Design </span>
			</li>
			<li class="font-raleway flex items-center gap-3">
				<Icon icon="material-symbols:check-small-rounded" class="text-2xl text-teal-500" />
				<span class="text-gray-100">Cross Browser Testing &amp; Debugging</span>
			</li>
			<li class="font-raleway flex items-center gap-3">
				<Icon icon="material-symbols:check-small-rounded" class="text-2xl text-teal-500" />
				<span class="text-gray-100">Agile Development Process</span>
			</li>
		</ul>
	</section>
</article>
