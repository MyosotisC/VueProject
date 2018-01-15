<template>
    <div>
        我不知道我在干嘛
    </div>
</template>

<script>
    export default {
        // 组件初始化完毕，自己调用
        created(){
            // 测试
            this.$http.get(this.$api.islogin).then(res=>{
                console.log(res.data);
            })
        }
    }
</script>

<style scoped>

</style>