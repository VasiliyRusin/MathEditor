<template>
    <div>
    <FileLoader />
  </div>
</template>

<script>
    // @ is an alias to /src
    import FileLoader from "@/components/FileLoader.vue";

    export default {
  name: "home",
  components: {
      FileLoader
  }
};
</script>
