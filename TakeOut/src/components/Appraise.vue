<template>
    <div>
<!--      评分部分-->
        <div class="appraise">
          <div class="appleft">
            <h3>4.5</h3>
            <p><b>综合评分</b></p>
            <p>高于周边商家99%</p>
          </div >
          <div class="appright">
              <div><van-rate v-model="merchant.goodsScore" allow-half size="13px" readonly />  <span style="font-size: 13px"> <b>服务评分</b> <span style="color: #F2A239;">{{merchant.goodsScore}}</span>   </span></div>
              <div><van-rate v-model="merchant.serviceScore" allow-half size="13px" readonly />  <span style="font-size: 13px"> <b>商品评分</b> <span style="color: #F2A239;">{{merchant.serviceScore}}</span> </span></div>
              <p style="text-align: left;font-size: 13px;margin: 0"> <b>送达时间</b> {{merchant.deliveryTime}}分钟 </p>
          </div>
        </div>
<!--        分割线-->
        <div style="background:#F4F5F7;padding: 10px 0  "></div>

<!--                      <div style="margin: 10px;text-align: left">-->
<!--                        <van-button style="margin-left: 10px;" class="btncolorHover" type="primary"  @click="evaluateBtn(2)">全部</van-button>-->
<!--                        <van-button style="margin-left: 10px;" class="btncolor" type="primary" @click="evaluateBtn(1)">好评</van-button>-->
<!--                        <van-button style="margin-left: 10px;" class="btncolor" type="primary"  @click="evaluateBtn(0)">差评</van-button>-->
<!--                      </div>-->
      <div class="btnDiv">
        <button class="btncolorHover" @click="evaluateBtn(2)">全部</button>
        <button class="btncolor" @click="evaluateBtn(1)">好评</button>
        <button class="btncolor" @click="evaluateBtn(0)">差评</button>
      </div>

      <div class="comm">
        <div class="comm-div1" style="text-align: left;">
          <van-card
            thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
            v-for="(item,i) in filetrsData" :key="i"
          >
            <template #title>
              <div style="overflow: hidden"><p style="float: left">{{item.account}}</p> <p style="float: right">{{item.oederTime}}</p></div>
            </template>
            <template #desc>
              <div>
                <van-rate v-model="item.score/10" readonly size="15px" />
                <p><b>{{item.comments}}</b></p>
              </div>
            </template>
            <template #price>
              <van-icon name="good-job"  color="#F19D39" /><van-tag type="warning">南瓜粥</van-tag>
            </template>
            <template #thumb>
              <div>
                <van-image
                  style="border-radius:none;margin-left:20px"
                  round
                  width="50px"
                  height="50px"
                  src="https://img01.yzcdn.cn/vant/cat.jpeg"
                />
              </div>
            </template>
          </van-card>
        </div>
      </div>
<!--      评论内容-->

    </div>
</template>

<script>
  import {mapState} from "vuex"
    export default {
        name: "Appraise",
        props:['id'],
        data(){
            return{
              card:0,
              allpamm:"" , //全部评论
              btnVal:2
            }
        },
      components:{

      },
      methods:{
        evaluateBtn(res){
           this.btnVal = res;
        }

      },
      computed:{
          ...mapState(['merchant']),
        filetrsData(){
              var tt =document.getElementsByTagName("button");
              console.log(tt)
              for (var i=0;i<tt.length;i++){
                console.log(tt[i])
              }
          console.log(tt)
            if(this.btnVal==1){
                return this.allpamm.filter(function (val) {
                  console.log(val)
                    return val.isGood == 1;
                })
            }else if(this.btnVal == 0){
              return this.allpamm.filter(function (val) {
                return val.isGood == 0;
              })
            }else{
              return this.allpamm
            }
        }
      },
      created() {
          var app = this
        this.$http.get("/biz//queryCommentByShopId?shopId="+this.id).then(function (res) {
          console.log(res.data)
          app.allpamm = res.data
        })
      },
    }
</script>

<style scoped>
  .appraise{
    overflow: hidden;
    padding: 15px 0;
  }
  .appraise>.appleft{
    float: left;
    width: 40%;
    border-right: 2px solid lightgray;
  }
  .appraise>.appright{
    width: 58%;
    float: right;
  }
  .appleft> * {
      padding: 0;
      margin: 0;
  }
  .appleft>h3{
    font-size: 20px;
    color: #F2A239;
  }
  .appleft>p>b{
    font-size: 13px;
  }
  .appleft>p:last-child{
    font-size: 12px;
    color: #DBD1CE;
  }
/*评论的样式*/
  .comm /deep/ .van-tabs__nav--card{
    border: 0;
  }
  .comm /deep/ .van-tabs__nav--card .van-tab{
    border: 0;
  }
.comm .comm-div1 /deep/ .van-card>.van-card__header *{
  margin: 1px 0;
}
  .comm .comm-div1 /deep/ .van-card>.van-card__header  .van-card__thumb img{
    margin: 0;
  }
  .btncolor{
    background: #D6D6D7;
    color: #000000;
    border: 0;
  }
  .btncolorHover{
    background: #4AA478;
    color: #ffffff;
  }
</style>
