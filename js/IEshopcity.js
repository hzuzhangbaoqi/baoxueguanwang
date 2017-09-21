$(document).ready(function(){
/*	alert($(document).width());*/
	 var d="<div class='snow'>❅<div>"
			setInterval(function(){
				var f=$(document).width();
				var e=Math.random()*f-100;
				var o=0.3+Math.random();
				var fon=10+Math.random()*30;
				var l = e - 200 + 200 * Math.random();
				var k=3000 + 5000 * Math.random();
				$(d).clone().appendTo(".snowbg").css({
					left:e+"px",
					opacity:o,
					"font-size":fon,
				}).animate({
				  top:"400px",
					left:l+"px",
					opacity:0.8,
				},k,"linear",function(){$(this).remove()})
			},50)
			
			
	var screenWidth=$(window).width();
	$('.snowbg').css({"width":screenWidth});
	$('.bodyCon07 .teacher').css({"width":screenWidth});
	$('.bodyCon07 .teacher .teacherPic').css({"width":screenWidth});
	$('.bodyCon07 .teacher .teacherPic .content').css({"width":screenWidth/5});
	$('.bodyCon07 .teacher .teacherPic .content .txt').css({"width":screenWidth/5});
	$(window).resize(function(){
		var screenWidth=$(window).width();
		/*console.log($('.bodyCon07 .teacher'));*/
		$('.bodyCon07 .teacher .teacherPic').css({"width":screenWidth});
		$('.bodyCon07 .teacher').css({"width":screenWidth});
		$('.bodyCon07 .teacher .teacherPic .content').css({"width":screenWidth/5});
		$('.bodyCon07 .teacher .teacherPic .content .txt').css({"width":screenWidth/5});
	})
	$(".bodyCon07 .content") .hover(function(){
			$(this) .children(".txt").stop() .animate({height:"260px"},200);
            $(this) .parent(".teacherPic") .css({"background":"url(images/shangcheng/"+$(this).attr("id")+".jpg)","-webkit-transition":"all 0.8s ease 0.2s","transition":"all 0.8s ease 0.2s"}).show();
			$(this) .find(".txt h3").stop() .animate({paddingTop:"55"},550);
			$(this) .find(".txt p").stop() .show();
	},function(){
			$(this) .children(".txt").stop() .animate({height:"100px"},200);
			$(this) .find(".txt h3").stop().animate({paddingTop:"0px"},550);
			$(this) .find(".txt p").stop().hide();
	})	
	$('.news_tabs').find('li').mouseover(function(){
		$(this).addClass("now").siblings().removeClass("now");
		var tabsWidth=$('.news_tabs').width()/4;
		var index_news_tabs=$(this).index();
		var leftCn=tabsWidth*index_news_tabs;
		$('.news_tabs_line').stop();	
		$('.news_tabs_line').animate({left:leftCn,opacity:1});
	/*	console.log(-index_news_tabs*tabsWidth);*/
		$('.news_list_wrap').find('ul').eq(index_news_tabs).show().siblings().hide();
	})
	
	$(window).scroll(function(){
		var scrolltop=$(document).scrollTop();
		console.log(scrolltop);
		if(scrolltop>400){
			$('#shoplist_wrap .first').animate({
				"top":80,
				"opacity":1
			},1000)
		}
		if(scrolltop>500){
			$('#shoplist_wrap .second').animate({
				"left":0,
				"opacity":1
			},1000)
		}
		if(scrolltop>1000){
			$('#shoplist_wrap .three').animate({
				"top":840,
				"right":0,
				"opacity":1
			},1000)
		}
		if(scrolltop>1300){
			$('#shoplist_wrap .four').animate({
				"opacity":1
			},1000)
		}
		
	})
})


