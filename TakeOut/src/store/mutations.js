const mutations={
//  登陆成功后保存用户名，密码，姓名
mutationsLogin:function (state,payload) {
    state.name = payload
}

};
export default mutations
