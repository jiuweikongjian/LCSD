$(".swiper-container").css("display","none");
mui.init();
followList();
function followList(){
	mui.ajax(url+'follow_list/json',{
	data:{
		 user_id:'1',
		// password:'password'
	},
	dataType:'json',//服务器返回json格式数据
	type:'post',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；	              
	success:function(data){
		
		if(data.code==200){
            var arr = data.data;
			var str ='<ul>';
			
            for(var i in arr) {
                str +='<li>'+arr[i].user.nickname+'</li>'	
            }
			            str +'</ul>'

            $(".cate").html(str);
		}
	},
	error:function(xhr,type,errorThrown){
		//异常处理；
		console.log(type);
	}
	});
}