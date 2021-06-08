<template id="foo">
    <footer>

      <van-tabbar v-model="active" @change="Foochange(active)">
        <van-tabbar-item icon="home-o" to="/home" >外卖</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="bill-o">订单</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/user" >我的</van-tabbar-item>
      </van-tabbar>
    </footer>
</template>

<script>
  export default {
    name: 'foo',
    props:['foo'],
    data () {
      return {
        active:0
      }
    },
    methods:{
      Foochange(res){
        console.log(res)
        this.active = res
      }
    }
  }
</script>

<style scoped>

</style>
