<template>
  <div class="my-container">
    <div class="my-row">
      <div class="item">
        <span class="label">商品名称</span>
        <el-input style="width: 200px;" v-model="name"></el-input>
      </div>
      <div class="item">
        <span class="label">商品价格</span>
        <el-input style="width: 200px;" type="number" v-model="price"></el-input>
      </div>
    </div>

    <div class="my-row">
      <div class="item">商品描述</div>
      <el-input type="textarea" style="width: 500px" v-model="des"></el-input>
    </div>

    <div class="my-row">
      <div class="item">商品图片</div>
      <el-upload
        class="upload-demo"
        drag
        action="http://127.0.0.1:8082/image/upload"
        :on-success="uploadSuccess"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
      </el-upload>
    </div>

    <div class="my-row">
      <div class="item">
        <el-button type="success" @click="submit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "ProductEdit",
    data() {
      return {
        name: '',
        des: '',
        price: '',
        imagePath: ''
      }
    },
    methods: {
      uploadSuccess(response) {
        console.log(response)
        this.imagePath = response.data.url;
        console.log(this.imagePath)
      },
      submit(){
        this.$axios.get('/product/add', {
          params: {
            name: this.name,
            des: this.des,
            price: this.price,
            url: this.imagePath,
            userId: this.currentUser.id
          }
        }).then(response => {
          console.log(response)
          if (response.data.status == 200) {
            this.$message.success("提交成功")
            this.$router.push('/home')
          } else {
            this.$message.error("提交失败")
          }
        }).catch(error => {
          console.error(error)
          this.$message.error("提交失败")
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

  .item {
    display: inline-block;
    margin: 10px;
  }
</style>
