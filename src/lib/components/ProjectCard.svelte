<script>
	export let project;
</script>

<div class="flex flex-col">
	<h3 class="font-raleway mb-2 text-xl font-bold text-teal-800">{project.title}</h3>
	<p class="font-raleway text-slate-600">{@html project.desc}</p>

	<div class="mt-5 flex justify-start gap-10">
		<a
			href={project.links.code}
			class="font-pt-sans rounded border-[1px] border-teal-400 px-2 py-1 font-bold text-teal-600"
		>
			source code
		</a>
		<a
			href={project.links.demo}
			class="font-pt-sans flex items-center rounded border-[1px] border-blue-400 px-2 font-bold text-blue-700"
		>
			<span> demo </span>
			<i class="bx bx-chevron-right animate-pulse text-lg" />
		</a>
	</div>
</div>
