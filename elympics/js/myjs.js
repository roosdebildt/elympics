$(document).ready(function(){
	$('#title1, #title2, #title3, #title4').hide();
	$('#title1').fadeIn(1500).delay(500).fadeOut(1000);
	$('#title2').delay(3000).fadeIn(1500).delay(500).fadeOut(1000);
	$('#title3').delay(6000).fadeIn(1500).delay(500).fadeOut(1000);
	$('#title4').delay(9000).fadeIn(1500);
});