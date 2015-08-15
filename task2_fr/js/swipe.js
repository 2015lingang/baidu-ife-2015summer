cid = 0;
var total = 6;
var defaults = {
	'loop': false,
	'duration': 1000,
	'easing': 'ease-in-out',
	'keyboard' : true,//是否支持键盘
};
var options = {};
var opts = $.extend({}, defaults , options||{});
var container = $('#container');
var upObj = $("#up_icon");
var win = $(window);

documentWidth = $('#container').width()
documentHeight = $('#container').height();
var startx;
var starty;
var endx;
var endy;

// $(function(){
// 	initPage();
// 	if(opts.keyboard) {
// 		keyDown();
// 	}
// })

function moveSectionUp() {
	if(cid < (total-1)) {
		cid++;
	}else if(opts.loop) {
		cid = 0;
	}
	scrollPage();
}

function moveSectionDown() {
	if(cid > 0) {
		cid--;
	}else if(opts.loop) {
		cid = total - 1;
	}
	scrollPage();
}

function scrollPage() {
	// event.preventDefault();
	var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
		transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];
	var traslate = "0px, -"+(cid*documentHeight)+"px, 0px";
	container.css({
		"transition":"all "+opts.duration+"ms "+opts.easing,
		"transform":"translate3d("+traslate+")"
	});
	initPage();
}

//绑定键盘事件
function keyDown(){
	var keydownId;
	win.keydown(function(event){
		clearTimeout(keydownId);
		keydownId = setTimeout(function(){
			var keyCode = event.keyCode;
			if(keyCode == 38){
				moveSectionUp();
			}else if(keyCode == 40){
				moveSectionDown();
			}
		},150);
	});
}

// upObj[0].tap(function(event){
// 	moveSectionUp();
// });
// upObj[0].addEventListner('tap', function(event) {
// 	moveSectionUp();
// },false);

// container.swipeUp(function(event) {
// 	moveSectionUp();
// })
// container.swipeDown(function(event) {
// 	moveSectionDown();
// })


document.addEventListener('touchstart',function(event){
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;
});
document.addEventListener('touchmove',function(event){
	event.preventDefault();
});
document.addEventListener('touchend',function(event){
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;

    var deltax = endx - startx;
    var deltay = endy - starty;

    if( Math.abs( deltax ) < 0.3*documentWidth && Math.abs( deltay ) < 0.3*documentWidth )
        return;

        if( deltay > 0 ){
            //move down
            moveSectionDown();
        }
        else{
            //move up
            moveSectionUp();
        }
});

$("#up_icon")[0].addEventListener('touchstart',function(event) {
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;	
});
$("#up_icon")[0].addEventListener('touchend',function(event) {
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;

    var deltax = endx - startx;
    var deltay = endy - starty;

    if( Math.abs( deltax ) < 0.3*documentWidth && Math.abs( deltay ) < 0.3*documentWidth )
    	moveSectionUp();
});