<script>
  export let loading = false;
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
  loading={loading ? "lazy" : "eager"}
/>

<style>
</style>
