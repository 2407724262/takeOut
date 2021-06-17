import request from "./ajaxUrl";
const actions={
//清空购物车
  actionsEmpty(context) {
    function ajaxEmpty(id) {
      return request.post("/biz/deleteOrderByOid?orderId="+id).then(function (res) {
        console.log(res)
      })
    }
        for (var i =0;i<context.state.shopping.length;i++){
           var id =context.state.shopping[i].id
            ajaxEmpty(id)
        }
         context.commit("mutationsEmpty")
  },
}
export default actions
