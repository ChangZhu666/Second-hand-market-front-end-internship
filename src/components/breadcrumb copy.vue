<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()

const getBreadcrumbText = (routeName) => {
  switch (routeName) {
    case '2':
      return '公告';
    case '3':
        return '二手市场';
    case '4':
        return '二手发布';
    case '5':
        return '二手管理';
    case '6':
        return '个人中心-购物车';
    case '7':
        return '个人中心-我的发布';
    case '8':
        return '个人中心-个人信息';
    case '9':
        return '更多';
    default:
        return '';
  }
};

</script>

<template>
    <div class="breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a>{{ getBreadcrumbText(route.name) }}</a></el-breadcrumb-item>
            </el-breadcrumb>
            <div class="avatar">

</div>
        </div>
        
</template>

<style scoped>
.breadcrumb{
    padding-top: 19px;
    padding-left: 25px;
    height: 38px;
    background-color: rgb(67,74,80);
}
.avatar{
    width: 2000px;
    height: 1px;
}
.el-breadcrumb{
    font-size: 18px;
    
}

</style>