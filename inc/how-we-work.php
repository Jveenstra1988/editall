
<a href="#" class="btn-rood back-to-profile">&#8592; Terug</a>
<article class="bg-grijs how-we-work">
<div>
	<ul id="sb-slider" class="sb-slider">
		<li>
			<img src="img/works/how-we/gesprek.jpg" alt="Gesprek met edit-all"/>
			<div class="sb-description">			
				<h3 class="txt-turq">1 | Het gesprek</h3>
				<p>
				In een eerste gesprek bespreken we met de klant de wensen. 
				We laten zien wat er mogelijk is om de gewenste uitstraling te krijgen.
			</div>
		</li>
		<li>
			<img src="img/works/how-we/schets.jpg" alt="Schetsen van onze ontwerpers"/>
			<div class="sb-description">
				<h3 class="txt-turq">2 | De schets</h3>
				<p>Bij Edit-all maken onze ontwerpers een indruk van de realiteit.
				Daarbij proberen wij met innovatieve en treffende oplossingen te komen
				voor een bestaand probleem.</p>
			</div>
		</li>
		<li>
			<img src="img/works/how-we/3dtekening.jpg" alt="Het ontwerp van de 3D tekening"/>
			<div class="sb-description">
				<h3 class="txt-turq">3 | De 3D-tekening</h3>
				<p>
					Desgewenst worden er 3-D tekeningen gemaakt, voorzien van 
					plattegronden en te gebruiken materialen en kleuren.
				</p>
			</div>
		</li>
		<li>
			<img src="img/works/how-we/eindresultaat.jpg" alt="Het eindresultaat"/>
			<div class="sb-description">
				<h3 class="txt-turq">4 | Het eindresultaat</h3>
				<p>
					Van ontwerp naar vergunning, bouw, schilderen en 
					afwerking van het project, geheel intern begeleid. 
					Ook het  transport, en de op- en afbouw doen wij zelf.
				</p>
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