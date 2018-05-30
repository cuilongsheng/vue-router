<template>
  <div id="app">
    <img src="./assets/logo.png" width="100">
    <hello-world></Hello-World>
    <router-link to="/">首页</router-link> |
    <router-link :to="{name:'hi',params:{isOk:true}}">Hi</router-link> |
    <router-link to="/params/198/jspang website is very good">params</router-link> |
    <router-link to="/params-reg/200/cuilongsheng is working hard!">params-reg</router-link> |
    <router-link to="/index">返回首页</router-link> |
     <router-link to="/bbbbbb">我是瞎写的</router-link> |
     <router-link to="/program-nav">programNav</router-link> |
    <!-- <transition name="fade"> -->
      <router-view></router-view>
    <!-- </transition> -->
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
    <!-- <index-top></index-top> -->
  </div>
</template>

<script>
import helloWorld from "@/components/hello-world";
// import indexTop from "@/components/index-top";
export default {
  name: "App",
  components: {
    helloWorld,
    // indexTop
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.left {
  float: left;
  width: 50%;
  background-color: #ccc;
  height: 300px;
}
.right {
  float: right;
  width: 50%;
  background-color: #c0c;
  height: 300px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
