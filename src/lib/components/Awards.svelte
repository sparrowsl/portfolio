<script>
	import { certificates } from "../stores/certs.js";
</script>

<section
	class="flex min-h-screen flex-col justify-center border-[1px] border-b-gray-300 px-5 md:px-10"
	id="certificates"
>
	<h2 class="font-pt-sans my-5 text-5xl font-bold text-slate-500">Awards &amp; Certifications</h2>

	<ul class="grid gap-2">
		{#each $certificates as cert}
			<li class="font-raleway flex items-center gap-2">
				<i class="bx bxs-trophy bx-tada text-xl text-[gold]" />
				<span class="text-gray-700">{cert.title} - {cert.institute}</span>
			</li>
		{/each}
	</ul>
</section>
