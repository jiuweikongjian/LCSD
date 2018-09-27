mui.init({
	subpages:[{
      url:'push/index.html',
      id:'push/index.html',
      styles:{
        top:'0px',//mui标题栏默认高度为45px；
        bottom:'50px'//默认为0px，可不定义；
      }
    }],
	swipeBack:true,
});
$(".cli").on("tap","li",function(e){
	var a=$(this).index();
	var b=e.currentTarget.id;
	var webview =mui.openWindow({
	    url:b,
	    id:b,
	    styles:{
	      top:"0px",//新页面顶部位置
	      bottom:"50px",//新页面底部位置
	    },
	    extras:{}, //自定义扩展参数，可以用来处理页面间传值
	    createNew:true,//是否重复创建同样id的webview，默认为false:不重复创建，直接显示
	    show:{
	      autoShow:true,//页面loaded事件发生后自动显示，默认为true
	      aniShow:"auto",//页面显示动画，默认为”slide-in-right“；
	      duration:"1000"//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
	    },
	    waiting:{
	      autoShow:true,//自动显示等待框，默认为true
	      title:'正在加载...',//等待对话框上显示的提示内容
	      options:{
	        width:100,//等待框背景区域宽度，默认根据内容自动计算合适宽度
	        height:100,//等待框背景区域高度，默认根据内容自动计算合适高度
	      }
	    }
	})
})

$('footer ul li').click(function(){
	var inde=$(this).index();
	$("footer ul li:eq("+inde+")").addClass("dem").siblings().removeClass("dem");
})
