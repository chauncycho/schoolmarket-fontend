<template>
  <div class="my-container">
    <div class="my-row" style="text-align: center">
      <el-button @click="refresh">刷新</el-button>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="订单id">
      </el-table-column>
      <el-table-column
        prop="product.name"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="user.name"
        label="买家">
      </el-table-column>
      <el-table-column
        prop="product.founder.name"
        label="卖家">
      </el-table-column>
      <el-table-column
        label="买家评价"
        width="400">
        <template slot-scope="scope">
          <el-input type="textarea" v-model="scope.row.orderComment"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button @click="comment(scope.row.id,scope.row.orderComment)">提交评价</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "OrderList",
    data(){
      return {
        tableData: [{
          id:'',
          user:{
            name:''
          },
          product:{
            name:'',
            founder:{
              name:''
            }
          },
          orderComment:''
        }]
      }
    },
    methods:{
      refresh(){
        this.$axios.get('/order/findByUserId',{
          params:{
            userId: this.currentUser.id
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.tableData = response.data.data;
            console.log(this.tableData)
          } else {
          }
        }).catch(error => {
          console.error(error)
        })
      },
      comment(id,comment){
        this.$axios.get('/order/comment',{
          params:{
            id: id,
            comment: comment
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.$message.success("修改成功")
          } else {
            this.$message.error("修改失败")
          }
          this.refresh()
        }).catch(error => {
          console.error(error)
          this.$message.error("修改失败")
        })
      }
    },
    computed: {
      ...mapState(['currentUser'])
    }
  }
</script>

<style scoped>

</style>
