<script>
	import Icon from "@iconify/svelte";
</script>

<header
	id="about"
	class="flex min-h-screen flex-col justify-center border-b border-b-gray-400 px-5 md:px-10"
>
	<h1 class="mb-5 font-pt-sans text-6xl uppercase text-gray-100 md:mb-2">
		Benjamin <span class="text-teal-400">Thorpe</span>
	</h1>
	<h3 class="font-raleway mb-2 text-center text-sm font-light text-gray-100 md:text-left">
		A Web Developer by profession addicted to
		<a href="https://svelte.dev" class="text-teal-400">Svelte.js</a>.
	</h3>

	<!-- Address -->
	<p class="text-center font-pt-sans uppercase text-gray-100 md:text-left">
		Freetown, Sierra Leone ·
		<a href="mailto:benthorpe.dev@gmail.com" class="text-lg lowercase text-blue-400">
			benthorpe.dev@gmail.com
		</a>
	</p>

	<!-- Summary -->
	<p class="font-raleway my-7 max-w-2xl text-gray-100">
		I build simple, user-friendly, responsive, fast, and functional websites that work. My aim is to
		build and contribute to building something useful for myself, the community, and the world as a
		whole.
	</p>

	<!-- Social media icons -->
	<div class="flex justify-start gap-7">
		<a href="mailto:benthorpe.dev@gmail.com" class="">
			<Icon icon="simple-icons:gmail" class="text-2xl text-teal-500 hover:text-teal-500" />
		</a>

		<a href="https://www.linkedin.com/in/benjithorpe/" class="">
			<Icon icon="simple-icons:linkedin" class="text-2xl text-teal-500 hover:text-teal-500" />
		</a>

		<a href="https://twitter.com/benjithorpe1" class="">
			<Icon icon="simple-icons:twitter" class="text-2xl text-teal-500 hover:text-teal-500" />
		</a>

		<a href="https://github.com/benjithorpe" class="">
			<Icon icon="simple-icons:github" class="text-2xl text-teal-500 hover:text-teal-500" />
		</a>
	</div>
</header>
