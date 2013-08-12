(function ($) {
  $(document).ready(function() {
       
    //RoyalSlider Rotator Element Homepage
    $("#HPslideshow").royalSlider({
		captionShowEffects:["moveleft", "fade"],
		directionNavAutoHide: true,
		slideTransitionType: "move",            // Slide transition type: Can be "fade" or "move".
		slideTransitionSpeed:800,               // Slide transition speed in ms (1s = 1000ms).
		slideTransitionEasing:"easeInOutSine",  // Easing type for slide transition.
		slideshowEnabled: true
	}); //Royal Slider Rotator
	
	// Royal Slider Add Numbers to Rotator div.royalControlNavCenterer
/*	var mySliderInstance = $('#HProtator').royalSlider({
	       beforeLoadStart:function() {					
	           $("p.navId").text((this.currentSlideId+1) + "/"  +   (this.numSlides) );
	          
	       },
	       beforeSlideChange:function() {
	           $("p.navId").text((this.currentSlideId+1) + "/"  +   (this.numSlides) );
	       }		
	   }).data("royalSlider"); */
	
	//RoyalSlider Upcoming Events Element Homepage
	   $("#HPupcomingevents").royalSlider({
	       captionShowEffects:["moveleft", "fade"],
	       directionNavAutoHide: false,
	       slideTransitionType: "move",            // Slide transition type: Can be "fade" or "move".
	       slideTransitionSpeed:800,               // Slide transition speed in ms (1s = 1000ms).
	       slideTransitionEasing:"easeInOutSine",  // Easing type for slide transition.
	       slideshowEnabled: false,
	       imageAlignCenter:true,
	       controlNavEnabled: false
	   }); //Royal Slider Rotator
	
	
	//RoyalSlider Rotator BM Issue
	$("#BMissue_rotator").royalSlider({
		captionShowEffects:["moveleft", "fade"],
		directionNavAutoHide: true,
		slideTransitionType: "move",            // Slide transition type: Can be "fade" or "move".
		slideTransitionSpeed:800,               // Slide transition speed in ms (1s = 1000ms).
		slideTransitionEasing:"easeInOutSine",  // Easing type for slide transition.
		slideshowEnabled: true
	}); //Royal Slider Rotator
	
	   
	/*RoyalSlider Media Element Homepage
	   $("#HPmedia").royalSlider({
	       captionShowEffects:["moveleft", "fade"],
	       directionNavAutoHide: true,
	       slideTransitionType: "move",            // Slide transition type: Can be "fade" or "move".
	       slideTransitionSpeed:800,               // Slide transition speed in ms (1s = 1000ms).
	       slideTransitionEasing:"easeInOutSine",  // Easing type for slide transition.
	       slideshowEnabled: false,
	       imageAlignCenter:true,
	       controlNavEnabled: false
	   }); //Royal Slider Rotator	   
	    */
   });
})(jQuery);

