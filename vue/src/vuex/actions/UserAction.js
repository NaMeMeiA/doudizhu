import  {axPost} from '../../common/HttpBean';
import  UserStore from '../stores/UserStore';
export function zhuce(form,thisa){
		 axPost('/api/users/zhuce',$(form).serialize(),function(res){
        alert(res.data);
         // UserStore.commit('zhuce',res.data);//调用UserStore里的zhuce方法，传值
          if(rs.data){
          	thisa.$router.push('/GameHall');//代码实现路由页面跳转

          }

        },function(err){
          alert(err);
      });
}
export function login(form,thisa){
		 axPost('/api/users/login',$(form).serialize(),function(res){
        //alert(res.data);
         // UserStore.commit('Login',res.data);//调用UserStore里的zhuce方法，传值
          if(res.data==1){
          	thisa.$router.push('/GameHall');//代码实现路由页面跳转

          }
        },function(err){
          alert(err);
      });
}