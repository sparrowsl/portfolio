<script>
  import { fly } from "svelte/transition";

  import Image from "./../components/shared/Image.svelte";
</script>

<section transition:fly={{ y: 200, duration: 2000 }} class="projects">
  <div class="project">
    <picture>
      <Image src="/images/pexels-pixabay-270408.jpg" />

      <caption>
        <h3 class="project-title">Project Title</h3>
        <p class="project-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla
          placeat vel exercitationem id corrupti, blanditiis harum autem ea
          itaque.
        </p>

        <ul class="project-links">
          <li><a href="/projects">Live</a></li>
          <li><a href="/projects">Code</a></li>
        </ul>
      </caption>
    </picture>
  </div>
</section>

<style>
  .project{
    background-color: #fff;
    box-shadow: 0 5px 15px lightgrey;
    border-radius: 5px;
  }
  caption{
    padding: 2em;
  }
  .project-title {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    padding-bottom: .5em;
    color: #445;
  }
  .project-desc{
    font-family: 'PT Sans', sans-serif;
    font-size: 1.6rem;
    color: #765;
  }
  .project-links{
    list-style-type: none;
    display: flex;
  }
  caption,
  picture {
    display: block;
  }
</style>
