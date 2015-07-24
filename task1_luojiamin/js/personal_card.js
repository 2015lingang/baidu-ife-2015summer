/*var timoutid;
//eq(index)代表选中元素中第index+1个元素
$(document).ready(function(){
    $("#tabfirst li").each(function(index){//符合#tabfirst li的所有结果 根据index开始从0循环
        var liNode = $(this);
        $(this).mouseover(function(){//如果鼠标放上去执行里面的函数 鼠标放上去之后就确定了是哪个index上放了鼠标
            timoutid=setTimeout(function(){
                $("div.content").removeClass("content");//把拥有content样式的div去除class：content
                $("#tabfirst li.tabin").removeClass("tabin");//把li中拥有样式tabin的去除class：tabin
                $("#con3 div").eq(index).addClass("content");//将鼠标放置的那个div添加样式content
                liNode.addClass("tabin");//将鼠标所在的li添加样式tabin
            },300);
        }).mouseout(function(){
            clearTimeout(timoutid);//如果鼠标移开，则清除事件
        })
    })

})*/


//eq(index)代表选中元素中第index+1个元素
$(document).ready(function(){
    $("#tabfirst li").each(function(index){//符合#tabfirst li的所有结果 根据index开始从0循环
        var liNode = $(this);
        $(this).click(function(){//如果鼠标放上去执行里面的函数 鼠标放上去之后就确定了是哪个index上放了鼠标
            $("div.content").removeClass("content");//把拥有content样式的div去除class：content
            $("#tabfirst li.tabin").removeClass("tabin");//把li中拥有样式tabin的去除class：tabin
            $("#con3 div").eq(index).addClass("content");//将鼠标放置的那个div添加样式content
            liNode.addClass("tabin");//将鼠标所在的li添加样式tabin
        });
    })
})


//eq(index)代表选中元素中第index+1个元素
/*$(document).ready(function(){
    $("#tabfirst li").each(function(index){//符合#tabfirst li的所有结果 根据index开始从0循环
        var liNode = $(this);
        $(this).bind("tap",function(){//如果鼠标放上去执行里面的函数 鼠标放上去之后就确定了是哪个index上放了鼠标
            $("#con3 div.content").removeClass("content");//把拥有content样式的div去除class：content
            $("#tabfirst li.tabin").removeClass("tabin");//把li中拥有样式tabin的去除class：tabin
            $("#con3 div").eq(index).addClass("content");//将鼠标放置的那个div添加样式content
            liNode.addClass("tabin");//将鼠标所在的li添加样式tabin
            console.log("hello");
        });
    })
})*/





