<script>
	export let project;
</script>

<div class="project rounded bg-white py-4 px-3 shadow-md">
	<figure>
		<!-- <div class="stack"> -->
		<!-- Project Screenshot -->
		<!-- <img src="/images/pexels-pixabay-270408.jpg" alt="" width height /> -->
		<!-- </div> -->
		<!-- Project details -->
		<figcaption class="">
			<!-- title -->
			<h3 class="title mb-2 text-center text-xl text-teal-600">{project.title}</h3>
			<!-- description -->
			<p class="desc mb-5 text-lg text-gray-500">{@html project.desc}</p>

			<div class="project-links flex items-center justify-evenly">
				<a
					href={project.links.code}
					target="_blank"
					class="flex justify-center gap-1 text-teal-500"
				>
					<i class="ri-code-s-slash-line" /> <span>Code</span>
				</a>
				<a
					href={project.links.live}
					target="_blank"
					class="flex justify-center gap-1 text-teal-500"
				>
					<i class="ri-global-line" /> <span>Demo</span>
				</a>
			</div>
		</figcaption>
	</figure>
</div>

<style>
	h3 {
		font-family: "Playfair Display", monospace, serif;
	}
	p {
		font-family: "PT Sans", sans-serif;
	}
</style>
