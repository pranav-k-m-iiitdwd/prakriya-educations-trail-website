$(document).ready(function() {
	var current_page ="" + $(".current-page").attr("id");
	var that_blue_colour= "#143975";

	{ /* Effects for different pages */
		if(current_page == "home") {
			var load_time=1;
			setTimeout(function(){ 
				$(".loading-block").css({"display": "none"}); 
				$(".main-block").css({"display": "block"}); 
			},load_time);
		}
		else {			
			$(".main-block").css({"display": "block"});
		}		
	}	

	{ /* Navigation bar hovering */
		$("#nav-"+current_page).css({ backgroundColor: that_blue_colour, color: "#FFFFFF" });

		$(".nav-bar-links").hover(function() {
			$(this).css({ backgroundColor: "#747474", color: "#FFFFFF" });
		}, function() {
			$(this).css({ backgroundColor: "#FFFFFF", color: "#2E2E2E" });
		});

		$("#nav-"+current_page).hover(function() {
			$(this).css({ backgroundColor: "#747474", color: "#FFFFFF" });
		}, function() {
			$(this).css({ backgroundColor: that_blue_colour, color: "#FFFFFF" });
		})
	}

	{ /* Mobile Navigation bar */
		$("#mob-nav-"+current_page).css({ backgroundColor: that_blue_colour, color: "#FFFFFF" });
		$('.mob-nav-bar-icon').css('cursor', 'pointer');
		$('.mob-nav-bar-cross').css('cursor', 'pointer');
		$(".mob-nav-bar-icon").click(function() {
			$(".mob-nav-bar-items").css({ display: "block" });
			$(this).css({ display: "none" });
			$(".mob-nav-bar-cross").css({ display: "block" });
		});
		$(".mob-nav-bar-cross").click(function() {
			$(".mob-nav-bar-items").css({ display: "none" });
			$(this).css({ display: "none" });
			$(".mob-nav-bar-icon").css({ display: "block" });
		});
	}

	{ /* Image slider */
		var i=0,n,a,t=8000;
		n="" + $(".img-slider-container").attr("id");
		n=Number(n);

		function slide_right() {
			i++;
			if(i>n) i=1;
			$(".img-slider-imgs").css({zIndex: "0"});
			$("#img-slider-img-"+i).css({zIndex: "1"});		
			clearTimeout(a);
			a=setTimeout(slide_right,t);
		}
		function slide_left() {
			i--;
			if(i<1) i=n;
			$(".img-slider-imgs").css({zIndex: "0"});
			$("#img-slider-img-"+i).css({zIndex: "1"});		
			clearTimeout(a);
			a=setTimeout(slide_right,t);
		}
		slide_right();

		{ /* Hover and click on arrow */
			$('.img-slider-arrows').css('cursor', 'pointer');
			$(".img-slider-arrows").hover(function() {
				$(this).css({ backgroundColor: "#5C5C5C"});
			},function() {
				$(this).css({ backgroundColor: "#000000" });
			});
			$("#img-slider-arrow-right").click(slide_right);
			$("#img-slider-arrow-left").click(slide_left);
		}

		{ /* Hover to make the arrows appear */
			$("#img-slider-cover").hover(function() {
				$(".img-slider-arrows").css({ opacity: "1" });
			},function() {
				$(".img-slider-arrows").css({ opacity: "0" });
			});
		}
	}

	{ /* Line bellow navigation bar */
		$(".nav-line").css({ backgroundColor: that_blue_colour });
	}

	{ /* Hover over the footer links */
		$(".footer-list-item").css("cursor","pointer")
		$(".footer-having-links").hover(function() {
			$(this).css({ opacity: "0.5" });
		}, function() {
			$(this).css({ opacity: "1" });
		});
	}

	{ /* Header login hover */
		$(".header-login").hover(function() {
			$(this).css({ opacity: "0.5" });
		}, function() {
			$(this).css({ opacity: "1" });
		});
	}

	{
		$(".blue-print-list-items").hover(function() {
			$(this).css({ opacity: "0.5" });
		}, function() {
			$(this).css({ opacity: "1" });
		});
	}
});