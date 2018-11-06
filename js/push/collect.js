mui.init();
favoriteList();
function favoriteList(){
	var obj = {};
	obj="";
	mui.ajax(url+'favorite_list/json',{
	data:{
		 user_id:'1',
		// password:'password'
	},
	dataType:'json',//服务器返回json格式数据
	type:'post',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；	              
	success:function(data){
		if(data.code==200){		var str = '';
            var arr = data.data;            for(var i in arr) {                str +='<li class="mui-table-view-cell mui-media">'
					+ '<a href="javascript:;">'
					+ '<img class="mui-media-object mui-pull-left" src="../images/timg.jpg">'
					+ '<div class="mui-media-body">'
					+ arr[i].title
					+ '<p class="mui-ellipsis">'+arr[i].description+'</p>'
					+ '</div>'
					+ '</a>'
					+ '</li>'            }            $(".content").html(str);		}	},	error:function(xhr,type,errorThrown){
		//异常处理；
		console.log(type);
	}	});
}