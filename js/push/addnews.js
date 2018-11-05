mui.init();
$("#btn").on('click', function() {
	var post_title=$("input[name=post_title]").val();
	var post_content=$("input[name=post_content]").val();
	mui.ajax('http://www.yyucs.com/public/add_article/json', {
		data: {
			post_content:post_content,
			post_title:post_title
		},	
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		success: function(data) {
			alert("成功");return;
		},
		error: function(xhr, type, errorThrown) {
			//异常处理；
			console.log(type);
		}
	});
})