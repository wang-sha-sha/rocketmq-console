<template>
  <div class="login-container">
    <div class="login-box">
      <!--      头像区域-->
      <div class="avatar-box">
        <img src="../assets/rmq-logo.png" alt="logo">
      </div>
      <!--      表单区域-->
      <el-form :model="loginForm" label-width="0px" class="login-form" :rules="loginFormRules" ref="loginFormRef">
        <el-form-item class="login-title">
          <span>欢迎登录RocketMQ后台管理系统</span>
        </el-form-item>
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-com',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 10,
            message: '长度在 3 到 10 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async (val) => {
        if (!val) return
        window.sessionStorage.setItem('token', 'sfjlkdhf34bjkbj')
        this.$router.push('/home')
        // this.$message.error('登录失败')
        // const { data: res } = await this.$http.post('login', this.loginForm)
        // if (res.meta.status !== 200) this.$message.error('登录失败')
        // this.$message.success('登录成功')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: skyblue;
  height: 100%;

  .login-box {
    width: 450px;
    height: 350px;
    background-color: aliceblue;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar-box {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      padding: 10px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px #eee;
      background-color: #fff;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }

  .login-form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    .btn {
      display: flex;
      justify-content: flex-end;
    }

    .login-title {
      text-align: center;
      font-weight: bold;
    }

    /deep/ .el-form-item__content {
      font-size: 18px;
    }
  }

}
</style>
