<template>
  <!-- <button @click="gotoDaybook" class="btn btn-primary">go to daybook</button> -->
  <router-view />
</template>

<script>
export default {
  methods: {
    gotoDaybook() {
      return this.$router.push({ name: "no-entry" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav a {
  font-weight: bold;
}
</style>
