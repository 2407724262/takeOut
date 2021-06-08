import Vue from "vue";
import Vuex from "vuex"
import mutations from "./mutations";

Vue.use(Vuex);
const store = new Vuex.Store({

  state:{
    name:'',   //存储用户名，密码 姓名等信息
  },

  getters:{

  },
  mutations,

})

export default store
