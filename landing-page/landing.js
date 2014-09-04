
/*
	* landing-page v1.0.0
	* http://pascal-iske.de/plugins/landing-page/
	*
	* Copyright 2014: Pascal Iske
*/

(function ($, window, undefined) {
	$.fn.landing = function(settings) {
		// vars
		var el = this;
		var settings = $.extend({}, $.fn.landing.defaults, settings);
		var title = this.data("title");
		var subtitle = this.data("subtitle");

		// code
		if(settings.lock) {
			$("html, body").addClass('lock');
		}

		// hide page
		$(settings.wrapper).hide();

		// append all elements
		el.append('<div id="data"></div>');
		if(settings.logo) {
			$('<div class="logo"></div>').appendTo('#data');
			$('.logo').css('background-image', 'url('+settings.logo+')');
		}
		$('<div id="text"><div class="title">' + title + '</div><div class="subtitle">' + subtitle + '</div></div>').appendTo('#data');
		el.append('<div id="enter">Enter the Site</div>');

		// fade in all elements
		$("#data, #enter").fadeIn(800);
		
		// click event handler
		$("#enter").click(function() {
			$(settings.wrapper).show(function() {
				$(settings.wrapper).removeAttr('style');
			});
			if(settings.effect === 'slide') {
				$("#data").animate({
					top: "-=180px",
					opacity: 0
				}, 1400);
				$("#enter").delay(600).animate({
					opacity: 0,
					bottom: "-=3em"
				}, 600);
				el.delay(900).animate({
					opacity: 0
				}, 600, function() {
					// optional remove of element
					if(settings.remove) {
						el.remove();
					}

					// optional redirect callback
					if(settings.redirect) {
						if(settings.redirectTo[0] === 'path') {
							document.location.href = document.location.href + settings.redirectTo[1];
						} else if(settings.redirectTo[0] === 'url') {
							document.location.href = settings.redirectTo[1];
						}
					}
				});
			} else if(settings.effect === 'fade') {
				$('#enter').fadeOut(600);
				$('#data').delay(200).fadeOut(600);
				$(el).delay(800).fadeOut(600);
			} else if(settings.effect === 'cut') {
				var left = "<div class='left'></div>";
				var right = "<div class='right'></div>";
				$('#enter').fadeOut(600);
				$('#data').delay(200).fadeOut(600, function() {
					$(left + right).prependTo('body');
					el.remove();
					$('.left').animate({
						left: '-50%',
						opacity: .8
					}, 1000);
					$('.right').animate({
						right: '-50%',
						opacity: .8
					}, 1000);
				});
			} else {
				console.error('No effect chosen!');
			}
		});
	};
	$.fn.landing.defaults = {
		// page-wrapper
		wrapper: '#wrapper',
		// logo
		logo: true,
		//locks background
		lock: true,
		//redirect callback
		redirect: false,
		//redirect url/path
		redirectTo: ['path', 'home/'],
		// removes element callback
		remove: true,
		// effect
		effect: 'slide'
	};
})(jQuery);