require(["/js/config.js"],function () {
	require(["jquery"],function($){
		//轮播
		/*let 
			list = $(".main_img span"),
			len = $(".main_img span").length,
			index = 0,
			nextindex = 1,
			circles = $(".num span"),
			timer = null,
			autoplay = function () {
				this.timer = setInterval(()=>{
					this.move();
				},2000);
			},
			move = function(){
				// 当前显示的图片淡出
				var element = this.list[this.index];
				$(element).animate({opacity:0},300,()=>{
					element.style.display = "none";
				});

				// 即将显示的图片淡入
				this.list[this.nextindex].style.display = "block";
				this.list[this.nextindex].style.opacity = "0";
				$(this.list[this.nextindex]).animate({opacity:1},300);

				// 修改小圆点样式
				this.circles[this.index].className = "";
				this.circles[this.nextindex].className = "ad01";

				// 修改待操作图片索引
				this.index = this.nextindex;
				this.nextindex++;
				if (this.nextindex >= this.len) 
					this.nextindex = 0;
			};
			$("#btn_prev").click(function(){
				nextindex = index - 1;
				move();
			});
			$("#btn_next").click(function(){
				nextindex = index + 1;
				move();
			});
		
		return autoplay();*/
	});
});