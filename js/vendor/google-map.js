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
	var myLatLng = new google.maps.LatLng(52.511171,4.784778);
	var mapOptions = {
		zoom: 15,
		scrollwheel: false,
		draggable: false,
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
      '<a>Samsonweg<br> 134 1521 RM Wormerveer <br> Nederland</a> '+
      '</p>'+
	  '<a href="https://www.google.nl/maps/dir//Samsonweg+134,+1521+RM+Wormerveer/@52.5111776,4.7801536,16z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x47c5fbf83ecd8a3d:0x48f43493c70f13d1!2m2!1d4.7847777!2d52.5111712" target=_blank" class="btn-rood">Route</a>'+
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