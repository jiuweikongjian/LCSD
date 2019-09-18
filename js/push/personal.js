$(".image").click(function(){
	mui.openWindow({
	  url: '../push/login.html',
	  id: '../push/login.html',
	  styles: {                             // 窗口参数 参考5+规范中的WebviewStyle,也就是说WebviewStyle下的参数都可以在此设置
	    titleNView: {                       // 窗口的标题栏控件
	      titleText:"标题栏",                // 标题栏文字,当不设置此属性时，默认加载当前页面的标题，并自动更新页面的标题
	      titleColor:"#000000",             // 字体颜色,颜色值格式为"#RRGGBB",默认值为"#000000"
	      titleSize:"17px",                 // 字体大小,默认17px
	      backgroundColor:"#F7F7F7",        // 控件背景颜色,颜色值格式为"#RRGGBB",默认值为"#F7F7F7"
	      progress:{                        // 标题栏控件的进度条样式
	        color:"#00FF00",                // 进度条颜色,默认值为"#00FF00"  
	        height:"2px"                    // 进度条高度,默认值为"2px"         
	      },
	      splitLine:{                       // 标题栏控件的底部分割线，类似borderBottom
	        color:"#CCCCCC",                // 分割线颜色,默认值为"#CCCCCC"  
	        height:"1px"                    // 分割线高度,默认值为"2px"
	      }
	    }
	  }
	});
})