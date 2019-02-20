jQuery.noConflict();
jQuery( document ).ready(function() {
    
	jQuery(".more_icon").click(function(){
		 jQuery('html,body').animate({
				scrollTop: jQuery("#item1").offset().top
		 },500);
	});
	
	jQuery(".down_arrow").click(function(){
		 jQuery('html,body').animate({
				scrollTop: jQuery("#item1").offset().top
		 },500);
	});
	
	jQuery(".flot_menu ul li").click(function(){
		 var dataTarget = 	jQuery(this).attr("data-target");
		 
		 
		 jQuery("nav.flot_menu ul li").removeClass("active");
		 jQuery("nav.flot_menu ul li."+dataTarget).addClass("active");
		 
		 jQuery('html,body').animate({
				scrollTop: jQuery("#"+dataTarget).offset().top
		 },500);
	});
	/*
	jQuery( ".flot_menu ul li" ).each(function( index ) {
	  var dataTarget = 	jQuery(this).attr("data-target");
	  jQuery('html,body').animate({
				scrollTop: jQuery("#"+dataTarget).offset().top
	  },500);
	}); 
	*/
	if(jQuery( window ).width() < 767){
		jQuery(window).scroll(trackActiveMenuMobile); 
	}else{
		jQuery(window).scroll(trackActiveMenu);
	}
	
	
	function trackActiveMenu() {
		
		var scrollTop = jQuery(window).scrollTop();
		console.log(scrollTop); 
		if (scrollTop > 1175 && scrollTop < 6811  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item1").addClass("active");
		}else if (scrollTop > 6811 && scrollTop < 13164  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item2").addClass("active");
		}else  if (scrollTop > 13164 && scrollTop < 18728  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item3").addClass("active");
		}else  if (scrollTop > 18728 && scrollTop < 21856  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item4").addClass("active");
		}else  if (scrollTop > 21856 && scrollTop < 24329  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item5").addClass("active");
		}else  if (scrollTop > 24329 && scrollTop < 32621  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item6").addClass("active");
		}else if (scrollTop > 32621 && scrollTop < 38772  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item7").addClass("active");
		}else  if (scrollTop > 38772 && scrollTop < 45135  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item8").addClass("active");
		}else  if (scrollTop > 45135    ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item9").addClass("active");
		}
		 else{
			jQuery("nav.flot_menu ul li").removeClass("active");
		}
	}
	function trackActiveMenuMobile() {
		
		var scrollTop = jQuery(window).scrollTop();
		console.log(scrollTop); 
		if (scrollTop >= 1261 && scrollTop < 9874  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item1").addClass("active");
		}else if (scrollTop > 9874 && scrollTop < 18188  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item2").addClass("active");
		}else  if (scrollTop > 18188 && scrollTop < 27450  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item3").addClass("active");
		}else  if (scrollTop > 27450 && scrollTop < 31770  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item4").addClass("active");
		}else  if (scrollTop > 31770 && scrollTop < 35276  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item5").addClass("active");
		}else  if (scrollTop > 35276 && scrollTop < 48533  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item6").addClass("active");
		}else if (scrollTop > 48533 && scrollTop < 55644  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item7").addClass("active");
		}else  if (scrollTop > 55644 && scrollTop < 63999  ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item8").addClass("active");
		}else  if (scrollTop > 63999    ) {
			jQuery("nav.flot_menu ul li").removeClass("active");
			jQuery("nav.flot_menu ul li.item9").addClass("active");
		}
		 else{
			jQuery("nav.flot_menu ul li").removeClass("active");
		}
	}
	
	
	
	/*
	if(jQuery( window ).width() < 767){
		jQuery("nav.flot_menu").click(function(){
			jQuery("nav.flot_menu ul").toggle(200);
		});
	}
	*/
 
});