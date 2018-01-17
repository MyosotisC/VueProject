<template>
        <el-container class="admin">
            <!-- 页面左侧 -->
            <el-aside width="200px">
                <Aside></Aside>
            </el-aside>
            <!-- 页面右侧 -->
            <el-container>
                <!-- 右侧头部 -->
                <el-header>
                    <Header></Header>
                </el-header>
                <!-- 右侧主体,通过路由控制 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>  
</template>

<script>
// 引入公共头部和底部
import Header from "./common/Header.vue";
import Aside from "./common/Aside.vue";
// 注册子组件
export default {
  components: {
    Header,
    Aside
  }
};
</script>

<style scoped>
.el-header{
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.admin{
    height: 100%;
}
</style>