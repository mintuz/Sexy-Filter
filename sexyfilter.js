/*
 * Sexy Filter 0.1
 * @Author Adam Bulmer
 * Primative Filter Plugin for image galleries, This will one day be a beast.
 * Also Its my first plugin so i'm happy :)
 */

( function( $ ) {
	  
	  $.fn.SFilter = function( o ) {
	  
	  	//The Defaults
	  	var s = $.extend( {
	  		'type' : 'fade',
	  		'container' : '#gallery',
	  		'low_opacity' : 0.2,
	  		'high_opacity' : 1.0,
	  		'speed' : 150

	  	}, o );

	  	//On Click do its magic.
	   	 $( this ).click( function() {

			var data = $( this ).data( 'shoot' );
			var highlight = $( s.container ).find( '.' + data );

			if( s.type == 'fade' ) {
				
				$( highlight ).animate( { opacity: s.high_opacity }, s.speed ).parents( s.container ).find( 'img:not(.' + data + ')' ).animate( { opacity: s.low_opacity }, s.speed );
			
			}

			return false;

		});

	  };

} )( jQuery );
