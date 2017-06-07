import  userStore from '../stores/UserStore';

 export function getZhuce(vuea){
 	alert('loginbean值发生改变'+userStore.state.login);
	return  userStore.state.loginbean;
}