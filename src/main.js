// 1.1 导入vue相关的第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';

// 1.2 启动vue插件
Vue.use(VueRouter);

// 2.1 导入自己写的根组件
import App from "./component/App.vue";
import routerCongig from "./router/index.js"

// 把根组件渲染到指定视图
new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(App);
    },
    router:new VueRouter(routerCongig)
});
