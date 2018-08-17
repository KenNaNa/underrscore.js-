// 鼠标移动跟随
(function(window,document){
	window.onload = function(){
		setTimeout(function(){
			let heart3d = document.querySelector('.heart3d');
			heart3d.addEventListener('mousemove', function(e){
				this.style.transition = 'left 2s linear alternate'
				this.style.transition = 'top 2s linear alternate'
				this.style.left = `${e.offsetX}px`;
				this.style.top = `${e.offsetY}px`;
			}, true);
		},3000)
	}
})(window,document,undefined);