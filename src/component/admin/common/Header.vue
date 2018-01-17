<template>
    <div>
       <el-dropdown class="header">
            <span class="el-dropdown-link">
               <span>你好，{{uname}}</span>
               <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <!-- 默认情况下，监听组件的事件都是监听组件自己emit发射的事件，如果要监听浏览器原生事件，需要添加native修饰符 -->
                <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                uname:'admin'
            }
        },
        methods:{
            logout(){
                this.$http.get(this.$api.logout).then(res=>{
                    if(res.data.status == 0){
                        this.$router.push({name:'login'});
                    }else{
                        this.$alert(res.data.message);
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .header{
        text-align: right;
        line-height: 60px;
        display: block;
    }
</style>