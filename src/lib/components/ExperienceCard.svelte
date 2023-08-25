<script>
	/** @type {{title: string, company: string, duration: string, tasks: string[], stack: string[]}} */
	export let experience;
</script>

<section class=" px-4">
	<h3 class="font-bold text-xl text-light_slate mb-1">
		{experience?.title}
		<span class="text-teal">@{experience?.company}</span>
	</h3>
	<h2 class="flex text-light_slate text-sm mb-5 gap-3 items-center">
		<i class="text-lg animate-spin text-teal animate-duration-5000 i-ri:hourglass-line" />
		{experience?.duration}
	</h2>

	<ul class="flex flex-col text-light_slate gap-4 font-rajdhani">
		{#each experience?.tasks as task (task)}
			<li class="flex gap-5 items-center text-lg">
				<i class="mt-1 text-teal i-ri:checkbox-multiple-fill" />
				<span>{task}</span>
			</li>
		{:else}
			<li class="flex gap-5 items-center">
				<i class="mt-1 text-teal i-mdi:checkbox-blank-outline" />
				<span>Working on tasks...</span>
			</li>
		{/each}
	</ul>

	<!-- Stack used -->
	<p class="text-sm mt-5 text-light_slate">{experience.stack.join(", ")}</p>
</section>
