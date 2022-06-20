<script>
</script>

<nav class="flex justify-between gap-3 md:hidden">
	<!-- Brand -->
	<div class="brand text-xl font-medium text-teal-600 lg:text-2xl">BIT</div>

	<!-- Menu Items -->
	<div
		class:hidden={!showNav}
		class="menu-items absolute top-full right-0 left-0 mx-5 mt-1 flex
    flex-col gap-3 rounded-md bg-slate-50 p-3 shadow-md shadow-slate-300 "
	/>

	<!-- Hambuger -->
	<div class="menu-toggle text-2xl font-bold md:hidden" on:click={() => (showNav = !showNav)}>
		<i class="ri-menu-3-line block" />
	</div>
</nav>

<style>
</style>
