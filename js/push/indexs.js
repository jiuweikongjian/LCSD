mui.init();
community_list();
function community_list(){
	var obj = {};
	obj="";
	mui.ajax(url+'community_list/json',{
	data:{
		 //id:'2',
		// password:'password'
	},
	dataType:'json',//服务器返回json格式数据
	type:'post',//HTTP请求类型
	timeout:10000,//超时时间设置为10秒；
	headers:{'Content-Type':'application/json'},	              
	success:function(data){
		if(data.code==200){
			var str ='';
            var arr = data.data;
            for(var i in arr) {
				str += '<div class="mui-card">'
				    + '<div class="mui-card-header mui-card-media">'
					+ '<img src="../images/timg.jpg" />'
					+'<div class="mui-media-body">'
					+arr[i].post_title
					+'<p>发表于 '+arr[i].published_time+'</p>'
					+' </div>'
					+' </div>'
					+'<div class="mui-card-content mui-card-media bgimg">' 
					+arr[i].post_content
					+'</div>'
					+' <div class="mui-card-footer">'
					+'点赞等功能区'
					+'<ul class="clic">'
					+'<li>1</li>'
					+'<li>2</li>'
					+'<li>3</li>'
					+'<li>4</li>'
					+'</ul>'
					+'</div>'
					+'</div>'
            }
            $(".content").html(str);
		}
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
