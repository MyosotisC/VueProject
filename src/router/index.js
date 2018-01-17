// 导入组件
import Login from '../component/login/Login.vue';
import Admin from "../component/admin/Admin.vue";
// 导入商品模块页面组件
import GCList from "../component/admin/goods/content/List.vue";
import GCEdit from "../component/admin/goods/content/Edit.vue";


// 该文件对外导出路由配置
export default {

    routes: [
        // 登陆
        { path: '/', redirect: '/admin' },      
        { name: 'login', path: '/login', component: Login },
        // 后台管理
        { name: 'admin', path:'/admin',component:Admin }
    ]

};
