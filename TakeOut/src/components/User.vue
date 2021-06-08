<template>
    <div>
      ajjj
      <div class="header">
        <van-nav-bar title="我的"   style="background: #00A67C; "/>
        <van-cell is-link title="基础用法" @click="show = true" />
      </div>
      <div class="header">

        <foo></foo>
      </div>
    </div>
</template>



<script>
  import foo from "./foo";
    export default {
        name: "User",
        props:['name'],
      components:{
          "foo":foo
      }
    }
</script>

<style scoped>
.header /deep/ .van-ellipsis{
  color: #ffffff;

}
.header /deep/ .van-nav-bar__content{
    border-bottom: 2px solid #33FFFF;
  }
</style>
