<script>
// biome-ignore lint/correctness/noUnusedImports: <explanation>
import { projects } from "$lib/utils.js"
</script>

<div class="text-gray-800">
	<article class="container min-h-screen py-15">
		<div>
			<h2 class="font-bold tracking-wide text-4xl uppercase">Projects</h2>
			<p class="mb-3 text-sm text-black tracking-wider">
				Some projects &amp; tools I have built and worked on...
			</p>
		</div>

		<section class="mt-10 grid gap-5 grid-cols-3">
			{#each projects as project (project.title)}
				<div class="rounded-md p-5 shadow-lg min-h-56 grid bg-white">
					<h3 class="font-bold text-(center 2xl light_navy) font-opensans">
						{project.title}
					</h3>

					<p class="text-gray-700 text-sm my-3 line-clamp-2 leading-6">
						{project.description}
					</p>

					<!-- Tech Stack -->
					<ul
						class="flex text-xs gap-x-3 gap-y-2 flex-wrap-reverse items-center justify-end self-end"
					>
						{#each project.stack as stack (stack)}
							<li
								class="whitespace-nowrap border-gray text-xs border rounded-full px-3 py-1"
							>
								{stack}
							</li>
						{/each}
					</ul>

					<!-- See project link -->
					<a
						href={project.links?.code}
						class="block ml-auto text-sm mt-5 w-fit text-blue-400"
					>
						See project &rArr;
					</a>
				</div>
				<!-- <ProjectCard {project} /> -->
			{/each}
		</section>
	</article>
</div>
