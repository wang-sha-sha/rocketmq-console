<template>
  <div class="login-container">
    <div class="login-box">
      <!--      头像区域-->
      <div class="avatar-box">
        <img src="../assets/rmq-logo.png" alt="logo">
      </div>
      <!--      表单区域-->
      <el-form label-width="0px" class="login-form">
        <el-form-item class="login-title">
          <span>欢迎登录RocketMQ后台管理系统</span>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button type="primary">登录</el-button>
          <el-button type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-com'
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
    /deep/ .el-form-item__content{
      font-size: 18px ;
    }
  }

}
</style>
