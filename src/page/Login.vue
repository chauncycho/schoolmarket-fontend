<template>
  <div class="my-container">
    <div class="login-box-wrapper">
      <div class="login-box">
        <div class="my-row">
          <h3>登录</h3>
        </div>
        <div class="my-row">
          <span class="my-label">用户名</span>
          <el-input class="my-input" v-model="username"></el-input>
        </div>
        <div class="my-row">
          <span class="my-label">密码</span>
          <el-input class="my-input" type="password" v-model="password"></el-input>
        </div>
        <div class="my-row">
          <el-button @click="login">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        let that = this;
        this.$axios.post('/login', {
          username: this.username,
          password: this.password
        }).then(function (response) {
          console.log(response)
          if (response.data.status == 200) {
            let currentUser = response.data.data;
            that.$store.dispatch('setCurrentUser', currentUser);

            //登录成功
            that.$message.success('Hello ' + currentUser.name);
            that.$router.push('/home')
          } else {
            console.log(response.data.message)
            this.$message.error("登录失败")
          }
        }).catch(error => {
          console.log(error)
          this.$message.error("登录失败")
        })
      }
    }
  }
</script>

<style scoped>
  .my-container {
    padding-top: 80px;
  }

  .login-box-wrapper {
    text-align: center;
  }

  .login-box {
    display: inline-block;
    width: 400px;
    padding: 0px 20px;
    background-color: aqua;
    border-radius: 20px;
  }

  .my-row {
    margin: 20px 0;
  }

  .my-row .my-label {
    display: inline-block;
    width: 55px;
  }

  .my-row .my-input {
    width: 300px;
  }
</style>
