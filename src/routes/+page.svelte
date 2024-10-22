<script>
	import "@unocss/reset/tailwind.css";
	import "uno.css";
	import Footer from "./Footer.svelte";
	import Projects from "./Projects.svelte";
	import { tech } from "./utils.js";
</script>

<main class="bg-[#fafafb] font-opensans min-h-screen">
	<!-- Hero Section -->
	<section class="sm:(pt-2 pb-35) md:p-0">
		<article class="container flex flex-col min-h-75dvh justify-center">
			<p
				class="block text-gray-600 border rounded-full w-fit bg-white px-4 py-1"
			>
				Hello there, I am
			</p>
			<h1 class="font-bold mb-3 text-5xl uppercase md:text-7xl font-rajdhani">
				Benjamin

				<i
					class="i-simple-icons:pluscodes inline-block ml-5 animate-spin animate-duration-2000 text-teal/50"
				></i>
			</h1>
			<h2 class="font-semibold text-3xl font-firasans text-gray-500">
				I build stuff for fun.
			</h2>

			<p class="my-5 max-w-2xl leading-6.5">
				I am a Software Engineer focusing on building simple, clean, fast, and
				functional apps that works smoothly providing slick digital experiences.
				Currently building accessible, smooth and user-friendly softwares at
				<span class="text-light_navy font-bold">Orange SL</span>
			</p>

			<!--
			<p class="italic font-opensans text-lg">
				Hardcore fan of
				<a href="https://svelte.dev" class="text-light_navy font-bold">
					Svelte
				</a>
				and <a href="https://go.dev" class="text-light_navy font-bold">Go</a>
			</p>
			-->
		</article>
	</section>

	<!-- Skills Section -->
	<div class="py-10 text-gray-800 skills md:py-5 min-h-60dvh">
		<article class="container justify-center">
			<div>
				<h2 class="font-bold tracking-wide text-4xl uppercase font-rajdhani">
					Skills
				</h2>
				<p class="mb-3 text-sm text-black tracking-wider">
					Languages, Frameworks, Tools
				</p>
			</div>

			<section class="flex flex-wrap mt-10 max-w-3xl gap-8 font-firasans">
				{#each tech as skill (skill.name)}
					<figure
						class="text-center transition-transform hover:-translate-y-1.5"
					>
						<i class="i-{skill.icon} text-{skill.color} mx-auto text-5xl"></i>

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

	<!-- <Experience /> -->
	<Projects />
	<Footer />
</main>
