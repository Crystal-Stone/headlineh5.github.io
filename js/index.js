/**
 * Created by weihuazhang on 2019/3/19.
 */
$(function() {
//	eruda.init();
	//按钮复制
//	var clipboard = new Clipboard('.btn_copy', {
//		text: function() {
//			return $('#wxchat_name').text();
//		}
//	});
//
//	clipboard.on('success', function(e) {
//		//复制成功后，提示一下
//		textTip('复制成功', 1800, function() {});
//		//复制成功后，执行转化代码
//		meteor.track("wechat", {
//			convert_id: "1628593640915971"
//		});
//	});
//	
//	//文本复制
//	var clipboardTxt =new Clipboard('.long_press', {
//		text: function() {
//			return $('#wxchat_name2').text();
//		}
//	});
//	clipboardTxt.on('success', function(e) {
//		//复制成功后，提示一下
//		textTip('复制成功', 1800, function() {});
//	});
//	$(".wxchat_name").click(function(){
//		$(".long_press").click();
//	})
	
	$(".btn_copy").click(function(){
		window.copyText($('#wxchat_name').text());
		textTip('复制成功', 1800, function() {});//复制成功后，提示一下
		//复制成功后，执行转化代码
		meteor.track("wechat", {
			convert_id: "1628593640915971"
		});
	});
	$(".wxchat_name").click(function(){
		window.copyText($('#wxchat_name').text());
		textTip('复制成功', 1800, function() {});//复制成功后，提示一下
	});
	
	//定时器两小时改变公众号
	var aNum = ['gudaka666', 'uptg0469', 'manylin568'];
	$('#wxchat_name').text('gudaka666');
	var index = 1;
	setInterval(function() {
		$('#wxchat_name').text(aNum[index % 3]);
		index++;
	}, 2 * 60 * 60 * 1000);
})

//文字提示信息
function textTip(str, t, callBack) {
	t = t || 2000;
	var dom = document.createElement("p");
	dom.setAttribute('class', 'text-tip');
	document.body.appendChild(dom);
	var mytip = document.querySelector('.text-tip')

	mytip.style.display = "block";
	mytip.innerHTML = str;
	var tipHeight = mytip.offsetHeight;

	//文字两行或两行以上
	if((tipHeight - 20) / 18 > 1) {
		mytip.style.width = "55%";
	}
	setTimeout(function() {
		mytip.style.display = "none";
		//mytip.parentNode.removeChild(mytip);
		if(callBack) {
			callBack();
		}
	}, t);
}