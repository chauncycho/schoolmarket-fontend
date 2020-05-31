<template>
  <div class="my-container">
    <div class="my-row">
      <el-button @click="getList">获取待审核的商品列表</el-button>
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
                <el-button type="success" @click="pass(item.id)">通过</el-button>
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
  export default {
    name: "Admin",
    data() {
      return {
        products: []
      }
    },
    methods: {
      getList() {
        this.$axios.get('/product/listCreated').then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.products = response.data.data;
          } else {
          }
        }).catch(error => {
          console.error(error)
        })
      },
      pass(id){
        this.$axios.get('/product/release', {
          params: {
            id: id,
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.$message.success("审核成功")
            this.getList();
          } else {
            this.$message.error("审核失败")
          }
        }).catch(error => {
          console.error(error)
          this.$message.error("审核失败")
        })
      }
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
