var visualWidth = $('#snowflake').width();
var visualHeight = $('#snowflake').height();
var snowt;

$(function(){
	setCenter($('#up_icon'));
	$('#up_icon').addClass('up');	
	initPage();
	if(opts.keyboard) {
		keyDown();
	}
})
function initPage() {
	switch (cid) {
		case 0:
			section1Anim();
			break;
		case 1:
			clearInterval(snowt);
			section2Anim();
			break;		
		case 2:
			section3Anim();
			break;		
		case 3:
			section4Anim();
			break;		
		case 4:
			section5Anim();
			break;		
		case 5:
			section6Anim();
			break;		
	}	
}

function section1Anim() {
	setCenter($('.cover_title'));
	bounceIn($('.logo'));
	bounceInUp($('.cover_title'));
	snowflake();
}
function section2Anim() {
	setCenter($('.section2_content'));
	slideInDown($('.section2_name'));	
	slideInLeft($('.bai1'));
	slideInRight($('.bai2'));
	bounceIn($('.section2_content'));
}
function section3Anim() {
	setCenter($('.section3_content'));
	bounceIn($('.section3_name'));
	slideInDown($('.dongfang1'));
	bounceInUp($('.dongfang2'));
	bounceIn($('.section3_content'));
}
function section4Anim() {
	setCenter($('.section4_content'));
	slideInDown($('.section4_name'));
	slideInLeft($('.sha1'));
	slideInRight($('.sha2'));
	bounceIn($('.section4_content'));	
}
function section5Anim() {
	slideInLeft($('.zi'));
	slideInLeft($('.shan'));
	bounceInLeft($('.section5_content_tang'));
	bounceInLeft($('.section5_content_ni'));
	slideInRight($('.tang'));
	slideInRight($('.ni'));	
	bounceInRight($('.section5_content_zi'));
	bounceInRight($('.section5_content_shan'));
}
function section6Anim() {
	setCenter($('.section6_content1'));
	setCenter($('.section6_content2'));
	setCenter($('.section6_content3'));
	bounceInDown($('.section6_content1'));
	bounceIn($('.section6_content2'));
	bounceInUp($('.section6_content3'));
}

function slideInLeft(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated slideInLeft');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated slideInLeft');
}
function slideInRight(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated slideInRight');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated slideInRight');
}
function slideInDown(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated slideInDown');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated slideInDown');
}
function slideInUp(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated slideInUp');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated slideInUp');
}
function bounceIn(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated bounceIn');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated bounceIn');
}
function bounceInUp(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated bounceInUp');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated bounceInUp');
}
function bounceInDown(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated bounceInDown');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated bounceInDown');
}
function bounceInLeft(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated bounceInLeft');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated bounceInLeft');
}
function bounceInRight(element) {
	element[0].addEventListener('webkitAnimationEnd',function() {
				element.removeClass('animated bounceInRight');
				element[0].removeEventListener('webkitAnimationEnd')
			},false);
	element.addClass('animated bounceInRight');
}


function setCenter(element) {
	element.css({
		left:  $('#container').width()/2 - element.width()/2
	})
}

var snowflakeURl = [
        './img/flower1.png',
        './img/flower2.png',
        './img/flower3.png',
        './img/flower4.png',
        './img/flower5.png'
    ]
///////
//飘雪花 //
///////
function snowflake() {
    // 雪花容器
    var $flakeContainer = $('#snowflake');

    // 随机五张图
    function getImagesName() {
        return snowflakeURl[[Math.floor(Math.random() * 5)]];
    }
    // 创建一个雪花元素
    function createSnowBox() {
        var url = getImagesName();
        return $('<div class="snowbox" />').css({
            'width': 41,
            'height': 41,
            'position': 'absolute',
            'backgroundSize': 'cover',
            'zIndex': 100000,
            // 'top': '-41px',
            'backgroundImage': 'url(' + url + ')'
        }).addClass('snowRoll');
    }
    // 开始飘花
    snowt = setInterval(function() {
        // 运动的轨迹
        var startPositionLeft = Math.random() * visualWidth - 100,
        // var	startPositionLeft = 100,
        	startPositionTop = -41,
            startOpacity    = 1,
            endPositionTop  = visualHeight - 40,
            endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
            duration        = visualHeight * 10 + Math.random() * 5000;

        // 随机透明度，不小于0.5
        var randomStart = Math.random();
        randomStart = randomStart < 0.5 ? startOpacity : randomStart;

        // 创建一个雪花
        var $flake = createSnowBox();

        // 设计起点位置
        $flake.css({
        	top: startPositionTop,
            left: startPositionLeft,
            opacity : randomStart
        });

        // 加入到容器
        $flakeContainer.append($flake);

  //       var transform = ["-webkit-transform","-ms-transform","-moz-transform","transform"],
		// transition = ["-webkit-transition","-ms-transition","-moz-transition","transition"];
  //       var traslate = (endPositionLeft - startPositionLeft) + 'px,' + (endPositionTop - startPositionTop) +'px, 0px';
		// $flake.css({
		// 	"transition":"all "+duration+"ms ease-out",
		// 	"transform":"translate3d("+traslate+")"
		// });
		// $flake[0].addEventListener('webkitTransitionEnd', $flakeContainer.removeChild(this), false);

		// $flake.css({
		// 	transition: {
		// 		top: endPositionTop,
  //           	left: endPositionLeft,
  //           	opacity: 0.7
		// 	} + duration+' ease-out'
		// })
        // 开始执行动画
        $flake.transition({
            top: endPositionTop,
            left: endPositionLeft,
            opacity: 0.7
        }, duration, 'ease-out', function() {
            $(this).remove() //结束后删除
        });
        
    }, 2000);

}