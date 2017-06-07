import  {axGet} from '../../common/HttpBean';

export function getRoomList(thisa){
		axGet('/api/hall/getRoomList',{},function(res){
        alert(res.data);
         
        },function(err){
          alert(err);
      });
}