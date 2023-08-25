<script>
	export let title = "";
	export let color = "light_slate";
</script>

<div>
	<h2 class="font-bold tracking-wide text-4xl uppercase">{title}</h2>
	<h3 class="mb-3 text-sm text-{color} tracking-wider">
		<slot>Lorem ipsum dolor sit amet.</slot>
	</h3>
</div>
