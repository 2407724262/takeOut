<template>
    <div>
      <div class="header">
        <van-nav-bar title="订单列表"   style="background: #00A67C;"/>
      </div>
      <!--    登陆后的  tab切换-->
      <van-tabs v-if="loginON"  v-model="active">
        <!--        外卖订单的内容-->
        <van-tab title="外卖订单">
          <div style="margin-bottom: 50px">
            <van-card
              :thumb="'http://47.95.13.193:80/takeOutSystem-1.0-SNAPSHOT/'+item.foodPhoto"
              style="text-align: left"
              v-for="(item,i) in Order[0].list"
              :key="i"
            >
              <template #desc>
                <p style="margin-top: 15px"> <b>{{item.foodName}} > </b> </p>
              </template>
              <template #price>
                <p>{{item.foodName}}等商品</p>
              </template>
              <template #footer>
                <van-button plain type="default" size="mini" style="border-radius: 20px">删除订单</van-button>
                <van-button plain type="primary" size="mini" style="border-radius: 20px">再来一单</van-button>
              </template>
            </van-card>
          </div>
        </van-tab>

        <!--        待评价的内容-->
        <van-tab title="待评价">内容 2</van-tab>
        <van-tab title="退款">内容 3</van-tab>
        <van-tab title="其他订单">内容 4</van-tab>
      </van-tabs>
<!--      没有登陆给予提示-->
      <div v-else >
        <van-empty  description="抱歉，您还没有登陆" >
          <template #default>
            <a style="color: red" :href="'#/login'"> 点击前去登录 </a>
          </template>
        </van-empty>
      </div>


      <foo></foo>
    </div>
</template>

<script>
  import foo from "./foo";
  import {mapState} from "vuex"
    export default {
        name: "Order",
      components:{
        "foo":foo,
      },
      data() {
        return {
          active: 0,//默认显示
          loginON:"",//是否登陆
          Order:"",
        };
      },
      computed:{
        ...mapState(['name'])
      },

      methods: {

      },
      created() {
          var app = this
        var loingStateus= window.localStorage.getItem("loingStateus")
        this.loginON = loingStateus;
        console.log(this.name.name)
        this.$http.post("/biz/queryOrdersByUserId?userId="+this.name.id).then(function (res) {
          console.log(res.data)
          app.Order=res.data
        })
      },
    }
</script>

<style scoped>
.header /deep/ *{
  color: #ffffff;
}

</style>
