<script>
	import Skills from "$lib/components/Skills.svelte";
</script>

<div class="w-full bg-slate-50 p-3 lg:p-0">
	<section class="container mt-16 flex flex-col justify-center">
		<h1 class="mb-2 text-base italic lg:text-lg">
			Hello, I am <span class="block text-4xl font-semibold not-italic lg:text-5xl"
				>Benjamin Thorpe</span
			>
		</h1>
		<h2 class="subtitle my-2 font-bold italic text-gray-700">
			A Web Developer and <a href="https://svelte.dev" class="text-teal-500">Svelte.js</a> addict.
		</h2>

		<p class="summary max-w-[60ch] text-lg font-light text-gray-500">
			I build simple, user-friendly, responsive, fast and functional websites that work. My aim is
			to build or contribute in building something useful for myself, the community and the world as
			a whole
		</p>

		<div class="socials my-4 flex gap-5">
			<a href="/" class="text-3xl text-teal-500"><i class="ri-mail-line" /></a>
			<a href="/" class="text-3xl text-teal-500"><i class="ri-github-fill" /></a>
			<a href="/" class="text-3xl text-teal-500"><i class="ri-twitter-fill" /></a>
			<a href="/" class="text-3xl text-teal-500"><i class="ri-linkedin-box-fill" /></a>
		</div>

		<div class="cta mt-3 flex gap-3">
			<a
				href="/"
				class="rounded-full bg-teal-600 py-2 px-4 font-medium text-white shadow-sm hover:shadow-teal-400"
				>Contact Me</a
			>
		</div>
	</section>

	<!-- Skills -->
	<Skills />
</div>

<style>
	p {
		font-family: "PT Sans", sans-serif;
	}
	h1,
	h2 {
		font-family: "Playfair Display", monospace, serif;
	}
</style>
