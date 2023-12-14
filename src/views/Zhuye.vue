<script setup>
import {  ref } from 'vue';
import router from '@/router';
import {
  House,
  Bell,
  ShoppingBag,
  Sell,
  User,
  Management,
  ShoppingTrolley,
  Coin,
  Document,
  More,
} from '@element-plus/icons-vue'

const activeTabName = ref('');



const changeTab = (index) => {
  activeTabName.value = index;
  router.push({ name: index });
};


</script>

<template>
  <el-row class="tac">
    <el-col :span="6">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="1"
        text-color="#fff"
        @select="changeTab"
      >
        <el-menu-item  style="background-color: rgb(67,74,80);">
          <img style="width:auto; height:80% ;margin-right:10px;margin-left:-5px" src="../assets/ershou.png" alt="logo"/>
          <p style="font-size:larger"><strong>二手市场</strong></p>
        </el-menu-item>
        <el-menu-item index="1" >
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Bell /></el-icon>
          <span>公告</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon><ShoppingBag /></el-icon>
          <span>二手市场</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Sell /></el-icon>
          <span>二手发布</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><Management /></el-icon>
          <span>二手管理</span>
        </el-menu-item>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><User /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="6"><el-icon><ShoppingTrolley /></el-icon>购物车</el-menu-item>
          <el-menu-item index="7"><el-icon><Coin /></el-icon>我的发布</el-menu-item>
          <el-menu-item index="8"><el-icon><Document /></el-icon>个人信息</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="9">
          <el-icon><More /></el-icon>
          <span>更多</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <div class="main1">
    <router-view />
  </div>
</template>

<style scoped>
.el-menu {

  height: 1080px; /* 设置菜单容器高度为视口高度 */
  width:150px;
  position: fixed;
  box-sizing:unset;
}
.logo{
  float: left;
}
.main1{
  position: absolute;
  left: 150px;
  height: 1080px;
  width: 1800px;
}


</style>




