var pomelo = require('pomelo');

module.exports = function(app) {
	console.log('room中app调用');
  return new Handler(app);
};

var Handler = function(app) {
	console.log('room中Handler调用');
  this.app = app;
};

Handler.prototype.enterRoom = function(msg, session, next) {
	channel = pomelo.app.get('channelService').getChannel(msg.room,true);//频道
	let uid = msg.id;
	session.bind(uid);
	sid = this.app.get('serverId');
	channel.add(uid,sid);
	next(null,{});
	if(channel.seat){
		let len=channel.seat.length;
	if(len<3){
		channel.pushMessage('enterRoom',channel.seat,{},function(err,data){
			
			console.log(err);
			console.log(data);
	});
	}else{
		
		
	}

	}else{
		channel.seat=[];
		channel.seat[0]=msg;
		channel.pushMessage('enterRoom',msg,{},function(err,data){


		});

	}
	
	//---------下线处理-----------------------------
	session.on('closed', function(){
		console.log(uid+'下线了');
		channel.leave(uid,sid);
		let len=channel.seat.length;
		for(i=0;i<len;i++){
			if(channel.seat[i].id==uid){
				
				channel.seat.splice(i,1);
			}
			
		}
		
		channel.leave(uid,sid);
	});
	//----------------------------------------------
	
	
}