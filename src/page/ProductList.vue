<template>
  <div class="my-container">
    <div class="my-row">
      <el-button @click="getList">获取商品列表</el-button>
    </div>
    <div class="my-row">
      <div class="display-area">
        <div class="product" v-for="item in products" :key="item.id">
          <div class="framekwork">
            <div class="left-area">
              <div class="my-row">
                <span class="label">商品名称</span>
                <el-tag style="width: 100px;text-align: center">{{item.name}}</el-tag>
              </div>
              <div class="my-row">
                <span class="label">商品价格</span>
                <el-tag style="width: 100px;text-align: center">{{item.price}}</el-tag>
              </div>
              <div class="my-row">
                <span class="label">商品描述</span><div style="width: 104px;display: inline-block"></div><br>
                <el-input type="textarea" style="width: 200px" :value="item.des"></el-input>
              </div>
              <div class="my-row">
                <el-button type="success" @click="buy(item.id,item.price)">购买</el-button>
              </div>
            </div>
            <div class="right-area">
              <el-image :src="item.picturePath" style="width: 200px;height: 200px" :fit="cover"></el-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "ProductList",
    data() {
      return {
        products: []
      }
    },
    methods: {
      getList() {
        this.$axios.get('/product/listRelease').then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.products = response.data.data;
          } else {
          }
        }).catch(error => {
          console.error(error)
        })
      },
      buy(id,price){
        this.$axios.get('/order/makeOrder',{
          params:{
            userId: this.currentUser.id,
            productId: id
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.products = response.data.data;
            this.$message.success("嘀，支付成功~，花费"+price+"元")
          } else {
          }
        }).catch(error => {
          console.error(error)
        })
      }
    },
    computed: {
      ...mapState(['currentUser'])
    }
  }
</script>

<style scoped>
  .my-row {
    text-align: center;
  }

  .left-area, .right-area {
    display: inline-block;
  }

  .framekwork {
    display: inline-block;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    border: 1px #72fcfd solid;
  }
</style>
