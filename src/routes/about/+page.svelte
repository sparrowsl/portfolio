<script>
	import Technologies from "./Technologies.svelte";
</script>

<article class="min-h-[90vh] py-5">
	<h1 class="mb-14 indent-5 text-3xl font-semibold">About Me</h1>

	<section class="flex gap-10 px-5">
		<div class="text-light_slate flex flex-col gap-7">
			<!-- Introductory -->
			<p>
				Hello! My name is Benjamin and I enjoy creating things that live on the internet. My
				interest in web development started back in 2012 when I decided to try editing custom Tumblr
				themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
			</p>

			<!-- Recent -->
			<p>
				Fast-forward to today, and I have had the privilege of working for a
				<a href="https://easytogit.com">remote community project</a>, a
				<a href="https://softmagazin.ro">tech company</a> and a
				<a href="https://autohealthsl.com">tech start-up</a>. My main focus these days is building
				responsive, fast, and user-friendly products at
				<a href="https://autohealthsl.com">AutoHealth</a> for a variety of clients.
			</p>

			<!-- Technologies -->
			<Technologies />
		</div>
		<aside>
			<img src="/IMG-20221002-WA0023.jpg" alt="Benjamin Thorpe's avatar" />
		</aside>
	</section>
</article>

<style>
	a {
		color: rgb(45 212 191);
		font-weight: bold;
	}
</style>
