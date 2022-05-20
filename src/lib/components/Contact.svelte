<script>
	import { fly } from "svelte/transition";
	import Icon from "../components/shared/Icon.svelte";
</script>

<section in:fly={{ y: -200, duration: 700 }} class="container">
	<h1>Contact</h1>

	<ul class="contacts">
		<li>
			<a href="https://wa.me/23299783218" class="">
				<Icon iconName={"ri-whatsapp-line"} /> <span>WhatsApp</span>
				<!-- <Icon iconName={"ri-smartphone-line"}/> -->
			</a>
		</li>
		<li>
			<a href="mailto:benjaminthorpe19@gmail.com" class="">
				<Icon iconName={"ri-mail-line"} /> <span>E-mail</span>
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/benjithorpe/">
				<Icon iconName={"ri-linkedin-fill"} /> <span>LinkedIn</span>
			</a>
		</li>
		<li>
			<a href="https://twitter.com/benjithorpe1">
				<Icon iconName={"ri-twitter-line"} /> <span>Twitter</span>
			</a>
		</li>
		<li>
			<a href="https://github.com/benjithorpe">
				<Icon iconName={"ri-github-fill"} /> <span>Github</span>
			</a>
		</li>
	</ul>
</section>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h1 {
		font-size: 3rem;
		text-align: center;
		color: silver;
		margin-block: 0.7em;
		font-family: "Playfair Display", monospace, serif;
	}
	.contacts {
		list-style-type: none;
		display: grid;
		gap: 1.5em;
		justify-content: center;
		align-items: center;
	}
	.contacts li a {
		display: flex;
		gap: 0.5em;
		align-items: center;
		font-size: 2rem;
		color: hsl(210, 31%, 47%);
		font-family: "PT Sans", sans-serif;
		text-decoration: none;
	}
	.contacts li a span {
		font-size: 1.4rem;
	}
	.contacts li a span:hover {
		text-decoration: underline;
	}
</style>
