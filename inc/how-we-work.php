
<a href="#" class="btn-rood back-to-profile">&#8592; Back</a>
<article class="bg-grijs how-we-work">
<div>
	<ul id="sb-slider" class="sb-slider">
		<li>
			<img src="img/works/com/ah1.jpg" alt="image2"/>
			<div class="sb-description">
				<h3>Creative Lifesaver</h3>
			</div>
		</li>
		<li>
			<img src="img/works/com/ah1.jpg" alt="image2"/>
			<div class="sb-description">
				<h3>Honest Entertainer</h3>
			</div>
		</li>
		<li>
			<img src="img/works/com/ah1.jpg" alt="image2"/>
			<div class="sb-description">
				<h3>Brave Astronaut</h3>
			</div>
		</li>
	</ul>
	
	<div id="nav-arrows" class="nav-arrows">
		<a href="#" class="arrow-right2"></a>
		<a href="#" class="arrow-left2"></a>
	</div>
</div>
</article>
		
<script type="text/javascript" src="js/vendor/jquery.slicebox.js"></script>
<script type="text/javascript">
	$(function() {
		var Page = (function() {
			var $navArrows = $( '#nav-arrows' ).hide(),
				$shadow = $( '#shadow' ).hide(), slicebox = $( '#sb-slider'
				).slicebox( {
					onReady : function() {
						$navArrows.show(); $shadow.show();
					}, orientation : 'h', cuboidsCount : 1, cuboidsRandom :
					false, disperseFactor : 30, colorHiddenSides: '#0099CC',
				} ),
				init = function() {
					initEvents();
				}, initEvents = function() {
					// add navigation events
					$navArrows.children( ':first' ).on( 'click', function() {
						slicebox.next(); return false;
					} );
					$navArrows.children( ':last' ).on( 'click', function() {
						slicebox.previous(); return false;
					} );
				};
				return { init : init };
		})();
		Page.init();
	});
</script>