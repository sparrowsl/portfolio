<script>
  import { darkMode } from "../../store.js";
</script>

<div class="theme" on:click={() => console.log(($darkMode = !$darkMode))}>
  {#if $darkMode}
    <i class="ri-sun-line" />
  {:else}
    <i class="ri-moon-fill" />
  {/if}
</div>

<style>
  .theme {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: teal;
    color: white;
    position: absolute;
    bottom: 10vh;
    right: 0;
  }
  i {
    font-size: 2.5rem;
  }
</style>
