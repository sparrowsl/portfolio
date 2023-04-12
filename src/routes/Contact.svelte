<script>
	import ArticleTitle from "../lib/components/shared/ArticleTitle.svelte";
</script>

<!-- <div class="-mt-10 pb-10 text-gray-800 projects"> -->
<div class="bg-navy contact">
	<article class="container flex flex-col min-h-50svh py-30 justify-center">
		<div class="mx-auto text-center">
			<h2 class="font-bold mb-2 tracking-wide text-4xl uppercase">Get In Touch</h2>
			<h3 class="max-w-xl text-sm text-light_slate mb-5 tracking-wider leading-6.5">
				I am not currently looking for any new opportunities but my inbox is always open if you want
				to say hi, I will try my best to get back to you ASAP!
			</h3>

			<a
				href="mailto:benthorpe.dev@gmail.com"
				class="border rounded-full mx-auto border-teal-400 w-fit py-2 px-6 text-teal-400 block hover:bg-light_navy"
			>
				Say Hi
			</a>
		</div>
	</article>
</div>

<style>
	.contact {
		clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
	}
</style>
