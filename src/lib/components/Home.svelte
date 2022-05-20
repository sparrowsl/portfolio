<script>
	import { fly } from "svelte/transition";
	import Icon from "../components/shared/Icon.svelte";
	import Skills from "../components/Skills.svelte";
</script>

<section in:fly={{ y: 200, duration: 500 }} class="container">
	<header>
		<h1>Hi there, I am <span>Benjamin Thorpe</span></h1>
		<p class="info">
			A Web Developer by profession, and I build simple, user-friendly, responsive, fast and
			functional websites that work. My aim is to build and contribute in building something useful
			for myself, the community and the world as a whole.
		</p>

		<ul class="icons">
			<li>
				<a href="https://wa.me/23299783218" class="">
					<Icon iconName={"ri-whatsapp-line"} />
					<!-- <Icon iconName={"ri-smartphone-line"} /> -->
				</a>
			</li>
			<li>
				<a href="mailto:benjaminthorpe19@gmail.com" class="">
					<Icon iconName={"ri-mail-line"} />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/benjithorpe/">
					<Icon iconName={"ri-linkedin-fill"} />
				</a>
			</li>
			<li>
				<a href="https://twitter.com/benjithorpe1">
					<Icon iconName={"ri-twitter-line"} />
				</a>
			</li>
			<li>
				<a href="https://github.com/benjithorpe">
					<Icon iconName={"ri-github-fill"} />
				</a>
			</li>
		</ul>
	</header>

	<Skills />
</section>

<style>
	.container {
		/* background-color: #fff; */
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	header {
		margin-bottom: 2em;
	}
	h1 {
		font-size: 4rem;
		margin-bottom: 0.5em;
		font-family: "Playfair Display", monospace, serif;
		color: rgba(0, 128, 128, 0.582);
	}
	h1 span {
		color: teal;
	}
	.info {
		font-size: 1.75rem;
		line-height: 1.5;
		color: #333;
		font-family: "PT Sans", sans-serif;
		max-width: 65ch;
	}
	.icons {
		margin-top: 2.5em;
		list-style-type: none;
		display: flex;
		justify-content: center;
		gap: 2em;
	}
	.icons li a {
		font-size: 3rem;
		color: rgba(0, 128, 128, 0.582);
	}
	.icons li a:hover {
		text-decoration: none;
		color: rgba(0, 128, 128, 0.89);
	}
	@media screen and (min-width: 768px) {
		.container {
			padding-inline: 10vw;
		}
		.icons {
			justify-content: start;
		}
	}
</style>
