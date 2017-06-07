<template>
  <el-row>
      <el-col :span="6">&nbsp;</el-col>
      <el-col :span="14" style='align-content: center;border:1px solid #99a9bf;padding: 21px;margin-top: 60px;'>
      {{data}}
        <el-form ref="form" name='zhuceForm'>
          <el-form-item  style='text-align: center;margin:0px;margin-top:20px; '>
            <span style="color: white;font-size:40px;float: left">注册</span>
          </el-form-item>
          <el-form-item  >
            <el-input placeholder="请输入email" name='email' class='elInputClass'></el-input>
            <el-input placeholder="请输入密码" type='password' class='elInputClass' name="pwd"></el-input>
            <el-input placeholder="请再次输入密码" type='password' class='elInputClass' name='rpwd'></el-input>
            <el-input placeholder="请输入昵称" class='elInputClass'  name='nicheng'></el-input>
          </el-form-item>
          <el-form-item style='text-align: center'>
            <el-button type="primary" @click='register'>注册</el-button>
            <router-link to="/">
              <el-button>返回登陆</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">&nbsp;</el-col>
    </el-row>
</template>
<script>
//import  {axPost} from '../../common/HttpBean'
import  {zhuce} from '../../vuex/actions/UserAction'

  export default{
    methods:{
      register:function(e){
       zhuce(zhuceForm,this);//调用UserAction中的register方法
  }
    }
       }
        //alert($(zhuceForm).serialize());
// axPost('http://localhost:3000/users/zhuce',$(zhuceForm).serialize(),function(res){
//           alert(res.data);
//         },function(err){
//           alert(err);
//       });
    



    // let formObj={};
        // formObj.email=zhuceForm.email.value;
        // formObj.email=zhuceForm.email.value;
        //  formObj.nicheng=zhuceForm.nicheng.value;

        
</script>
<style>
  .elInputClass{
    margin-bottom:15px;
  }
</style>