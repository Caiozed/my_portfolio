var current_color = ""
var corrects = 0
$(document).ready(function(){
	var half_size = $('td').length/2;
	var chances = half_size;
	SetChances(chances);
	current_color = $('a.circle').first().data('color')
	$('a.circle').first().addClass('selected');


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
			$(this).removeClass('clickable');
			$(this).click(false);
			corrects += 1;
		}

		SetChances(chances -= 1);

		if (chances <= 0){
			corrects == half_size/2 ? $('.counter').text('You Win!') : $('.counter').text('You Lose!');
			$('td.circle').hide();
		}

		return false;
	});
});

function SetChances(chances){
	$('.counter').text('x' + chances);
}


