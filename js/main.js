//jQuery.browser.mobile will be true if the browser is a mobile device
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(document).ready(function(){
//	Preload initiator --------------------------------------------------
	if ( ($(window).width()) > 900 ) {
		$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		}
	}else{
		$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').removeClass('hires');
		$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').removeClass('hires');
	};
	
/*
	//	Change content of next & prev projectbuttons
	if ( ($(window).width()) < 550 ) {
		$('a.next-project').html('&#8594');
		$('a.prev-project').html('&#8592'); 
	}else{
		$('a.next-project').html('volgende &#8594');
		$('a.prev-project').html('&#8592 vorige');
	}
*/
	
	// Initiate swiper-------------------------------------------------
	var mySwiper = $('.swiper-container').swiper({
		mode:'horizontal',
		loop: true,
		autoplay: 3000,
		speed: 2400,
		autoResize: true,
		//calculateHeight: true
	});
	
	var mySwiper2 = $('.swiper-container2').swiper({
		mode:'horizontal',
		loop: true,
		autoplay: 3000,
		speed: 2400,
		autoResize: true,
		//calculateHeight: true
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
	var home 		= 	$('#home-container').offset();
	var works 		= 	$('#works-container').offset();
	var profile 	= 	$('#profile-container').offset();
	var contact 	= 	$('#contact-container').offset();
	var distance	=	$('nav').offset().top;
	$window 		= 	$(window);
	
	$window.scroll(function() {
		// make nav sticky
		if ( $window.scrollTop() >= distance ) {
			// Your div has reached the top
			$("nav").removeClass("bottom");
			$('img.logo').css({display: 'none'});
		} else {
			$("nav").addClass("bottom");
		}
		
		//change class of nav img so it can come out of nav and get back in
		if ( $window.scrollTop() >= distance - 492 ) {
			// Your div has reached  top 130px
			$(".beeldmerk").removeClass("in-nav");
			$('img.logo').css({display: 'block'});
		} else {
			$(".beeldmerk").addClass("in-nav");
		}
		
		// add active class when scrolled to element
		var position = $(this).scrollTop();
		//If the current Y is bigger than the element. (you scrolled beyond the element)
		if(position >= home.top){
			$("nav a").removeClass('active');		
			$("#home").addClass('active');
		}
		if(position >= (works.top -72)){
			$("nav a").removeClass('active');		
			$("#works").addClass('active');
		}
		if(position >= (profile.top -72)){
			$("nav a").removeClass('active');		
			$("#profile").addClass('active');
		}
		if(position >= (contact.top -72)){
			$("nav a").removeClass('active');		
			$("#contact").addClass('active');
		}
	});
	
//  scroll to navigation-----------------------------------------
	$(document).on('click','#home, #bth', function() {
		$('html, body').animate({
		    scrollTop: $("#home-container").offset().top
		}, 600);
		return false
	});
	
	$("#divider1").click(function() {
		$('html, body').animate({
		    scrollTop: $("#container1").offset().top -50
		}, 600);
		return false
	});
	
	$(document).on('click','#profile, .back-to-profile, #divider2', function() {
		$('html, body').animate({
		    scrollTop: $("#profile-container").offset().top -58
		}, 600);
	    return false
	});
	
	$(document).on('click','#how-we-work', function() {
		$('html, body').animate({
		    scrollTop: $("#profile-container").offset().top -58
		}, 600);
	    return false
	});
	
//	//	Zorg dat de ruimte van de menu balk niet wordt meegenomen
	$(document).on('click','#work-load, .back-to-overzicht, .next-project', function() {
		$('html, body').animate({
		    scrollTop: $("#works-container").offset().top -58
		}, 600);		
		return false
	});
//	
	//	Zorg dat de ruimte van de menu balk weer wordt meegenomen
	$(document).on('click','#works, .back, #divider3', function() {
		$('html, body').animate({
		    scrollTop: $("#works-container").offset().top -58
		}, 600);
		return false
	});
		
//	scroll to contact
	$("#contact, #divider5").click(function() {
		$('html, body').animate({
		    scrollTop: $("#contact-container").offset().top -58
		}, 600);
		return false
	});
	
	//on load check for widths
	if ( ($(window).width()) > 900 ) {
		$('img, body').addClass('hires');
		
		if (jQuery.browser.mobile == false) {
			$('img').addClass('hires');
		};
	};
})

// Dynamic loading---------------------------------------------
// Load and unload works-overzicht.php
$(document).on('click','#work-load', function() {
    $('#project-overzicht-container').animate({ left : '-100%' }, 300).queue(function( nxt ) {
        $(this).css({ display: 'block', left: '100%'})
        $(this).load('inc/works-overzicht.php', function(){
            $('body').css('overflowY', 'hidden');
        });
        nxt();
        $('#project-overzicht-container').animate({ left : '0' }, 300);
    });
    
	if ( ($(window).width()) > 900 ) {
		$('img, body').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('img').addClass('hires');
		}
	}else{
		$('img, body').removeClass('hires');
	};
	return false;
});

// Load original content
$(document).on('click','.back', function(){    
    $('#project-overzicht-container').animate({ left : '100%' }, 300).queue(function( nxt ) {
        $('body').css('overflowY', 'scroll');
		$(this).css({ left : '-100%' });
        nxt();
	});
    
	if ( ($(window).width()) > 900 ) {
		$('img, body').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('img').addClass('hires');
		}
	}else{
		$('img, body').removeClass('hires');
	};
	return false;
})

// Load project information
$(document).on('click','#results div, .titel', function() {
	var navClass = $(this).attr("id");

    $('#project-overzicht-container').css({
        'overflowY': 'hidden'
    });
    $('#project-detail-container').fadeToggle();
    $('#project-detail-container').load('inc/works-content.php' + ' #' + navClass);
    if ( ($(window).width()) > 900 ) {
		$('img, body').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('img').addClass('hires');
		}
	}else{
		$('img, body').removeClass('hires');
	};
/*
    //	Change content of next & prev projectbuttons
    if ( ($(window).width()) < 550 ) {
        $('a.next-project').html('&#8594');
        $('a.prev-project').html('&#8592'); 
    }else{
        $('a.next-project').html('volgende &#8594');
        $('a.prev-project').html('&#8592 vorige');
    }
*/
//    $('.sidenav').load('inc/works-overzicht.php .clickable');
	return false;
});

//close project information
$(document).on('click','.close', function() {
    $('#project-overzicht-container').css({
        'overflowY': 'scroll'
    });
    $('#project-detail-container').fadeToggle();
	return false;
});

$(document).on('click','.next-project', function() {
	var navClass = $(this).attr("id");

    $('#project-detail-container').load('inc/works-content.php' + ' #' + navClass);
/*
    //	Change content of next & prev projectbuttons
    if ( ($(window).width()) < 550 ) {
        $('a.next-project').html('&#8594');
        $('a.prev-project').html('&#8592'); 
    }else{
        $('a.next-project').html('volgende &#8594');
        $('a.prev-project').html('&#8592 vorige');
    }
*/
//    $('.sidenav').load('inc/works-overzicht.php .clickable');
	return false;
});

// Load project information
$(document).on('click', '.prev-project', function() {

    $('#project-detail-container').detach('inc/works-content.php');

	var navClass = $(this).attr("id");
    $('#project-detail-container').load('inc/works-content.php' + ' #' + navClass);
/*
    //	Change content of next & prev projectbuttons
    if ( ($(window).width()) < 550 ) {
        $('a.next-project').html('&#8594');
        $('a.prev-project').html('&#8592'); 
    }else{
        $('a.next-project').html('volgende &#8594');
        $('a.prev-project').html('&#8592 vorige');
    }
*/
//    $('.sidenav').load('inc/works-overzicht.php .clickable');
	return false;
});


// Load how-we-work.php
$(document).on('click','#how-we-work', function() {
//	var navClass = $(this).attr("id");

    $('body').css({
        'overflowY': 'hidden'
    });
    $('#detail-container').fadeToggle();
    $('#detail-container').load('inc/how-we-work.php');
    if ( ($(window).width()) > 900 ) {
		$('img, body').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('img').addClass('hires');
		}
	}else{
		$('img, body').removeClass('hires');
	};
//    $('.sidenav').load('inc/works-overzicht.php .clickable');
	return false;
});

//close how we work
$(document).on('click','.close2', function() {
    $('body').css({
        'overflowY': 'scroll'
    });
    $('#detail-container').fadeToggle();
	return false;
});

//Filter functie-------------------------------------------
// Filter different projects

// Page 1
$(document).on('click','#all', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.clickable').fadeIn(500);
	
	$('#works-overzicht header .subnav a').removeClass('active');
	$(this).addClass('active');
	return false;
});

//Stores
$(document).on('click','#stores', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.stores').fadeIn( 500);
	$('.stores').css({display:'inline-block'});
	$('#works-overzicht header .subnav a').removeClass('active');
	$(this).addClass('active');
	return false;
});

//Comnmercials
$(document).on('click','#commercials', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.commercials').fadeIn( 500);
	$('.commercials').css({display:'inline-block'});
	$('#works-overzicht header .subnav a').removeClass('active');
	$(this).addClass('active');
	return false;
});

//Interiors
$(document).on('click','#interiors', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.interiors').fadeIn( 500);
	$('.interiors').css({display:'inline-block'});
	$('#works-overzicht header .subnav a').removeClass('active');
	$(this).addClass('active');
	return false;
});

//Horeca
$(document).on('click','#horeca', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.horeca').fadeIn( 500);
	$('.horeca').css({display:'inline-block'});
	$('#works-overzicht header .subnav a').removeClass('active');
	$(this).addClass('active');
	return false;
});

//Stands
$(document).on('click','#stands', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.stands').fadeIn( 500);
	$('.stands').css({display:'inline-block'});
	$('#works-overzicht header .subnav a').removeClass('active');
	$(this).addClass('active');
	return false;
});

//Designs
$(document).on('click','#designs', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.designs').fadeIn( 500);
	$('.designs').css({display:'inline-block'});
	$('#works-overzicht header .subnav a').removeClass('active');
	$(this).addClass('active');
	return false;
});

// Initiate preload function
if ( ($(window).width()) > 900 ) {
	$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
	if (jQuery.browser.mobile == false) {
		$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
	}
}else{
	$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').removeClass('hires');
};

//on window resize check for widths
$( window ).resize(function() {
	//check width for hires img (initiate preload)
	if ( ($(window).width()) > 900 ) {
		$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		}
	}else{
		$('a, img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').removeClass('hires');
	};
/*
//	Change content of next & prev projectbuttons
	if ( ($(window).width()) < 550 ) {
		$('a.next-project').html('&#8594');
		$('a.prev-project').html('&#8592'); 
	}else{
		$('a.next-project').html('volgende &#8594');
		$('a.prev-project').html('&#8592 vorige');
	}
*/
});










