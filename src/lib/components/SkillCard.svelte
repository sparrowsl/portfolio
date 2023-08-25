<script>
	/** @type {{ icon: string, name: string, color: string }} */
	export let skill;
</script>

<figure class="text-center transition-transform hover:-translate-y-1.5">
	<div class="i-{skill.icon} text-{skill.color} mx-auto text-5xl" />

	<figcaption class="mt-2 text-1.15rem text-sm tracking-wider capitalize">
		{skill.name}
	</figcaption>
</figure>
