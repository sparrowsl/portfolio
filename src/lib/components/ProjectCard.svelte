<script>
	export let project;
</script>

<div class="flex flex-col">
	<h3 class="font-raleway mb-2 text-lg font-bold text-teal-800">{project.title}</h3>
	<p class="font-raleway text-slate-600">{@html project.desc}</p>

	<div class="mt-5 flex justify-start gap-10">
		<a href={project.links.code} class="font-playfair rounded font-bold text-teal-700">
			source code
		</a>
		<a
			href={project.links.demo}
			class="font-playfair flex items-center rounded font-bold text-blue-700"
		>
			<span> demo </span>
			<i class="bx bx-chevron-right bx-tada text-lg" />
		</a>
	</div>
</div>
