<script>
	/** @type {{ icon: string, name: string, color: string }} */
	export let skill;
</script>

<figure class="text-center transition-transform hover:(cursor-pointer -translate-y-3)">
	<div class="i-{skill.icon} text-{skill.color} mx-auto text-5xl" />

	<figcaption class="font-normal mt-2 text-slate_light text-sm tracking-wider capitalize">
		{skill.name}
	</figcaption>
</figure>
