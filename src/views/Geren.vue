<script  setup>
import  Breadcrumb  from '../components/breadcrumb.vue';
</script>

<template>
    <Breadcrumb></Breadcrumb>
    <div class="main">
        <el-row>
    <el-col
      v-for="(o, index) in 2"
      :key="o"
      :span="8"
      :offset="index > 0 ? 2 : 0"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>



    </div>
</template>

<style scoped>
.main{
    height: 1080px;
    width: 1800px;
    background-color: rgb(255, 0, 98);
}
</style>