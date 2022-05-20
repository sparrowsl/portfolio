<script>
	import MenuLinks from "./MenuLinks.svelte";

	import MobileNav from "./MobileNav.svelte";
</script>

<div class="relative bg-slate-100 shadow">
	<section class="container grid min-h-[8vh] items-center px-4 md:min-h-[10vh]">
		<MobileNav />

		<!-- tablet navigation and above -->
		<nav class="hidden justify-between gap-3 md:flex">
			<!-- Brand -->
			<div class="brand text-xl font-medium text-teal-600 lg:text-2xl">BIT</div>

			<!-- Menu Items -->
			<div class="menu-items mr-10 flex gap-5 lg:mr-0">
				<MenuLinks />
			</div>
		</nav>
	</section>
</div>

<style>
</style>
