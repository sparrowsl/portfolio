<script>
  import { active } from "tinro";
  import { darkMode } from "../store";

  import Icon from "./shared/Icon.svelte";
  import Theme from "./shared/Theme.svelte";
</script>

<section class="container" class:dark={$darkMode}>
  <nav>
    <Theme />

    <ul>
      <li>
        <a href="/" use:active exact>
          <Icon iconName={"ri-home-4-line"} />
          <small>Home</small>
        </a>
      </li>
      <li>
        <a href="/projects" use:active>
          <Icon iconName={"ri-folder-line"} />
          <small>Projects</small>
        </a>
      </li>
      <li>
        <a href="/contact" use:active>
          <Icon iconName={"ri-smartphone-line"} />
          <!-- <i class="ri-contacts-line"></i> -->
          <small>Contact</small>
        </a>
      </li>
    </ul>
  </nav>
</section>

<style>
  .container {
    background-color: white;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 2px 2px 5px lightgray;
    height: 10vh;

    display: grid;
    align-items: center;
  }
  nav {
    position: relative;
  }
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2em;
    font-size: 1.65rem;
    font-family: "Playfair Display", serif;
  }

  @media screen and (min-width: 768px) {
    ul {
      gap: 5.5em;
      justify-content: center;
    }
    li a {
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
  }
</style>
