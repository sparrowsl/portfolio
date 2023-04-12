<script>
	import Icon from "@iconify/svelte";
	import experiences, { selected } from "../stores/experiences.js";

	$selected = experiences[0];
</script>

<section class=" px-4">
	<h3 class="font-bold text-xl text-light_slate mb-1 tracking-wider">
		{$selected.title}
		<span class="text-teal-400">@ {$selected.company}</span>
	</h3>
	<h2 class="flex text-light_slate text-sm mb-7 gap-3 items-center">
		<Icon icon="game-icons:duration" class="text-lg text-teal-400" />
		{$selected.duration}
	</h2>

	<ul class="flex flex-col text-light_slate gap-4">
		{#each $selected.tasks as task}
			<li class="flex gap-5">
				<Icon icon="ri:checkbox-multiple-fill" class="mt-1 text-teal-400" />
				{task}
			</li>
		{/each}
	</ul>
</section>
