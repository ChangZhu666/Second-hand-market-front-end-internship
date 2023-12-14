<script setup>


</script>

<template>
    <div class="avtor" >
        <el-tooltip content="我的头像" effect="customized" >
            <el-avatar @click="$router.push( '/inform' )" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" :size="48" />
        </el-tooltip>
        <p style="float:right" @click="$router.push( '/' )"> 退出登录</p>
           

    </div>
</template>

<style scoped>
.avtor{
    position: fixed;
    height: 38px;
    width: 150px;
    right: 50px;
    top: 4px;
    z-index: 2; /* 较高的 z-index 值 */
    cursor: pointer;
}
p{
   color: rgba(203, 207, 149, 0.527);
    
}

</style>