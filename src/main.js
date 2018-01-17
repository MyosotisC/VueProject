// 导入normalize.css 初始化样式
import "normalize.css" 
// 导入全局样式
import "./less/index.less"
// 1.1 导入vue相关的第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import Elemtnt from "element-ui"
// 导入element-ui的样式
import "element-ui/lib/theme-chalk/index.css"

// 1.2 启动vue插件
Vue.use(VueRouter);
Vue.use(Elemtnt);

// 2.1 导入自己写的根组件
import App from "./component/App.vue";
import routerConfig from "./router/index.js"

// 导入axios
import axios from "axios";
// 改用域名
axios.defaults.baseURL = "http://localhost:8899";
// 加入原型中
Vue.prototype.$http = axios;

// 导入自己写的配置对象，为方便使用，也将其加入原型链中
import api from "./js/api-config.js"
Vue.prototype.$api = api;

// 把根组件渲染到指定视图
new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(App);
    },
    router:new VueRouter(routerConfig)
});
