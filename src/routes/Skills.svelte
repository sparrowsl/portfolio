<script>
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import { tech } from "$lib/utils.js"
</script>

<div class="py-10 text-gray-800 skills md:py-5 min-h-60dvh">
	<article class="container justify-center">
		<div>
			<h2 class="font-bold tracking-wide text-4xl uppercase font-rajdhani">
				Skills
			</h2>
			<p class="mb-3 text-sm text-black tracking-wider">
				Languages, Frameworks, Tools &amp; Platforms
			</p>
		</div>

		<section class="flex flex-wrap mt-10 max-w-3xl gap-8 font-firasans">
			{#each tech as skill (skill.name)}
				<figure class="text-center transition-transform hover:-translate-y-1.5">
					<i class="i-{skill.icon} text-{skill.color} mx-auto text-5xl" />

					<figcaption
						class="mt-2 text-1.15rem text-sm tracking-wider capitalize"
					>
						{skill.name}
					</figcaption>
				</figure>
			{/each}
		</section>
	</article>
</div>
