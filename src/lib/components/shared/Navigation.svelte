<script>
	const menuLinks = [
		{ href: "/", name: "Home" },
		{ href: "/about", name: "About" },
		{ href: "/experience", name: "Experience" },
		{ href: "/projects", name: "Projects" },
		{ href: "/contact", name: "Contact" }
	];
</script>

<nav class="flex min-h-[6em] items-center justify-between">
	<span class="font-bold">BIT</span>

	<div class="flex items-center gap-5">
		{#each menuLinks as { href, name }}
			<a {href} class="text-sm">{name}</a>
		{/each}
	</div>
</nav>
