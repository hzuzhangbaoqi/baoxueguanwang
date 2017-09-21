$(document).ready(function(){
	$(window).scroll(function(){
		var scrolltop=$(document).scrollTop();
		console.log(scrolltop);
		if(scrolltop>44){
			$('.navbars .navbars_main').stop();
			$('.Navbar').hide();
			$('.navbars .navbars_main').animate({top:"0",marginTop:"0",marginLeft:"0",marginRight:"0"});
		}else{
			$('.navbars .navbars_main').stop();
			$('.Navbar').show();
			$('.navbars .navbars_main').animate({top:"44",marginTop:"20",marginLeft:"20",marginRight:"20"});
		}
	})
	
	
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
	
	
	var screenWidth=$(window).width();
		$('.danmuShow').css({"width":screenWidth});
	/*$(window).resize(function(){
		$('.danmuShow').css({"width":screenWidth});
	}*/
	
})




		/*var timer=null;  
        var current=[];//存储当前输入框的内容  
        var newarr=[];//存储每个弹幕距左边框的距离  
        var flag=0;//标志量  
        var num=new Array();//数组，用来存储划分每个块的序号  
        //var t=12;  
        var words = ["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"];  
        function $(id){  
            return document.getElementById(id);  
        }  
        for(var i=0;i<$("barrage").offsetHeight/20 - 1;i++){  
            num.splice(i,0,i);//将整个显示框划分成多个块，并对每个块进行标号  
            //console.log(num)  
        }  
  
        window.onload = function(){//加载页面发生的事件  
  
            clearInterval(timer);//清除定时器  
            for(var i = 0;i<10;i++){  
                setTimeout(function(){  
                    var word=words[random(0,words.length-1)];//随机产生一个弹幕的内容  
                    create(word);//创建一个弹幕  
                },100*random(10,100))//给弹幕随机加一个延迟  
                  
            }  
            timer=setInterval(move,20);//开启定时器  
        }  
  
        function create(w){//创建一个弹幕  
                var node=document.createElement("div");//创建一个div元素，用来存储弹幕的信息  
                //console.log(words.length)  
                node.innerHTML=w;  
                //console.log($("barrage").offsetHeight)  
                var t= random(0,num.length-1);  
                //console.log(num)  
                node.style.top=num[t]*20+"px";//从划分的块中随机选中一块。  
                Delete(num[t]);//删除已被选中的块  
                //console.log(t)  
                //console.log(node.style.top);  
                node.style.left="800px";  
                node.style.fontSize=fontSizeRandom()+"px";
                node.style.color="#"+randomColor();//随机颜色  
                $("barrage").appendChild(node);//插入子节点  
                flag++;//创建了一个新弹幕时，更新为0  
                  
                //console.log(node.offsetLeft)  
        }  
  
        function move(){  
            var arr=$("barrage").getElementsByTagName("div");//获取所有的弹幕  
            for(var i=0;i<arr.length;i++){  
                newarr.push(arr[i].offsetLeft);//将每个弹幕距左边边框的距离分别存储在newarr数组中  
                arr[i].style.left=newarr[i]+"px";//更新距离  
                newarr[i] = newarr[i] - 2;//每次减少2px  
                if(newarr[i]<0){  
                    //console.log(arr[i].innerHTML)  
                    if(currentTest(arr[i].innerHTML) && flag != 0){//当是从输入框发送的弹幕时而且是第一次时,将内容添加到预备的词库中，并删除这个div元素。这么做是为了将弹幕数量维持在一定数量，防止在输入框发送大量弹幕，导致出现错误。  
                        //console.log(current)  
                        words.push(arr[i].innerHTML);  
                        $("barrage").removeChild(arr[i]);  
                        newarr.splice(i,1);//在newarr中删除这个div  
                        flag--;  
                    }else{//当弹幕到达最左边时，弹幕内容再次随机，同时，将这个块加入到预选块中，并在预选块中随机再选一个，颜色也再次随机，这样就保持块的数量不变。  
                        newarr[i]=800;  
                        //console.log(parseInt(arr[i].style.top))  
                        //console.log(arr[i].style.top/20)  
                        arr[i].innerHTML=words[random(0,words.length-1)];  
                        num.splice(num.length,0,parseInt(arr[i].style.top)/20);  
                          
                          
                        var t= random(0,num.length);  
                        arr[i].style.top=num[t]*20+"px";  
                        Delete(num[t]);  
                        //console.log(num)  
                        //console.log(node.style.top);  
                        arr[i].style.left="800px";  
                        arr[i].style.color="#"+randomColor();  
                    }  
                }  
            }  
        }  
  
        $("submit").onclick=function(){//输入款发送弹幕  
            create($("text").value);  
            current[current.length]=$("text").value;  
            //console.log(current)  
            $("text").value="";  
        }  
        //console.log(num)  
        function Delete(m){//从预选块中删除已被选择的块  
            for(var i = 0;i < num.length;i++){  
                if(num[i] == m){  
                    //console.log(m)  
                    num.splice(i,1);  
                }  
            }  
        }  
  
        function currentTest(m){  
            var fl=false;  
            for(var i = 0;i < current.length;i++){  
                if(current[i] == m){  
                    //console.log(m)  
                    current.splice(i,1);  
                    fl=true;  
                }  
            }  
            return fl;  
        }  
  
        function randomColor(){//随机颜色  
            var color=Math.ceil(Math.random()*16777215).toString(16);  
  
            while(color.length < 6){  
                color = "0" + color;  
            }  
            return color;  
        }  
  		function fontSizeRandom(){
  			var size=Math.ceil(Math.random()*22+12);
  			return size;
  		}
        function random(m,n){//随机在m、n之间的整数  
            return Math.round(Math.random()*(n - m)) + m;  
        }  */