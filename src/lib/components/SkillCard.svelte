<script>
	import Icon from "@iconify/svelte";

	/** @type {{ icon: string, name: string }} */
	export let skill;
</script>

<figure class="text-center transition-transform hover:(cursor-pointer -translate-y-3)">
	<Icon icon="{skill.icon}" class="mx-auto text-gray-800 text-5xl" />
	<figcaption class="font-normal mt-2 text-slate_light text-sm tracking-wider capitalize">
		{skill.name}
	</figcaption>
</figure>
