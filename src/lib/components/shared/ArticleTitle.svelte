<script>
	export let title = "";
</script>

<div>
	<h2 class="text-4xl font-bold tracking-wide uppercase">{title}</h2>
	<h3 class="mb-3 text-sm text-light_slate tracking-wider">
		<slot>Lorem ipsum dolor sit amet.</slot>
	</h3>
</div>
