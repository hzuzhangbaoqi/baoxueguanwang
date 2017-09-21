$(document).ready(function(){
	var hreo_Name=["美","源氏","死神","黑影","士兵76","查莉娅","路霸","禅雅塔","天使","莱因哈特",
  					"美","源氏","死神","黑影","士兵76","查莉娅","路霸","禅雅塔","天使","莱因哈特","士兵76","查莉娅","路霸","禅雅塔"];
  	var hreo_Contain=[
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名天才工程师，可以在战场上打造武器系统。",
  		"一名强大而致命的弓箭大师。",
  		"一名能够操控天气，为了保护环境而选择战斗的科学家。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名天才工程师，可以在战场上打造武器系统。",
  		"一名强大而致命的弓箭大师。",
  		"一名能够操控天气，为了保护环境而选择战斗的科学家。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名天才工程师，可以在战场上打造武器系统。",
  		"一名强大而致命的弓箭大师。",
  		"一名能够操控天气，为了保护环境而选择战斗的科学家。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名天才工程师，可以在战场上打造武器系统。",
  		"一名强大而致命的弓箭大师。",
  		"一名能够操控天气，为了保护环境而选择战斗的科学家。",
  		"一名试图自己将守望先锋敌人绳之于法的独行侠。",
  		"一名天才工程师，可以在战场上打造武器系统。",
  		"一名强大而致命的弓箭大师。",
  		"一名能够操控天气，为了保护环境而选择战斗的科学家。",
  	]
  	
  	
	$(window).scroll(function(){
		var scrolltop=$(document).scrollTop();
		if(scrolltop>44){
			$('.navbars').stop(true,false);
			$('.Navbar').hide();
			$('.navbars').animate({top:"0",marginTop:"0",marginLeft:"0",marginRight:"0"});
//			$('.navbars .navbars_main').animate({marginTop:"0",marginLeft:"0",marginRight:"0"});
		}
		else{
			$('.navbars').stop(true,false);
			$('.Navbar').show();
			$('.navbars').animate({top:"44px",marginTop:"20",marginLeft:"20",marginRight:"20"});
//			$('.navbars .navbars_main').animate({marginTop:"20",marginLeft:"20",marginRight:"20"});
		}
	})
	
	
	$(".heroes_choose li").each(function(i,e){
    	$('.heroes_choose p').eq(i).css("backgroundImage","url(images/index/p"+(i+1)+".png)");
    	$('.hreo_Name').eq(i).html(hreo_Name[i]);
  	});

  	$(".heroes_choose li").mouseover(function(){
  		var index=$(this).index();
  		$('.heroes_show').css("backgroundImage","url(images/index/w"+(index+1)+".png)");
  		$('#heroes_title').html(hreo_Name[index]);
  		$("#spotlight-caption").html(hreo_Contain[index])
	});
})
