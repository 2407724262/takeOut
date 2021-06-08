<template>
  <div id="app">

<!--    输出组件-->
    <router-view></router-view>

  </div>

</template>



<script>
  import Vue from "vue"
export default {
  name: 'App'
};
  //定义一个额外的组件  用来放公共的部分  比如底部的导航栏
  Vue.component("Publiclist",{
    template:"#Publiclist",
  })
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
