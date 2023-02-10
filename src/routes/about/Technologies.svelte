<script>
	import { technologies } from "$lib/stores/store";
</script>

<section>
	<p>Here are few technologies I have been working with:</p>

	<ul class="text-slate mt-5 grid max-w-fit grid-cols-3 gap-y-2 gap-x-16 text-sm">
		{#each $technologies as skill}
			<li>{skill}</li>
		{/each}
	</ul>
</section>
