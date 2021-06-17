import Vue from "vue";
import Vuex from "vuex"
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);
const store = new Vuex.Store({

  state:{
    name:'',   //存储用户名，密码 姓名等信息
    shopping:[], //购物车的数据
    merchant:"", //商家详情信息
    loingStateus:false,  //用户是否登陆
  },

  getters:{
  },
  mutations,
  actions,
})

export default store
