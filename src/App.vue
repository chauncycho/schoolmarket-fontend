<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from "@/components/Header";

  export default {
    name: 'App',
    components: {Header}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  html,body,#app{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
