<script>
  import { active } from "tinro";
</script>

<section class="container">
  <nav>
    <ul>
      <li>
        <a href="/" use:active exact>
          <i class="ri-home-4-line"></i>
          <small>Home</small>
        </a>
      </li>
      <li>
        <a href="/about" use:active>
          <i class="ri-user-line" />
          <small>About</small>
        </a>
      </li>
      <li>
        <a href="/projects" use:active>
          <i class="ri-folder-line" />
          <small>Projects</small>
        </a>
      </li>
      <li>
        <a href="/contact" use:active>
          <!-- <i class="ri-contacts-line"></i> -->
          <i class="ri-smartphone-line" />
          <small>Contact</small>
        </a>
      </li>
    </ul>
  </nav>
</section>

<style>
  .container{
    border: 1px solid black;
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
  }

  @media screen and (min-width: 768px) {
    li a {
      flex-direction: row;
      /* justify-content: center; */
      align-items: center;
      font-size: 1.5rem;
    }
    li a i{
      order: 1;
    }
  }
</style>
