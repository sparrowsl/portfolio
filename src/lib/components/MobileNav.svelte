<script>
	import Icon from "@iconify/svelte";

	let show = false;
	const toggleNav = () => (show = !show);
</script>

<nav
	class="scroll-sn sticky top-0 z-10 bg-slate-50 transition-colors dark:bg-gray-900 md:px-10 lg:hidden"
>
	<section class="relative flex items-center justify-between p-4 md:px-0">
		<!-- Brand -->
		<div
			class="brand font-pt-sans text-xl font-semibold text-teal-600 dark:font-normal
			 dark:text-teal-400 lg:text-2xl"
		>
			Benjamin Thorpe
		</div>

		<!-- Menu Items -->
		<div
			class="{show
				? 'top-full p-3'
				: '-top-96'} absolute right-0 left-0 mx-4 grid place-content-center gap-3 bg-slate-100 shadow
				transition-all dark:bg-gray-700 md:static md:flex md:flex-row md:bg-transparent md:shadow-none
				dark:md:bg-transparent"
		>
			<a
				href="#about"
				class="font-raleway text-gray-700 dark:font-semibold dark:text-gray-100 md:hover:text-gray-900
				 dark:md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				About
			</a>
			<a
				href="#skills"
				class="font-raleway text-gray-700 dark:font-semibold dark:text-gray-100 md:hover:text-gray-900
				 dark:md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				Skills
			</a>
			<a
				href="#experience"
				class="font-raleway text-gray-700 dark:font-semibold dark:text-gray-100 md:hover:text-gray-900
			 dark:md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				Experience
			</a>
			<a
				href="#projects"
				class="font-raleway text-gray-700 dark:font-semibold dark:text-gray-100 md:hover:text-gray-900
				 dark:md:hover:text-gray-400"
				on:click={() => (show = false)}
			>
				Projects
			</a>
		</div>

		<!-- Hambuger -->
		<div class="font-light md:hidden" on:click={toggleNav}>
			{#if show}
				<Icon
					icon="simple-line-icons:close"
					class="text-xl font-bold text-teal-700 dark:text-teal-300"
				/>
			{:else}
				<Icon
					icon="simple-line-icons:menu"
					class="text-xl font-bold text-teal-700 dark:text-teal-300"
				/>
			{/if}
		</div>
	</section>
</nav>
