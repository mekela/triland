$(function(){
	//fancybox
	$('.fancybox').fancybox({
		prevEffect		: 'fade',
		nextEffect		: 'fade',
		
	});
	
	//lang block
	$( ".lang_selected" ).click(function() {
	  $( ".lang_list" ).slideToggle( "slow" );
	});
	
	//menu mobile
	$( ".menu_trigger" ).click(function() {
	  $( this ).next().slideToggle( "slow" );
	});
	
	//bxslider
	$('.slider_wrap ul').bxSlider({
	  adaptiveHeight: true,
	  auto: true,
	  pagerCustom: '#bx-pager'
	});
});