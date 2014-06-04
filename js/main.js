$(document).ready(function(){
	
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
	return false;
});

//	Load next or previous page
$(document).on('click','#page-one', function() {
	$('#dynamic-container').load('inc/works-overzicht.php');
	return false;
});

$(document).on('click','#page-two', function() {
	$('#dynamic-container').load('inc/works-overzicht-2.php');
	return false;
});

// Load original content
$(document).on('click','.back', function(){
	// change background color of main container (in dept effect)
    $('#dynamic-container').animate({ left : '100%' }, 300).queue(function( nxt ) {
		$(this).load('inc/works-content.php .works');
		nxt();
		
		$('#dynamic-container').css({ left : '-100%' });
		$('#dynamic-container').animate({ left : '0' }, 300);
	});
	return false;
})

// Load project information
$(document).on('click','#results div, .overlay-txt, .next-project', function() {
	var navClass = $(this).attr("id");
	$('#dynamic-container').animate({ left : '-100%' }, 300).queue(function( nxt ) {
		$(this).css({ left : '100%' });
		$(this).load('inc/works-content.php' + ' #' + navClass, function(){
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
	$('#works-container').css({ 'background': 'url(../img/works-1.jpg) center center no-repeat'});
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
	return false;
});

$(document).on('click','.back-to-profile', function(){
    $('#dynamic-container-profile').animate({ left : '100%' }, 300).queue(function( nxt ) {
		$(this).load('inc/works-content.php .profile');
		nxt();
		$('#dynamic-container-profile').css({ left : '-100%' });
		$('#dynamic-container-profile').animate({ left : '0' }, 300);
	});
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
	$('#results .clickable').fadeTo( 200 , 0.1);
	$('#results .clickable').filter('.stores').fadeTo( 200 , 1);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#commercials', function() {
	$('#results .clickable').fadeTo( 200 , 0.1);
	$('#results .clickable').filter('.commercials').fadeTo( 200 , 1);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#interiors', function() {
	$('#results .clickable').fadeTo( 200 , 0.1);
	$('#results .clickable').filter('.interiors').fadeTo( 200 , 1);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#horeca', function() {
	$('#results .clickable').fadeTo( 200 , 0.1);
	$('#results .clickable').filter('.horeca').fadeTo( 200 , 1);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#stands', function() {
	$('#results .clickable').fadeTo( 200 , 0.1);
	$('#results .clickable').filter('.stands').fadeTo( 200 , 1);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});

$(document).on('click','#designs', function() {
	$('#results .clickable').fadeTo( 200 , 0.1);
	$('#results .clickable').filter('.designs').fadeTo( 200 , 1);
	
	$('#works-overzicht article > a').removeClass('active');
	$(this).addClass('active');
	return false;
});
















