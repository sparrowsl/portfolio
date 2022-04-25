<script>
  import { fly, fade } from "svelte/transition";
  import Skills from "../components/Skills.svelte";
</script>

<article in:fly="{{ y: 200, duration: 500 }}" out:fly="{{ y: -200, duration: 500 }}" class="container">
  <!-- About summary -->
  <h1>About Me</h1>
  <section class="about-me">
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
      distinctio veniam quod nostrum. Nostrum officia ad, delectus maiores
      fugiat non!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
      similique sequi id possimus. Eius iste quibusdam corrupti, mollitia neque
      quod voluptate ab, esse, ullam harum quos molestiae dolores minus. Ullam.
    </p>
  </section>
  <!-- Skills section -->
  <Skills />
</article>

<style>
  h1{
    font-size: 3rem;
    text-align: center;
    color: silver;
    margin-block: .7em;
    font-family: "Playfair Display", monospace, serif;
  }
  .about-me p {
    font-size: 1.75rem;
    line-height: 1.5;
    font-family: "PT Sans", sans-serif;
    color: #333;
    margin-bottom: 1em;
  }
</style>
