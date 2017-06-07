<template >
  <div  >
  <div class='ss'>
  <div  class='game' >
    游戏大厅
    </div>
    <el-row style="margin-bottom: 18px;margin-top: 30px">
      <el-col :span='18'>
       <roomList/>
      </el-col>
      <el-col :span='6'>
       <levelnav/>
      </el-col>
  </el-row>
    
    </div>
  </div>
</template>
<script>
import  {getRoomList} from '../../vuex/actions/HallAction'
import Levelnav   from './Levelnav'
import RoomList   from './RoomList'
  export default {
    mounted:function(){ 
          //axios向服务器发请求,获取房间列表
          getRoomList(this);
      },
      components:{
          levelnav:Levelnav,
          roomList:RoomList
      }
  }
</script>
