<script>
  export let isLoading = false;
  export let width = 35;
  export let height = 35;
  export let alt = "";
  export let src = "";
</script>

<img {src} {alt} loading={isLoading ? "lazy" : "eager"} {width} {height} />

<style>
  img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
