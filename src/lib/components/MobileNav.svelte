<script>
	import Icon from "@iconify/svelte";

	let show = false;
	const toggleNav = () => (show = !show);
</script>

<nav class="scroll-sn sticky top-0 bg-slate-50 md:px-10 lg:hidden">
	<section class="relative flex items-center justify-between p-4 md:px-0">
		<!-- Brand -->
		<div class="brand font-pt-sans text-xl font-semibold text-teal-600 lg:text-2xl">
			Benjamin Thorpe
		</div>

		<!-- Menu Items -->
		<div
			class="{show
				? 'top-full p-3'
				: '-top-96'} absolute right-0 left-0 mx-4 flex flex-col gap-3 bg-slate-100 text-center shadow
				transition-all md:static md:flex-row md:bg-transparent md:shadow-none"
		>
			<a
				href="#about"
				class="font-raleway text-gray-700 md:hover:text-gray-900"
				on:click={() => (show = false)}
			>
				About
			</a>
			<a
				href="#skills"
				class="font-raleway text-gray-700 md:hover:text-gray-900"
				on:click={() => (show = false)}
			>
				Skills
			</a>
			<a
				href="#projects"
				class="font-raleway text-gray-700 md:hover:text-gray-900"
				on:click={() => (show = false)}
			>
				Projects
			</a>
			<a
				href="#experience"
				class="font-raleway text-gray-700 md:hover:text-gray-900"
				on:click={() => (show = false)}
			>
				Experience
			</a>
			<a
				href="#interest"
				class="font-raleway text-gray-700 md:hover:text-gray-900"
				on:click={() => (show = false)}
			>
				Interest
			</a>
			<a
				href="#certificates"
				class="font-raleway text-gray-700 md:hover:text-gray-900"
				on:click={() => (show = false)}
			>
				Certificates
			</a>
		</div>

		<!-- Hambuger -->
		<div class="font-light md:hidden" on:click={toggleNav}>
			{#if show}
				<Icon icon="simple-line-icons:close" class="text-xl font-bold text-teal-700" />
			{:else}
				<Icon icon="simple-line-icons:menu" class="text-xl font-bold text-teal-700" />
			{/if}
		</div>
	</section>
</nav>
