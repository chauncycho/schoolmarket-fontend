<template>
  <div class="my-container">
    <el-button type="primary" style="width: 100px;height: 100px" @click="list">浏览商品</el-button>
    <el-button type="success" style="width: 100px;height: 100px" @click="sell">出售商品</el-button>
    <el-button type="info" style="width: 100px;height: 100px" @click="order">订单列表</el-button>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods:{
      sell(){
        this.$router.push('/productEdit')
      },
      list(){
        this.$router.push('/productList')
      },
      order(){
        this.$router.push('/orderList')
      }
    }
  }
</script>

<style scoped>
  .my-container {
    text-align: center;
    margin-top: 100px;
  }
</style>
