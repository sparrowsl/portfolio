<script>
  import { fly } from "svelte/transition"
</script>

<section transition:fly={{ y: 200, duration: 2000 }}>
  <h1>About</h1>
</section>
