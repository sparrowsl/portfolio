<script>
	import Icon from "@iconify/svelte";
</script>

<header
	class="flex min-h-screen flex-col justify-center border-b-[1px] border-b-gray-300
	px-5 dark:bg-gray-800 md:px-10"
	id="about"
>
	<h1 class="font-pt-sans mb-5 text-6xl uppercase text-gray-600 dark:text-gray-100 md:mb-2">
		Benjamin <span class="text-teal-600 dark:text-teal-400">Thorpe</span>
	</h1>
	<h3
		class="font-raleway mb-2 text-center font-light text-slate-600 dark:text-gray-100 md:text-left"
	>
		A Web Developer by profession addicted to
		<a href="https://svelte.dev" class="text-teal-600 dark:text-teal-400">Svelte.js</a>
		&amp;
		<a href="https://flask.palletsprojects.com/en/2.1.x/" class="text-teal-600 dark:text-teal-400"
			>Flask</a
		>.
	</h3>

	<!-- Address -->
	<p class="font-pt-sans text-center uppercase text-slate-500 dark:text-gray-100 md:text-left">
		Freetown, Sierra Leone ·
		<a
			href="mailto:benthorpe.dev@gmail.com"
			class="text-lg lowercase text-blue-800 dark:text-blue-400"
		>
			benthorpe.dev@gmail.com
		</a>
	</p>

	<!-- Summary -->
	<p class="font-raleway my-7 max-w-[75ch] text-lg text-slate-600 dark:text-gray-100">
		I build simple, user-friendly, responsive, fast and functional websites that work. My aim is to
		build and contribute in building something useful for myself, the community and the world as a
		whole.
	</p>

	<!-- Social media icons -->
	<div class="flex justify-start gap-7">
		<a href="https://wa.me/23299783218" class="">
			<Icon
				icon="simple-icons:whatsapp"
				class="text-4xl text-teal-600 hover:text-teal-500 dark:text-teal-500"
			/>
		</a>

		<a href="mailto:benthorpe.dev@gmail.com" class="">
			<Icon
				icon="simple-icons:gmail"
				class="text-4xl text-teal-600 hover:text-teal-500 dark:text-teal-500"
			/>
		</a>

		<a href="https://www.linkedin.com/in/benjithorpe/" class="">
			<Icon
				icon="simple-icons:linkedin"
				class="text-4xl text-teal-600 hover:text-teal-500 dark:text-teal-500"
			/>
		</a>

		<a href="https://twitter.com/benjithorpe1" class="">
			<Icon
				icon="simple-icons:twitter"
				class="text-4xl text-teal-600 hover:text-teal-500 dark:text-teal-500"
			/>
		</a>

		<a href="https://github.com/benjithorpe" class="">
			<Icon
				icon="simple-icons:github"
				class="text-4xl text-teal-600 hover:text-teal-500 dark:text-teal-500"
			/>
		</a>
	</div>
</header>
