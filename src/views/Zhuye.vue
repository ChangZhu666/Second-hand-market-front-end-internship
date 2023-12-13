<script setup>
import {  ref } from 'vue';
import router from '@/router';



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
          <el-icon><icon-menu /></el-icon >
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>公告</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <el-icon><document /></el-icon>
          <span>二手市场</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>二手发布</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-menu-item index="6">
          <el-icon><setting /></el-icon>
          <span>更多</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
  <div class="main">
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
.main{
  position: fixed;
  left: 150px;
  height: 1080px;
  width: 1800px;

}


</style>




