<script>
	import Icon from "@iconify/svelte";

	let show = false;
	const toggleNav = () => (show = !show);
</script>

<nav class="sticky top-0 z-10 bg-gray-900 transition-colors md:px-10 lg:hidden">
	<section class="relative flex items-center justify-between p-4 md:px-0">
		<!-- Brand -->
		<span class="font-pt-sans text-xl font-normal text-teal-400 lg:text-2xl">
			Benjamin Thorpe
		</span>

		<!-- Menu Items -->
		<div
			class="{show
				? 'top-full p-3'
				: '-top-96'} absolute right-0 left-0 mx-4 grid place-content-center gap-3 bg-gray-700
				shadow transition-all md:static md:flex md:flex-row md:bg-transparent md:shadow-none"
		>
			<a
				href="#about"
				class="font-raleway font-semibold text-gray-100 md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				About
			</a>
			<a
				href="#skills"
				class="font-raleway font-semibold text-gray-100 md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				Skills
			</a>
			<a
				href="#experience"
				class="font-raleway font-semibold text-gray-100 md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				Experience
			</a>
			<a
				href="#projects"
				class="font-raleway font-semibold text-gray-100 md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				Projects
			</a>
		</div>

		<!-- Hambuger -->
		<button type="button" class="md:hidden" on:click={toggleNav}>
			<Icon icon={show ? "carbon:close" : "ic:round-menu-open"} class="text-3xl text-teal-300" />
		</button>
	</section>
</nav>
