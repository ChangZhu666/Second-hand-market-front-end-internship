<script setup>





</script>
<template>
  <div class="home">
    <div class="main">
      <h3 class="title">Login</h3>
        <form>
          <input type="text" id="username" name="username" required placeholder="Username" title="请输入用户名" maxlength="14">

          <input type="password" id="password" name="password" required placeholder="Password" title="请输入密码" maxlength="18">

          <button type="submit" @click="$router.push('/home')">Loign</button>
        </form> 
    </div>
  </div>
</template>



<style scoped>
.home{
  background-image: url("../assets/wallhaven-2y6wwg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment:fixed;
  height: 1080px;
}
.main{
   width:400px;
   height:450px;
   background-color: rgba(223, 227, 232, 0.477);
   position:absolute;
   left:50%;
   top:50%;
   border-radius: 50px;
   margin-left:-200px;
   margin-top:-225px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.title{
  text-align: center;
  font-size: 64px;
  color: rgb(43, 43, 43);
  margin-top: 10px;
  margin-bottom: 10px;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
form{
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
input {
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
  color: #000;
  outline: none;
  margin: 20px auto;
  height: 15%;
  width: 80%;
  text-indent: 1em;
}

button{
  background-color: rgb(0,120,255);
  border: none;
  height: 20%;
  width: 50%;
  border-radius: 20px;
  font-size: 28px;
  color: aliceblue;
}
button:hover{
  cursor: pointer;
}
</style>