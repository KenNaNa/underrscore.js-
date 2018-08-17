// 获取总的相对定位值
function getOffsetTop(el){
 return el.offsetParent
  ? el.offsetTop + getOffsetTop(el.offsetParent)
  : el.offsetTop
}
function getOffsetLeft(el){
 return el.offsetParent
  ? el.offsetLeft + getOffsetLeft(el.offsetParent)
  : el.offsetLeft
}

(function(window,document){
	window.onload = function(){
		setTimeout(function(){
					// 兼容性
			var requestAnimationFrame = window.requestAnimationFrame ||
										window.webkitRequestAnimationFrame ||
										window.mozRequestAnimationFrame ||
										window.oRequestAnimationFrame ||
										window.msRequestAnimationFrame ||
										function(cb){window.setTimeout(callback,1000/60);};
			
			let oDiv1 = document.querySelector('.div1');
			var wW = window.innerWidth;
			var wH = window.innerHeight;
			// console.log(getOffsetLeft(oDiv1))
			// var obj = oDiv1.getBoundingClientRect();
			// var o = getComputedStyle(oDiv1);
			// var {left,top} = o;
			// console.log(o)
			// console.log(left,top);
			// var b = oDiv1.getClientRects();
			// console.log(b)
			// x轴速度
			// Y轴速度
			// 超过x轴反向
			// 超过y轴反向
			var xa = 2;
			var ya = 2;
			var left = getOffsetLeft(oDiv1);
			var top = getOffsetTop(oDiv1);
			var width = oDiv1.offsetWidth;
			var height = oDiv1.offsetHeight;
			console.log(width);
			console.log(height);
			function draw(){
				left += xa;
				top += ya;
				if(left>wW-width/2 || left<=0){
					xa = - xa;
				}

				if(top>wH-height/2 || top<=0){
					ya = -ya;
				}

				oDiv1.style.left = `${left}px`;
				oDiv1.style.top = `${top}px`;
				requestAnimationFrame(draw);
			}

			draw();
		},6000)
	}
})(window,document,undefined);