<script setup>
import {ref} from 'vue'
import  Breadcrumb  from '../components/breadcrumb.vue';
import { useCounterStore } from '@/store/counter'

const store = useCounterStore()
const res = ref([])

const params = ref({
    pagenum:1, //当前页
    pagesize:4, //当前生效的每页条数
    maxpage:9  //最大分页数
})

const onCurrentChange = (page) =>{
    params.value.pagenum = page
    res.value = getList()
}
 // 计算当前页码对应的数据id范围
 const getList = () => {
  const start = (params.value.pagenum - 1) * params.value.pagesize;
  const end = start + params.value.pagesize;
  const slicedData = store.data.slice(start, end);
  return slicedData;
};
res.value = getList();
</script>

<template>
    <div class="main">
        <div class="container">
            <Breadcrumb></Breadcrumb>
        <el-table :data="res" style="width: 100%;display: flex; justify-content: center;" stripe >
            <el-table-column fixed prop="id" label="编号" width="100" />
            <el-table-column label="图片" width="275">
        <template #default="{ row }">
          <img v-bind:src="row.image" style="width: 100%; height: 165px;" />
        </template>
      </el-table-column>
            <el-table-column prop="name" label="名称" width="200" />
            <el-table-column prop="price" label="价格" width="100" />
            <el-table-column prop="number" label="数量" width="100" />
            <el-table-column prop="Introduction" label="介绍" width="650" />
            <el-table-column fixed="right" label="操作" width="150">
            <template #default>
                <el-button  link size="large" round @click="handleClick" type="primary" >购买</el-button>
            </template>
        </el-table-column>
  </el-table>
        </div>

        <div class="page">
            <el-pagination
            v-model:current-page="params.pagenum"
            v-model:page-size="params.pagesize"
            :page-size="20"
            :pager-count="11"
            background layout="prev, pager, next"
            :total="store.data.length"
            @current-change="onCurrentChange"
            />
        </div>

    </div>
</template>

<style scoped>
.main{
    height: 1080px;
    width: 1800px;

}
.container{
    height: 80%;
    width: 100%;
    
}
.page{
    display: flex;
    justify-content: center;
}

</style>