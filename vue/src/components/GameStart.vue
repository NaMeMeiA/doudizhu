<template>
  <div>
    <el-row style="margin-bottom: 18px">
      <el-col :span='24' style='text-align: center;margin-top: 30px '><span style="color: white;font-size:40px;">欢迎来斗地主</span></el-col>
    </el-row>
    <el-row>
      <el-col :span="6">&nbsp;</el-col>
      <el-col :span="14" style='align-content: center;border:1px solid #99a9bf;padding: 21px;'>
        <el-form ref="form" name='LoginForm'>
          <el-form-item style='text-align: center;margin:0px;'>
           <span style="color: white;font-size:40px;float: left"> 登陆</span>
          </el-form-item>
          <el-form-item >
            <el-input placeholder="请输入email" style='margin-bottom:15px' name='email'></el-input>
            <el-input placeholder="请输入密码" type='password' name='pwd'></el-input>
          </el-form-item>
          <el-form-item style='text-align: center'>
          
            <el-button type="primary" @click='login'>登陆</el-button>
         
            <router-link to="/register">
              <el-button>注册</el-button>
            </router-link>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="4">&nbsp;</el-col>
    </el-row>
  </div>
</template>
<script>
import  {login} from '../vuex/actions/UserAction'

  export default {
    data () {
      return {
        
      }
    },
      methods:{
      login:function(e){
       login(LoginForm,this);//调用UserAction中的register方法
  }

      }
    }
  
  
</script>
