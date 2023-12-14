<script  setup>

</script>

<template>
    <div class="main">
        <div class="text">
            <h1>Web前端小组实习作业</h1>
            <h2>组员：何梓润 罗天祥</h2>
        </div>
        
    </div>
</template>

<style scoped>
.main{
    height: 1080px;
    width: 1800px;
    background-image: url("../assets/img/wallhaven-o5762l.png");
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-size: 100% 100%;
    position: fixed;
}
.text{
    position: absolute;
    top: 20%; /* 从顶部的中间位置开始定位 */
    left: 75%; /* 从左侧的中间位置开始定位 */
    transform: translate(-50%, -50%);

}
h1,h2{
    color: aliceblue;
    text-align: center;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}
h1{
    font-size: 64px;
}
h2{
    font-size: 42px;
}
</style>