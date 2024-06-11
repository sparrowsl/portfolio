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

		<section class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project (project)}
				<div class="rounded-md p-5 shadow-lg min-h-56 grid bg-white">
					<h3
						class="font-bold flex items-center text-(teal xl light_navy) justify-between"
					>
						{project.title}

						<div
							class="flex items-center gap-4 [&>a]:(text-black hover:text-teal)"
						>
							{#if project.links?.demo}
								<a href={project.links?.demo}>&#128279;</a>
							{/if}
							<a href={project.links?.code}>
								<i class="i-simple-icons:github"></i>
							</a>
						</div>
					</h3>

					<p class="text-gray-700 text-sm my-3 line-clamp-2 leading-6">
						{project.description}
					</p>

					<!-- Tech Stack -->
					<ul class="flex gap-1 justify-end self-end">
						{#each project.stack as stack (stack)}
							<li class="border-gray/30 text-xs border rounded-full px-3 py-1">
								{stack}
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</section>
	</article>
</div>
