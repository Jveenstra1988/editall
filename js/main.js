/**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/)
 *
 * jQuery.browser.mobile will be true if the browser is a mobile device
 *
 **/
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

$(document).ready(function(){
	
	if ( ($(window).width()) > 900 ) {
		$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		}
	}else{
		$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').removeClass('hires');

	};
	
	// Initiate swiper-------------------------------------------------
	var mySwiper = $('.swiper-container').swiper({
		//Your options here:
		mode:'horizontal',
		loop: true,
		autoplay: 3000,
		speed: 2400,
		autoResize: true,
		//calculateHeight: true
		//etc..
	});
	
	var mySwiper2 = $('.swiper-container2').swiper({
		//Your options here:
		mode:'horizontal',
		loop: true,
		autoplay: 3000,
		speed: 2400,
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
			$("nav").addClass("antra");			
		} else {
			$("nav").addClass("bottom");
			$("nav").removeClass("antra");	
		}
		
		 //change class of nav img so it can come out of nav and get back in
		if ( $window.scrollTop() >= distance - 500 ) {
			// Your div has reached  top 130px
			$(".beeldmerk").removeClass("in-nav");
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
	//$("#home, #bth").click(function() {
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
		    scrollTop: $("#profile-container").offset().top
		}, 600);
	    return false
	});
	
	//	Zorg dat de ruimte van de menu balk niet wordt meegenomen
	$(document).on('click','#work-load, .back-to-overzicht, .next-project', function() {
		$('html, body').animate({
		    scrollTop: $("#works-container").offset().top
		}, 600);		
		return false
	});
	
	//	Zorg dat de ruimte van de menu balk weer wordt meegenomen
	$(document).on('click','#works, .back, #divider3', function() {
		$('html, body').animate({
		    scrollTop: $("#works-container").offset().top -58
		}, 600);
		return false
	});
	
//	disable scroll
	$(document).on('click', '#work-load', function() {
		$('nav').slideUp();
		$('body').addClass('no-overflow');
		$('body').bind('touchmove', function(e){e.preventDefault()});
		//$('body').unbind('touchmove');
		$('body').bind('mousewheel', function(e) {
				if (e.target.id == 'el') return;
				e.preventDefault();
		});
		$( window ).resize(function() {
			$('html, body').animate({
				scrollTop: $("#works-container").offset().top
			}, 0);
		});
		return false
	});
	
	$(document).on('click', '#how-we-work', function() {
		$('nav').slideUp();
		$('body').addClass('no-overflow');
		$('body').bind('touchmove', function(e){e.preventDefault()});
		//$('body').unbind('touchmove');
		$('body').bind('mousewheel', function(e) {
				if (e.target.id == 'el') return;
				e.preventDefault();
		});
		$( window ).resize(function() {
			$('html, body').animate({
				scrollTop: $("#profile-container").offset().top
			}, 0);
		});
		return false
	});
	
//	enable scroll
	$(document).on('click', '.back-to-profile', function() {
		$('nav').slideDown();
		$('body').removeClass('no-overflow');
		$('body').unbind('touchmove');
		$('body').unbind('mousewheel');
		$( window ).resize(function() {
			$('html, body').animate({
				scrollTop: $("#profile-container").offset().top
			}, 0);
		});
		return false
	});
	
	$(document).on('click', '.back', function() {
		$('nav').slideDown();
		$('body').removeClass('no-overflow');
		$('body').unbind('touchmove');
		$('body').unbind('mousewheel');
		$( window ).resize(function() {
			$('html, body').animate({
				scrollTop: $("#works-container").offset().top
			}, 600);
		});
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

//	MAPS-------------------------------------------------------
function initialize() {
	var styles = [
		{
		  "featureType": "poi",
		  "stylers": [
			{ "visibility": "off" }
		  ]
		},{
		  "featureType": "road",
		  "stylers": [
			{ "visibility": "simplified" },
			{ "color": "#F2F4F5" }
		  ]
		},{
		  "featureType": "transit",
		  "stylers": [
			{ "color": "#808080" },
			{ "visibility": "off" }
		  ]
		},{
		  "featureType": "water",
		  "stylers": [
			{ "visibility": "simplified" },
			{ "color": "#B2CFDC" }
		  ]
		},{
		  "featureType": "landscape.man_made",
		  "stylers": [
			{ "visibility": "simplified" },
			{ "color": "#E5E9EC" }
		  ]
		},{
		  "featureType": "landscape.natural",
		  "stylers": [
			{ "color": "#D9E0E3" },
			{ "visibility": "simplified" }
		  ]
		},{
		  "featureType": "administrative",
		  "stylers": [
			{ "visibility": "off" }
		  ]
		}
	]
	
	
	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var styledMap = new google.maps.StyledMapType(styles, {
		name: "Styled Map"
	});
  
	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	var myLatLng = new google.maps.LatLng(52.3340203,4.9650486);
	var mapOptions = {
		zoom: 15,
		scrollwheel: false,
		center: myLatLng,
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		}
	};
	
	// bind map to div with id map-canvas
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);
	
	// Create marker
	var image = 'img/icon-pin.png';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Edit-All',
		icon: image,
		animation: google.maps.Animation.DROP
	});
	
	// marker click events
	google.maps.event.addListener(marker, 'click',  function() {
		//infowindow.open(map,marker);
		toggleBounce();
	});
	
	// Create content for info window
	var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div>'+
      '<p>'+
      '<a>Venserweg 7<br> 1112 AR Diemen <br> Nederland</a> '+
      '</p>'+
	  '<a href="https://www.google.nl/maps/dir//Venserweg+7,+1112+AR+Diemen/@52.3340203,4.9650486,17z/data=!4m13!1m4!3m3!1s0x47c60bf8f0b87e2d:0xe8daae88b74de79f!2sVenserweg+7!3b1!4m7!1m0!1m5!1m1!1s0x47c60bf8f0b87e2d:0xe8daae88b74de79f!2m2!1d4.9650552!2d52.3340164" target=_blank" class="btn-rood">Route</a>'+
      '</div>'+
      '</div>';
	
	// fill info window with content
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 600,
	});
	infowindow.open(map,marker);
	
	// Create marker animation
	function toggleBounce() {
		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
	marker.setAnimation(google.maps.Animation.BOUNCE);
  
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initialize);


// Dynamic loading---------------------------------------------
// Load and unload works-overzicht.php
$(document).on('click','#work-load', function() {
	$('#dynamic-container').animate({ left : '-100%' }, 300).queue(function( nxt ) {
		$(this).css({ left: '100%'})
		$(this).load('inc/works-overzicht.php');
		nxt();
		$('#dynamic-container').animate({ left : '0' }, 300);
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

//	Load next or previous page
//$(document).on('click','#page-one', function() {
//	$('#dynamic-container').load('inc/works-overzicht.php');
//	return false;
//});
//
//$(document).on('click','#page-two', function() {
//	$('#dynamic-container').load('inc/works-overzicht-2.php');
//	return false;
//});

// Load original content
$(document).on('click','.back', function(){
	// change background color of main container (in dept effect)
    $('#dynamic-container').animate({ left : '100%' }, 300).queue(function( nxt ) {
		$(this).load('inc/works-content.php .works');
		nxt();
		
		$('#dynamic-container').css({ left : '-100%' });
		$('#dynamic-container').animate({ left : '0' }, 300);
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
$(document).on('click','#results div, .overlay-txt, .next-project', function() {
	var navClass = $(this).attr("id");
	$('#dynamic-container').animate({ left : '-100%' }, 300).queue(function( nxt ) {
		$(this).css({ left : '100%' });
		$(this).load('inc/works-content.php' + ' #' + navClass, function(){
			if ( ($(window).width()) > 900 ) {
				$('img, body').addClass('hires');
				if (jQuery.browser.mobile == false) {
					$('img').addClass('hires');
				}
			}else{
				$('img, body').removeClass('hires');
			};
			$('.sidenav').load('inc/works-overzicht.php .clickable');
		});
		nxt();
		$('#dynamic-container').animate({ left : '0' }, 300);
	});
	$('#works-container').css({ background: '#c7c7c7'});
	return false;
});

// Load project information
$(document).on('click', '.prev-project', function() {
	var navClass = $(this).attr("id");
	$('#dynamic-container').animate({ left : '100%' }, 300).queue(function( nxt ) {
		$(this).css({ left : '-100%' });
		$(this).load('inc/works-content.php' + ' #' + navClass, function(){
			if ( ($(window).width()) > 900 ) {
				$('img, body').addClass('hires');
				if (jQuery.browser.mobile == false) {
					$('img').addClass('hires');
				}
			}else{
				$('img, body').removeClass('hires');
			};
			// Dit staat in de koelkast
			$('.sidenav').load('inc/works-overzicht.php .clickable');
		});
		nxt();
		$('#dynamic-container').animate({ left : '0' }, 300);
	});
	$('#works-container').css({ background: '#c7c7c7'});
	return false;
});

$(document).on('click','.back-to-overzicht', function(){
    $('#dynamic-container').animate({ left : '100%' }, 300).queue(function( nxt ) {
		$(this).load('inc/works-overzicht.php');
		nxt();
		$('#dynamic-container').css({ left : '-100%' });
		$('#dynamic-container').animate({ left : '0' }, 300);
	});
	$('#works-container').css({ 'background': 'url(img/works-1.jpg) center center no-repeat',
							  'background-size': 'cover'});
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

// Load and unload how-we-work.php
$(document).on('click','#how-we-work', function() {
	$('#dynamic-container-profile').animate({ left : '-100%' }, 300).queue(function( nxt ) {
		$(this).css({ left: '100%'})
		$(this).load('inc/how-we-work.php');
		nxt();
		$('#dynamic-container-profile').animate({ left : '0' }, 300);
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

$(document).on('click','.back-to-profile', function(){
    $('#dynamic-container-profile').animate({ left : '100%' }, 300).queue(function( nxt ) {
		$(this).load('inc/works-content.php .profile');
		nxt();
		$('#dynamic-container-profile').css({ left : '-100%' });
		$('#dynamic-container-profile').animate({ left : '0' }, 300);
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

//Filter functie-------------------------------------------
// Filter different projects
$(document).on('click','#all', function() {
	$('#results .clickable').fadeTo( "slow" , 1);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#stores', function() {
// 	$('#results .clickable').fadeTo( 200 , 0.1);
//	$('#results .clickable').filter('.stores').fadeTo( 200 , 1);
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.stores').fadeIn( 500);

	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#commercials', function() {
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.commercials').fadeIn( 500);

	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#interiors', function() {
	//$('#results .clickable').fadeTo( 200 , 0.1);
	//$('#results .clickable').filter('.interiors').fadeTo( 200 , 1);
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.interiors').fadeIn( 500);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#horeca', function() {
	//$('#results .clickable').fadeTo( 200 , 0.1);
	//$('#results .clickable').filter('.horeca').fadeTo( 200 , 1);
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.horeca').fadeIn( 500);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#stands', function() {
	//$('#results .clickable').fadeTo( 200 , 0.1);
	//$('#results .clickable').filter('.stands').fadeTo( 200 , 1);
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.stands').fadeIn( 500);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#designs', function() {
	//$('#results .clickable').fadeTo( 200 , 0.1);
	//$('#results .clickable').filter('.designs').fadeTo( 200 , 1);
	$('#results .clickable').fadeOut(0);
	$('#results .clickable').filter('.designs').fadeIn( 500);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

if ( ($(window).width()) > 900 ) {
	$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
	if (jQuery.browser.mobile == false) {
		$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
	}
}else{
	$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').removeClass('hires');
};

//on window resize check for widths
$( window ).resize(function() {
	//check width for hires img
	if ( ($(window).width()) > 900 ) {
		$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		if (jQuery.browser.mobile == false) {
			$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').addClass('hires');
		}
	}else{
		$('img, body, #een, #twee, #drie, #vier, #vijf, #zes, #works-container, #profile-container').removeClass('hires');
	};
});














