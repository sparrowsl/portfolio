<script>
  export let loading = "eager";
  export let width;
  export let height;
  export let alt = "an image";
  export let src = "";
</script>

<img
  {src}
  {alt}
  width={width ? width : ""}
  height={height ? height : ""}
  {loading}
/>

<style>
  img {
    max-width: 100%;
    height: 100%;
  }
</style>
