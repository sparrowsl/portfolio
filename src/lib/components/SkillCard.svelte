<script>
	import Icon from "@iconify/svelte";

	/** @type {{ icon: string, name: string }} */
	export let skill;
</script>

<figure class="text-center hover:animate-bounce">
	<Icon icon="{skill.icon}" class="mx-auto text-5xl" />
	<figcaption class="font-light mt-2 text-xs tracking-wider capitalize">{skill.name}</figcaption>
</figure>
