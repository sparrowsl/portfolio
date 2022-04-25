<script>
  import { active } from "tinro";

  import Icon from "./shared/Icon.svelte";
</script>

<section class="container">
  <nav>
    <ul>
      <li>
        <a href="/" use:active exact>
          <Icon iconName={"ri-home-4-line"} />
          <small>Home</small>
        </a>
      </li>
      <li>
        <a href="/about" use:active>
          <Icon iconName={"ri-user-line"}/>
          <small>About</small>
        </a>
      </li>
      <li>
        <a href="/projects" use:active>
          <Icon iconName={"ri-folder-line"}/>
          <small>Projects</small>
        </a>
      </li>
      <li>
        <a href="/contact" use:active>
          <Icon iconName={"ri-smartphone-line"}/>
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
    padding-block: 1.5em;
  }
  ul {
    list-style-type: none;
    display: flex;
    /* gap: 2em; */
    justify-content: space-evenly;
  }
  li a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 0.2em;
    font-size: 1.5rem;
    font-family: "Playfair Display", serif;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 768px) {
    li a {
      flex-direction: row;
      /* justify-content: center; */
      align-items: center;
      font-size: 1.5rem;
    }
  }
</style>
