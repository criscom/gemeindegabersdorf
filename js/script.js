/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($) {


	$(document).ready(function() {
//============================================
//Give the boxes on the frontpage equal height
//============================================

//First row Termine / Aktuelles / Gemeindenachrichten
//============================================

		var heightleft = $('.panels-flexible-row-2-main-row .pane-termine').height();
		var heightmiddle = $('.panels-flexible-row-2-main-row .pane-aktuelles').height();
		var heightright = $('.panels-flexible-row-2-main-row .pane-gemeindenachrichten').height();
		if ((heightleft >= heightmiddle) && (heightleft >= heightright)) {
			$('.panels-flexible-row-2-main-row .pane-aktuelles').height(heightleft);
			$('.panels-flexible-row-2-main-row .pane-gemeindenachrichten').height(heightleft);
			} 
		else if ((heightmiddle >= heightleft) && (heightmiddle >= heightright)) {
			$('.panels-flexible-row-2-main-row .pane-termine').height(heightmiddle);
			$('.panels-flexible-row-2-main-row .pane-gemeindenachrichten').height(heightmiddle);
			} 
		else if ((heightright >= heightmiddle) && (heightright >= heightleft)) {
			$('.panels-flexible-row-2-main-row .pane-aktuelles').height(heightright);
			$('.panels-flexible-row-2-main-row .pane-termine').height(heightright);
		}

//Second row Förderprogramme / Vereine / Unsere Gemeinde
//============================================

		var heightleft = $('.panels-flexible-row-2-2 .pane-foerderprogramme').height();
		var heightmiddle = $('.panels-flexible-row-2-2 .pane-vereine').height();
		var heightright = $('.panels-flexible-row-2-2 .pane-unseregemeinde').height();
		if ((heightleft >= heightmiddle) && (heightleft >= heightright)) {
			$('.panels-flexible-row-2-2 .pane-vereine').height(heightleft);
			$('.panels-flexible-row-2-2 .pane-unseregemeinde').height(heightleft);
			} 
		else if ((heightmiddle >= heightleft) && (heightmiddle >= heightright)) {
			$('.panels-flexible-row-2-2 .pane-foerderprogramme').height(heightmiddle);
			$('.panels-flexible-row-2-2 .pane-unseregemeinde').height(heightmiddle);
			} 
		else if ((heightright >= heightmiddle) && (heightright >= heightleft)) {
			$('.panels-flexible-row-2-2 .pane-vereine').height(heightright);
			$('.panels-flexible-row-2-2 .pane-foerderprogramme').height(heightright);
		}

//Third row Stellenausschreibungen / Wetter
//============================================

		var heightleft = $('.panels-flexible-row-2-3 .pane-stellenausschreibungen').height();
		// var heightmiddle = $('.panels-flexible-row-2-3 .pane-vereine').height();
		var heightright = $('.panels-flexible-row-2-3 .pane-wetter').height();
		if ((heightleft >= heightright)) {
			$('.panels-flexible-row-2-3 .pane-wetter').height(heightleft);
		}
		else if ((heightright >= heightleft)) {
			$('.panels-flexible-row-2-3 .pane-stellenausschreibungen').height(heightright);
		}
		// if ((heightleft >= heightmiddle) && (heightleft >= heightright)) {
		// 	$('.panels-flexible-row-2-3 .pane-vereine').height(heightleft);
		// 	$('.panels-flexible-row-2-3 .pane-wetter').height(heightleft);
		// 	} 
		// // else if ((heightmiddle >= heightleft) && (heightmiddle >= heightright)) {
		// // 	$('.panels-flexible-row-2-3 .pane-stellenausschreibungen').height(heightmiddle);
		// // 	$('.panels-flexible-row-2-3 .pane-wetter').height(heightmiddle);
		// // 	} 
		// else if ((heightright >= heightmiddle) && (heightright >= heightleft)) {
		// 	$('.panels-flexible-row-2-3 .pane-vereine').height(heightright);
		// 	$('.panels-flexible-row-2-3 .pane-stellenausschreibungen').height(heightright);
		// }
			
	});


})(jQuery);
