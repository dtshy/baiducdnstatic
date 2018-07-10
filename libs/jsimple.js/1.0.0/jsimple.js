$(function(){
	$('body').delegate(".ajax_del",'click',function(){
		var url = $(this).attr("href");
		layer.confirm("确认删除该条记录吗？",function(){
			$.ajax({
				url:url,
				type:"get",
				success:function(obj){
					console.log(obj);
					layer.alert(obj.errmsg,function(i){
						location.reload();
					});
				},
				error:function(e){
					console.log(e);
					layer.alert("网络超时或未知错误，请稍后重试！");
				}
			});
		});
		return false;
	});
	$('body').delegate(".ajax_submit",'submit',function(){
		var url = $(this).attr("action");
		$.ajax({
			url:url,
			type:"post",
			data:$(this).serialize(),
			success:function(obj){
				//obj = eval("("+obj+")");
				layer.alert(obj.errmsg,function(i){
					parent.location.reload();
					parent.layer.closeAll();
				});
			},
			error:function(e){
				console.log(e);
				layer.alert("网络超时或未知错误，请稍后重试！");
			}
		});
		return false;
	});
	
	$('body').delegate(".layer-open",'click',function(){
		var url = $(this).attr("href");
		var area = $(this).attr("layer-area");
		var areaObj = area.split(",");
		var title = $(this).attr("layer-title")?$(this).attr("layer-title"):"";
		layer.open({
			title:title,
			type:2,
			closeBtn:false,
			shadeClose:true,
			area:[areaObj[0],areaObj[1]],
			content:url
		});
		return false;
	});
	
	
});
