<script>
	import { certificates } from "../stores/certs.js";
	import Icon from "@iconify/svelte";
</script>

<section
	class="flex min-h-screen flex-col justify-center border-t-[1px] border-b-gray-300 px-5
	transition-colors dark:bg-gray-800 md:px-10"
	id="certificates"
>
	<h2 class="font-pt-sans my-5 text-5xl font-bold text-slate-500 dark:text-slate-300">
		Awards &amp; Certifications
	</h2>

	<ul class="grid gap-2">
		{#each $certificates as cert}
			<li class="font-raleway flex items-center gap-2">
				<Icon icon="emojione:trophy" />
				<span class="text-gray-700 dark:text-gray-200">{cert.title} - {cert.institute}</span>
			</li>
		{/each}
	</ul>
</section>
