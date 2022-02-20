import Vue from 'vue'
import App from './App'
import Msg from "common/msg.js" //使用的函数
import Json from "json.js" //使用的数据


Vue.prototype.$json = Json
Vue.prototype.$msg = Msg

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
