(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	// $(".navbar").hide();

	
	// fade in .navbar
	$(function () {
		var previousTop = 0
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			// if ($(this).scrollTop() > jee) {
			// 	$('.navbar').fadeIn();
			// } else {
			// 	$('.navbar').fadeOut();
			// }
			var currentTop = $(window).scrollTop();
	    	if (currentTop < previousTop) {
	        	$('.navbar').fadeIn();
	    	} else {
	        	$('.navbar').fadeOut();
	    	}
	    	previousTop = currentTop;

		});

	
	});

});
  }(jQuery));