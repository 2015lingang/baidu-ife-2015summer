1 使用zepto库，利用了其中的swipeUp，swipeDown和tap。

2 动画使用animate.css

3 落花存在bug。
a 未旋转（感觉在js中控制css的transition，animation，transform等方法有问题没有弄明白）！！！！！
怎样在js中写transition的控制？？？带top，left等
b 落花较久后再看页面会有一排落花同时下落 
c 动画结束应该删除这个元素，但这点暂未调试成功

4 如果使用swipe.js和ad.js(即自己写的js按照功能分成两个文件书写）在有的手机浏览器中会出现不加载ad.js里控制的效果，原因不明。（chrome浏览器都正常，qq浏览器偶尔不正常，小米自带浏览器从未正常）手机浏览器加载js有什么讲究吗？？？

5 mobile_advertisement使用的是jquery和一个transit.js库。应用transitjs中的.transition控制落花的动画效果无bug，但是使用这两个库会与zepto冲突，tap等方法会报错。不知道怎样去了解库与库之间冲突的来源？？？？

6 有的手机浏览器（锤子自带浏览器）在上滑下滑操作中浏览器窗口变化从而页面排版变乱。但是代码中已经阻止touchmove的默认行为，而且大多数浏览器不存在这个bug，不知如何解决？？？

7 涉及动作的调试（比如touchstart，touchend）怎样一步步调试。应该把断点设置在touchend中，这样触发了整个touch事件才会进入调试。