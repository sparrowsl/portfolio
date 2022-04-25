<script>
  import { fly } from "svelte/transition";

  import { projects } from "../store.js";
  import ProjectCard from "../components/ProjectCard.svelte";
</script>

<section in:fly="{{ y: 200, duration: 500 }}" out:fly="{{ y: -200, duration: 500 }}" class="container">
  <h1>My Projects</h1>

  <section class="projects">
    {#each $projects as project}
      <ProjectCard {project} />
    {/each}
  </section>
  <!-- link to more projects -->
  <!-- <p>
    <a href="https://github.com/benjithorpe?tab=repositories" target="_blank">more projects</a>
  </p> -->
</section>

<style>
  h1 {
    font-size: 3rem;
    text-align: center;
    color: silver;
    margin-block: 0.7em;
    font-family: "Playfair Display", monospace, serif;
  }
  .projects {
    display: grid;
    gap: 2.5em;
  }

  @media screen and (min-width: 768px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
