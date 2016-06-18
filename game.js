(function($) {
	var icons = [
		'fa-asterisk', 
		'fa-at', 
		'fa-balance-scale', 
		'fa-bar-chart', 
		'fa-barcode', 
		'fa-bars', 
		'fa-beer', 
		'fa-bed', 
		'fa-behance', 
		'fa-bell', 
		'fa-binoculars', 
		'fa-birthday-cake', 
		'fa-bitbucket', 
		'fa-bluetooth', 
		'fa-bomb', 
		'fa-book', 
		'fa-bolt', 
		'fa-bookmark', 
		'fa-bug', 
		'fa-camera', 
		'fa-briefcase',
		'fa-chrome',
		'fa-codepen',
		'fa-cogs',
		'fa-compass',
		'fa-diamond',
		'fa-dot-circle-o',
		'fa-drupal',
		'fa-dropbox',
		'fa-dribbble',
		'fa-desktop'
		];
	// console.log(icons.length);
	var $all_icons = $('.all_icons');
	var $result_icon = $('.result_icon');
	var $btnTry = $('.try_again');
	var $resultText = $('.result_text');
	var prev_rand;
	var resultIconIndex;

	var renderIcons = function() {
		for (var i = 0; i < 100; i++) {
			var rand = Math.round(Math.random() * 30);
			if (rand == prev_rand) {
				rand = Math.round(Math.random() * 30);
				//console.log('Repeated rand');
			}
			if (i == 9) {
				resultIconIndex = rand;
			}
			if (i % 9 == 0) {
				rand = resultIconIndex || rand;
			}
			$all_icons.append('<div class="single_icon"><span class="num">' + i + '</span><span class="fa ' + icons[rand] + '"></span></div>');
			prev_rand = rand;
		}

		var $divs = $('.single_icon');
		for (var i = 0; i < $divs.length; i += 25) {
			$divs.slice(i, i + 25).wrapAll("<div class='col-sm-3 col-xs-6'></div>");
		}

		$result_icon.find('span').removeAttr('class');
		$btnTry.hide();
		$resultText.hide();
	}

	var showResult = function(e) {
		$result_icon.find('span').removeAttr('class');
		$result_icon.find('span').addClass('fa ' + icons[resultIconIndex]);
		$all_icons.html('');
		$btnTry.show();
		$resultText.show();
	}

	$result_icon.on('click', showResult);
	$btnTry.on('click', renderIcons);
	renderIcons();

	/*------------ Pop up--------------*/
	$('.header .btn').on('click', function(e) {
		var dataDiv = $(this).data('div');
		$('.popup').hide();
		$('#'+ dataDiv).fadeIn();
		console.log(dataDiv);
	});
	$('.popup_close').on('click', function(e) {
		e.preventDefault();
		$(this).parent('.popup').fadeOut();
	});
	
})(jQuery)