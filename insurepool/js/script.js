jQuery.noConflict();
jQuery( document ).ready(function() {
	
	jQuery('.navtogetintouch').click(function (e) {
		e.preventDefault();
		var $anchor = jQuery("#getintouch").offset();
		jQuery('html, body').stop().animate({
			scrollTop: $anchor.top
		}, '800');
		 
		return false;
	});
	
});