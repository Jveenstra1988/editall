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
		if(position >= (profile.top -65)){
			$("nav a").removeClass('active');		
			$("#profile").addClass('active');
		}
		if(position >= (works.top -65)){
			$("nav a").removeClass('active');		
			$("#works").addClass('active');
		}
		if(position >= (contact.top -65)){
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
		    scrollTop: $("#profile-container").offset().top -65
		}, 600);
	    return false
	});
	
	$("#works").click(function() {
		$('html, body').animate({
		    scrollTop: $("#works-container").offset().top -65
		}, 600);
		return false
	});
	
	$("#contact").click(function() {
		$('html, body').animate({
		    scrollTop: $("#contact-container").offset().top -65
		}, 600);
		return false
	});
})

//	MAPS-------------------------------------------------------
function initialize() {
	var styles = [
		{
		  "featureType": "road",
		  "elementType": "geometry",
		  "stylers": [
			{ "visibility": "on" },
			{ "color": "#33B6B3" }
		  ]
		},{
		  "featureType": "water",
		  "elementType": "geometry",
		  "stylers": [
			{ "color": "#33b6de" }
		  ]
		},{
		  "featureType": "landscape.man_made",
		  "stylers": [
			{ "color": "#4787b1" }
		  ]
		},{
		  "featureType": "landscape.natural",
		  "stylers": [
			{ "color": "#33b678" }
		  ]
		},{
		  "featureType": "transit",
		  "elementType": "geometry",
		  "stylers": [
			{ "color": "#808080" }
		  ]
		},{
		  "featureType": "poi",
		  "elementType": "geometry",
		  "stylers": [
			{ "color": "#33B6B3" },
			{ "lightness": -31 }
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
		zoom: 13,
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
	var image = 'img/icon.png';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Hello World!',
		icon: image,
		animation: google.maps.Animation.DROP	
	});
	
	// marker click events
	google.maps.event.addListener(marker, 'click',  function() {
		infowindow.open(map,marker);
		toggleBounce();
	});
	
	// Create content for info window
	var contentString = '<a href="https://www.google.nl/maps/dir//Venserweg+7,+1112+AR+Diemen/@52.3340203,4.9650486,17z/data=!4m13!1m4!3m3!1s0x47c60bf8f0b87e2d:0xe8daae88b74de79f!2sVenserweg+7!3b1!4m7!1m0!1m5!1m1!1s0x47c60bf8f0b87e2d:0xe8daae88b74de79f!2m2!1d4.9650552!2d52.3340164" target=_blank>'+
	  '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 class="txt-turq">Zie routebeschrijving</h1>'+
      '<div>'+
      '<p>'+
      'Ga naar Edit-All, </a> '+
      '</p>'+
      '</div>'+
      '</div>'+
	  '</a>';
	
	// fill info window with content
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 600
	});
	
	// Creat marker animation
	function toggleBounce() {
		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
  
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initialize);


// Dynamic loading---------------------------------------------
$('#work-load').on('click', function() {
	$('#dynamic-container').fadeOut('fast').queue(function( nxt ) {
		$(this).load('inc/works-overzicht.php', function() {
			$(this).fadeIn('fast');
		});
		nxt();
	});
	return false;
});

$(document).on('click','.back', function(){
    $('#dynamic-container').fadeOut('fast').queue(function( nxt ) {
		$(this).load('inc/works-content.php .works', function() {
			$(this).fadeIn('fast');
		});
		nxt();
	});
	return false;
})







