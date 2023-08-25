<script>
	export let title = "";
	export let subtitle = "";
	export let color = "light_slate";
</script>

<div>
	<h2 class="font-bold tracking-wide text-4xl uppercase">{title}</h2>
	<p class="mb-3 text-sm text-{color} tracking-wider">{subtitle}</p>
</div>
