<script  setup>
import  Breadcrumb  from '../components/breadcrumb.vue';
import touxiang from '../components/youshangjiao.vue'
import { useCounterStore } from '@/store/counter';

const store = useCounterStore();

</script>

<template>
  <touxiang></touxiang>
    <Breadcrumb></Breadcrumb>
    <div class="main" style="display: table; clear: both;">
    <el-col v-for="data in store.myfabu" :key="data.id" >
      <el-card :body-style="{ padding: '0px' }" style="float:left; margin:35px 35px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); width:500px; height:300px">
        <img :src="data.image" class="image" style="width:auto; height:200px" />
        <div style="padding: 14px">
          <span style="font-size:larger">{{data.name}}</span>
          <div class="bottom">
            <time class="time" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">{{ data.Introduction }}</time>
          </div>
        </div>
      </el-card>
    </el-col>

    </div>
</template>

<style scoped>
.main{
    margin-top:50px ;
    height: auto;
    width: 100%;
    background-color: rgb(63, 56, 59);
}

</style>