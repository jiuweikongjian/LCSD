mui.init();
function new_list(){
	var obj = {};
	obj.act="app_list";
	mui.ajax('http://server-name/login.php?'+obj,{
	data:{
		username:'username',
		password:'password'
	},
	dataType:'json',//服务器返回json格式数据
	type:'post',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；
	headers:{'Content-Type':'application/json'},	              
	success:function(data){
		//服务器返回响应，根据响应结果，分析是否登录成功；
		console.log(data);return;
	},
	error:function(xhr,type,errorThrown){
		//异常处理；
		console.log(type);
	}
});
}

var mySwiper = new Swiper('.swiper-container',{
  slidesPerView : 5,/*栏目显示数量*/
  slidesPerGroup : 5,/*栏目显示数量*/
})

$('.swiper-slide').click(function(){
	var inde=$(this).index();
	$(".swiper-slide:eq("+inde+")").addClass("ind").siblings().removeClass("ind");
})