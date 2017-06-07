const router = require('koa-router')()

router.prefix('/hall')

router.get('/getRoomList', async function (ctx, next) {
	console.log('aaaaaaaaa');
  let loginbean = ctx.session.loginbean;
  console.log('loginbean:'+loginbean.id);
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }
  ctx.body=[];
})

router.get('/newRoom', async function (ctx, next) {
	
  let loginbean = ctx.session.loginbean;
  console.log('loginbean:'+loginbean.id);
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }
  let roompwd =ctx.query.pwd;
  //ctx.body=[];
})
module.exports = router

