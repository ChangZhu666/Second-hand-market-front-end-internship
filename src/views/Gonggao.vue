<script  setup>
import  Breadcrumb  from '../components/breadcrumb.vue';
import touxiang from '../components/youshangjiao.vue'
const data = [require('@/assets/img/lunbo/wallhaven-1jryk1.jpg'),require('@/assets/img/lunbo/wallhaven-43mzlv.jpg'),
require('@/assets/img/lunbo/wallhaven-nmlyy4.jpg'),require('@/assets/img/lunbo/wallhaven-wqy5er.jpg')]

</script>

<template>
    <div class="main">
        <touxiang></touxiang>
        <Breadcrumb></Breadcrumb>
        <div class="container">
            <el-carousel :interval="2500" arrow="always" style="height: 890px">
                <el-carousel-item v-for="item in data" :key="item">
                   <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        
    </div>
</template>

<style scoped>
.main{

    position: fixed;
    height: 100%;
    width: 1800px;
   
}
.container{
    margin-top:57px ;
    height: 900px;
    width: 100%;
}
img{
  height: 100%;
  width: 100%;
}
</style>