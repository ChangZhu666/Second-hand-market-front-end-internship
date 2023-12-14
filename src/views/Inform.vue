<script  setup>
import  Breadcrumb  from '../components/breadcrumb.vue';
import touxiang from '../components/youshangjiao.vue'
import { useCounterStore } from '@/store/counter'
import { computed, ref } from 'vue'
import {
  Iphone,
  OfficeBuilding,
  Location,
  Tickets,
  User,
} from '@element-plus/icons-vue'
const store = useCounterStore()
const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})

</script>


<template>
    
    <div class="main">
        <Breadcrumb></Breadcrumb>
        <touxiang></touxiang>
        <div class="container">

        <el-descriptions style="text-align:center"
    class="margin-top"
    title="个人信息"
    :column="2"
    :size="size"
    border
    :style="blockMargin"
  >
   
    <el-descriptions-item align="center" width="100px">
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          username
        </div>
      </template>
      {{store.info.username}}
    </el-descriptions-item>
    <el-descriptions-item align="center" width="100px">
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          Telephone
        </div>
      </template>
      {{store.info.Telephone}}
    </el-descriptions-item>
    <el-descriptions-item align="center" width="150px">
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <Location />
          </el-icon>
          Place
        </div>
      </template>
      {{store.info.Place}}
    </el-descriptions-item>
    <el-descriptions-item align="center" width="150px">
      <template #label >
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      <el-tag size="small" >School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item align="center" width="150px">
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      {{store.info.Address}}
    </el-descriptions-item>
        </el-descriptions>

        </div>
    </div>
</template>







<style scoped>
.main{
    height: 1080px;
    width: 1800px;
    background-image: url("../assets/img/wallhaven-we628p.jpg");
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-size: 100% 100%;
    position: fixed;
}
.container{
    padding-top:60px;
    height: 900px;
    width: 100%;
}
.el-descriptions {
  margin-top: 20px;
}
.cell-item {
  display: flex;
  align-items: center;
}
.margin-top {
  margin-top: 20px;
}
</style>