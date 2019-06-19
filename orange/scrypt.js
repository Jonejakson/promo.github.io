$('.js-button-campaign').click(function(){
	$('header').css('filter','blur(5px)');
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

$('.js-close-campaign').click(function() {
	$('.js-overlay-campaign').fadeOut();
	$('main1').css('filter','none');
});

$(document).mouseup(function(e){
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		$('main1').css('filter','none');
	}
});
