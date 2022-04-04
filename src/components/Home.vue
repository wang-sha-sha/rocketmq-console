<template>
  <el-container>
    <el-header>
      <div>
        <img src="../assets/rmq-logo.png" alt="">
        <span>RocketMQ管理平台</span>
      </div>
      <el-button @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu active-text-color="blue" :collapse="isCollapse" :collapse-transition="false" router
                 :default-active="activePath">
          <el-menu-item index="/dashboard" @click="clickPath('/dashboard')">
            <i class="el-icon-s-home"></i>
            <span>仪表盘</span>
          </el-menu-item>
          <el-menu-item index="2" @click="clickPath('/2')">
            <i class="el-icon-s-grid"></i>
            <span>集群管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-apple"></i>
            <span>生产者管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-pear"></i>
            <span>消费者管理</span>
          </el-menu-item>
          <el-menu-item index="/topic" @click="clickPath('/topic')">
            <i class="el-icon-chat-dot-round"></i>
            <span>Topic管理</span>
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-search"></i>
              <span>消息查询</span>
            </template>
            <el-menu-item index="6-1">
              <i class="el-icon-right"></i>
              <span>按key查询</span>
            </el-menu-item>
            <el-menu-item index="6-2">
              <i class="el-icon-right"></i>
              <span>按id查询</span>
            </el-menu-item>
            <el-menu-item index="6-3">
              <i class="el-icon-right"></i>
              <span>按时间查询</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="7">
            <i class="el-icon-monitor"></i>
            <span>监控</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-lock"></i>
            <span>权限管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home-Com',
  data () {
    return {
      isCollapse: false,
      activePath: ''
    }
  },
  created() {
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    clickPath (activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(240, 240, 240, 0.8);
  padding-left: 10px; //默认20
  > div {
    display: flex;
    //justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;

    img {
      height: 50px;
    }

    span {
      margin-left: 15px;
    }
  }

}

.el-aside {
  background-color: #fff;

  .toggle-button {
    font-size: 10px;
    background-color: whitesmoke;
    text-align: center;
    letter-spacing: 0.3em;
    line-height: 24px;
    cursor: pointer;
  }
}

.el-main {
  background-color: rgb(247, 247, 255);
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
