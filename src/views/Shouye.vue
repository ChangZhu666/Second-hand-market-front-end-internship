<script  setup>

</script>

<template>
    <div class="main">
        <div class="text">
            <h1>二手交易市场</h1>
            <h2></h2>
        </div>
    </div>
</template>

<style scoped>
.main{
    height: 1080px;
    width: 1800px;
    background-image: url("../assets/img/wallhaven-x6pl9v.jpg");
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-size: 100% 100%;
    position: fixed;
}
.text{
    position: absolute;
    top: 20%; /* 从顶部的中间位置开始定位 */
    right: 50%; /* 从左侧的中间位置开始定位 */
    transform: translate(-50%, -50%);

}
h1,h2{
    color: aliceblue;
    text-align: center;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
}
h1{
    font-size: 88px;
}
h2{
    font-size: 42px;
}
</style>