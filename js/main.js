$(document).ready(function(){
	
	// Initiate swiper-------------------------------------------------
	var mySwiper = $('.swiper-container').swiper({
		//Your options here:
		mode:'horizontal',
		loop: true,
		autoplay: 2000,
		speed: 1000,
		autoResize: true,
		//calculateHeight: true
		//etc..
	});
	$('.arrow-left').on('click', function(e){
		e.preventDefault()
		mySwiper.swipePrev()
	})
	$('.arrow-right').on('click', function(e){
		e.preventDefault()
		mySwiper.swipeNext()
	})
	
	//	Change header after scrolling-----------------------------------------
	var home 	= 	$('#home-container').offset();
	var profile 	= 	$('#profile-container').offset();
	var works 	= 	$('#works-container').offset();
	var contact 	= 	$('#contact-container').offset();
	var distance	=	$('nav').offset().top;
	$window 		= 	$(window);
	
	$window.scroll(function() {
		if ( $window.scrollTop() >= distance ) {
			// Your div has reached the top
			$("nav").removeClass("bottom");
		} else {
			$("nav").addClass("bottom");
		}
		
		if ( $window.scrollTop() >= distance - 170 ) {
			// Your div has reached  top 130px
			$("nav img").removeClass("header-icon");
		} else {
			$("nav img").addClass("header-icon");
		}
		
		var position = $(this).scrollTop();
		//If the current Y is bigger than the element. (you scrolled beyond the element)
		if(position >= home.top){
			$("nav a").removeClass('active');		
			$("#home").addClass('active');
		}
		if(position >= (profile.top -86)){
			$("nav a").removeClass('active');		
			$("#profile").addClass('active');
		}
		if(position >= (works.top -86)){
			$("nav a").removeClass('active');		
			$("#works").addClass('active');
		}
		if(position >= (contact.top -86)){
			$("nav a").removeClass('active');		
			$("#contact").addClass('active');
		}
	});
	
//  scroll to navigation-----------------------------------------
	$("#home").click(function() {
		$('html, body').animate({
		    scrollTop: $("#home-container").offset().top
		}, 600);
		return false
	});
	
	$("#profile").click(function() {
		$('html, body').animate({
		    scrollTop: $("#profile-container").offset().top -86
		}, 600);
	    return false
	});
	
	$("#works").click(function() {
		$('html, body').animate({
		    scrollTop: $("#works-container").offset().top -86
		}, 600);
		return false
	});
	
	$("#contact").click(function() {
		$('html, body').animate({
		    scrollTop: $("#contact-container").offset().top -86
		}, 600);
		return false
	});
})
