var mongoose =require('mongoose');


var User = mongoose.model('user', new mongoose.Schema({  //注意在这里写user，库里是users
      email: String,   
      pwd: String,   
      nicheng: String,
	  role:Number,
	  createtime:Date

    },{_id:true})); 
module.exports=User;