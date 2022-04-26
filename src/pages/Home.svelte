<script>
  import { fly } from "svelte/transition";
  import Icon from "../components/shared/Icon.svelte";
</script>

<section in:fly={{ y: 200, duration: 500 }} class="container">
  <header>
    <h1>Hi there, I am <span>Benjamin Thorpe</span></h1>
    <p class="info">
      A Web Developer by profession, and I build simple, user-friendly,
      responsive, fast and functional websites that work. My aim is to build and
      contribute in building something useful for myself, the community and the
      world as a whole.
    </p>

    <ul class="icons">
      <li>
        <a href="tel:+23299783218" class="">
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
        <a href="https://www.linkedin.com/in/benjithorpe/" class="">
          <Icon iconName={"ri-linkedin-fill"} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/benjithorpe1" class="">
          <Icon iconName={"ri-twitter-line"} />
        </a>
      </li>
      <li>
        <a href="https://github.com/benjithorpe" class="">
          <Icon iconName={"ri-github-fill"} />
        </a>
      </li>
    </ul>
  </header>
</section>

<style>
  .container {
    background-color: #fff;
  }
  section {
    min-height: 100vh;
    display: grid;
    /* justify-content: center; */
    align-items: center;
  }
  h1 {
    font-size: 4rem;
    margin-bottom: 0.5em;
    /* text-transform: uppercase; */
    font-family: "Playfair Display", monospace, serif;
    color: rgba(0, 128, 128, 0.582);
  }
  h1 span{
    color: teal;
  }
  .info {
    font-size: 1.75rem;
    line-height: 1.5;
    color: #333;
    font-family: "PT Sans", sans-serif;
    max-width: 65ch;
    /* text-align: center; */
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
</style>
