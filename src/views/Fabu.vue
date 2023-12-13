<script  setup>
import  Breadcrumb  from '../components/breadcrumb.vue';

import { ref } from 'vue'

const form = ref({
  name: '',
  price: 0,
  number: 0,
  image:'',
  Introduction:'',
  id:0
})

</script>

<template>
    <div class="main">
        <Breadcrumb></Breadcrumb>
        <div class="container">
        
        <el-form
    ref="ruleFormRef"
    :model="form"
    status-icon
    :rules="rules"
    label-width="200px"
    class="demo-ruleForm"
    label-position="top"
    size="large"
    
  >
    <el-form-item label="商品名称" prop="" required>
      <el-input v-model="name" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="价格" prop="price" required>
      <el-input v-model="price" type="number" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="数量" prop="number" required>
      <el-input v-model="number" type="number" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="介绍" prop="Introduction" size="large">
      <el-input v-model="Introduction" type="text" autocomplete="off"/>
    </el-form-item>
    <el-form-item label="图片" prop="image">
      <el-input v-model="image" type="text" autocomplete="off"/>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>

        </div>
    </div>
</template>

<style scoped>
.main{
    height: 1080px;
    width: 1800px;  
}
.container{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>