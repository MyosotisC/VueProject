<template>
    <el-menu
      default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <!-- 一个菜单项 -->
        <el-submenu v-for="item in menu" :key="item.title" :index="item.title">
            <!-- 标题内容 -->
            <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span>{{item.title}}</span>
            </template>
            <!-- 菜单列表 -->
            <el-menu-item v-for="subitem in item.childer" :key="subitem.title" index="subitem.title">
                <router-link :to="subitem.path" class="subitem">{{subitem.title}}</router-link>
            </el-menu-item> 
        </el-submenu>
    </el-menu>      
</template>

<script>
    export default {
        data(){
            return {
                menu:[
                    {
                        title:'资源下载',
                        childer:[
                            {title:"内容管理",path:'/a'},
                            {title:"类别管理",path:'/b'},
                            {title:"评论管理",path:'/c'},
                        ]
                    },
                    {
                        title:'购物管理',
                        childer:[
                            {title:"内容管理",path:'/a'},
                            {title:"类别管理",path:'/b'},
                            {title:"评论管理",path:'/c'},
                        ]
                    },
                    {
                        title:'订单管理',
                        childer:[
                            {title:"内容管理",path:'/a'},
                            {title:"类别管理",path:'/b'},
                            {title:"评论管理",path:'/c'},
                        ]
                    }
                ]
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .subitem{
        text-decoration: none;
        color: aliceblue;
    }
</style>