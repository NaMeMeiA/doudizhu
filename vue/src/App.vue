<template>
<div class="con">
  <div id="app">
   
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.con{
  width:auto;
  height:100vh;
  background-image: url(./assets/7.jpg);
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2px;
  
}
.ss{

  width:auto;
  height:100vh;
  background-image: url(./assets/2.jpeg);
  background-size: cover;
}
.game{
  background-color:black;
  color:white;
  font-size: 46px;
  margin-left: 500px;
  width:400px;
  height:50px;
}
.room{
  border:1px solid #FFFFFF;
  margin-left: 200px;
  width:500px;
  height:250px;
  background-color:#E5E9F2;
}
</style>
