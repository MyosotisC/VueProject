<template>
    <div class="login">
        <h1>知识分享系统</h1>
        <el-form label-position="left"  abel-width="80px"  ref="ruleForm2" :model="formLabelAlign" :rules="rules">
          <el-form-item label="账号" prop="uname">
              <el-input v-model="formLabelAlign.uname" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="upwd">
              <el-input v-model="formLabelAlign.upwd" style="width:300px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登陆</el-button>
            <el-button @click="resetForm('ruleForm2')">重置</el-button>
          </el-form-item>        
        </el-form>
    </div>
</template>

<script>
export default {
  data() {
    // 校验账号，配置到validator配置项
    function unameFn(rule,value,callback){
      if(value == ""){
        callback(new Error("账号不能为空"))
      }else{
        callback();
      }
    }    
    // 校验密码
    function upwdFn(rule,value,callback){
      if(value == ""){
        callback(new Error('密码不能为空'))
      }else{
        callback();
      }
    }
    return {
      // 表单提交数据
      formLabelAlign:{
        uname:"",
        upwd:""
      },
      // 表单校验规则
      rules:{
        uname:[
          {required:true,message:"请填写账号",trigger:"blur"},
          {min:5,max:18,message:"账号在5~18位",trigger:"blur"},
          {validator:unameFn,triggir:"blur"}
        ],
        upwd:[
          {validator:upwdFn,trigger:"blur"},
          {pattern:/^\w{6,18}$/,message:"密码在6~18位",triggir:'blur'}
        ]
      }

    };
  },
  methods: {
    // 登陆
    login(){
      this.$http.post(this.$api.login,this.formLabelAlign).then(res=>{
        if(res.data.status == 0){
          this.$router.push({name:'admin'});
        }else{
          this.$alert(res.data.message);
        }
      })
    },
    // 表单提交
      submitForm(formName) {
        // 通过ref引用得到form表单元素，然后调用validate方法去校验全部字段，通过，回调的值为true，否则为false
        this.$refs[formName].validate(result =>{
          // 全部验证才登陆
          if(result){
            this.login();
          }
          // 验证有误
          else{
            this.$alert("请重新输入");
          }
        })
      },
      // 重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>

<style scoped>
.login {
  width: 400px;
  height: 260px;
  border: 1px solid #fff;
  padding:10px;
  padding-top:50px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 8px;
}
h1 {
  position: absolute;
  top: -70px;
  width: 100%;
  text-align: center;
  color: #fff;
}
</style>