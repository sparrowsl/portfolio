<script>
	export let active;
</script>

<!-- Service Content -->
<article id="summary" class="px-5">
	<h3 class="text-lg font-semibold">
		{active.title} <span class="text-teal-400">@{active.company}</span>
	</h3>
	<p class="mt-1 text-sm font-light">{active.duration}</p>

	<!-- Job Tasks -->
	<ul class="mt-5 grid gap-2">
		{#each active.tasks as task}
			<li class="flex max-w-2xl gap-5 text-base font-light">
				<span class="text-teal-400">=></span>
				{task}
			</li>
		{/each}
	</ul>
</article>
