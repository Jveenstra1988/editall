//Preload functie ---------------------------------------------------
//voor het inladen van hires afbeeldingen
function preload() {
	var preloader 	= new createjs.LoadQueue(true, '');
	var images 		= $('img, .hires');
	var manifest 	= [];

	images.each(function(i, el){
		if($(el)[0].nodeName === 'IMG')
			var fullFilename 	= el.src;
		else
			var fullFilename	= $(el).css('backgroundImage').replace('url(','').replace(')','');

		var extension		= fullFilename.substr(fullFilename.lastIndexOf('.') + 1);
		var filename 		= fullFilename.substr(0, fullFilename.lastIndexOf('.'));

		var id = $(el).attr('id') || 'hires_image_' + makeid();

		$(el).attr('id', id);

		var whatToLoad		= filename + '-hires.' + extension;
		//whatToLoad			= 'img/hires.png?time=' + makeid();

		manifest.push({src: whatToLoad, id: id});
	});
	
	preloader.addEventListener('fileload', handleCompleted);
	preloader.addEventListener('progress', handleProgress);
	preloader.loadManifest(manifest);

	function handleCompleted(event)
	{
		var el = $('#' + event.item.id);

		if(el[0].nodeName === 'IMG')
			el.attr('src', event.item.src);
		else
			el.css('backgroundImage', 'url(' + event.item.src + ')');
	}


	function handleProgress(event) {
		console.log('TOTAL: ' + (preloader.progress * 100) + '%');
	}

	function makeid()
	{
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

		for( var i=0; i < 5; i++ )
			text += possible.charAt(Math.floor(Math.random() * possible.length));

		return text;
	}
}
