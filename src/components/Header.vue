<template>
  <div class="my-header">
    <div @click="home" class="logo">
      校园二手市场
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    methods:{
      home(){
        this.$router.push("/home")
      }
    }
  }
</script>

<style scoped>
  .my-header {
    width: 100%;
    height: 40px;
    background-color: #72fcfd;
    padding: 0 20px;
    line-height: 40px;
  }

  .logo {
    font-size: 20px;
  }

</style>
