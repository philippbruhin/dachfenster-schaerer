$(document).ready(function(){

	$('#hamburger').click(function(){
	    $("nav").toggleClass('display_menu');
	});

	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	});

	/* blur */
	$('input, textarea').change(function(){
		if($(this).val()){ 
			$(this).addClass('used');
		}
		else {
			$(this).removeClass('used');
		}
	})


	


});


$(document).ready(function() {
	$("#various1").fancybox({
		maxWidth	: 400,
		maxHeight	: 400,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: true,
		openEffect	: 'elastic',
		closeEffect	: 'elastic'

	});

});
