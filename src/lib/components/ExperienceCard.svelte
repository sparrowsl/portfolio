<script>
	export let experience;
</script>

<section class=" px-4">
	<h3 class="font-bold text-xl text-light_slate mb-1 tracking-wider">
		{experience?.title}
		<span class="text-teal-400">@ {experience?.company}</span>
	</h3>
	<h2 class="flex text-light_slate text-sm mb-7 gap-3 items-center">
		<span class="text-lg animate-spin text-teal-400 animate-duration-2500 i-ri:hourglass-line" />
		{experience?.duration}
	</h2>

	<ul class="flex flex-col text-light_slate gap-4">
		{#each experience?.tasks as task}
			<li class="flex gap-5">
				<span class="mt-1 text-teal-400 i-ri:checkbox-multiple-fill" />
				{task}
			</li>
		{/each}
	</ul>
</section>
