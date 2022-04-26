<script>
  import Icon from "./shared/Icon.svelte";
  import Image from "./shared/Image.svelte";
  export let project;
</script>

<div class="project">
  <picture>
    <div class="stack">
      <!-- Project Screenshot -->
      <Image src="/images/pexels-pixabay-270408.jpg" width height />
      <!-- project tech stack -->
      <p>{project.stack.join(", ")}</p>
    </div>
    <!-- Project details -->
    <caption>
      <h3 class="title">{project.title}</h3>
      <p class="desc">{@html project.desc}</p>

      <ul class="project-links">
        <li>
          <a href={project.links.code} target="_blank">
            <Icon iconName={"ri-code-s-slash-line"} /> Code
          </a>
        </li>
        <li>
          <a href={project.links.live} target="_blank">
            <Icon iconName={"ri-global-line"} /> Demo
          </a>
        </li>
      </ul>
    </caption>
  </picture>
</div>

<style>
  .project {
    background-color: #fff;
    box-shadow: 2px 2px 10px silver;
    border-radius: 7px;
  }
  caption {
    padding: 2em;
  }
  .stack {
    position: relative;
  }
  .stack p {
    background-color: rgba(163, 162, 162, 0.959);
    padding: 1em 0.5em;
    text-align: right;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    color: black;
    font-size: 1.65rem;
    font-family: "PT Sans", sans-serif;
    font-style: italic;
    font-weight: bold;
  }
  .title {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    padding-bottom: 0.5em;
    color: #445;
    color: rgba(0, 128, 128, 0.582);
    color: teal;
  }
  .desc {
    font-family: "PT Sans", sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #565;
  }
  .project-links {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    margin-top: 3em;
  }
  .project-links li a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    font-size: 1.75rem;
    color: teal;
    color: rgb(74, 170, 154);
  }
  caption,
  picture {
    display: block;
  }
</style>
