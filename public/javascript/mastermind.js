var current_color = ""

$(document).ready(function(){
	$(document).on('click', 'a.circle', function(){
		$('a.circle').removeClass('selected');
		$(this).addClass('selected');
		current_color = $(this).data('color');
		return false;
	});

	$(document).on('click', 'td.circle', function(){
		var color = $(this).data('color');
		if (color == current_color){
			$(this).css('background-color', color);
		}
		return false;
	});
});


