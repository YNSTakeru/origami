<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "@/global/Header";
import Main from "@/pages/Main";
export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
