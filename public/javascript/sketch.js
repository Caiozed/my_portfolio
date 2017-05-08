
var gridres = 10;
var color = 'rgb(0,0,0);';

$(document).ready(function(){
	$(document).on('click', ".submit_button",checkRes);
	$(document).on('click', ".clear_button",clearPad);
	$(document).on('mouseenter', ".square", function(){
		$(this).toggleClass('fade_in');
		$(this).css({'background': randomColor()});
	});

});

function clearPad(){
	$('#main_square').find('.square').removeClass('fade_in');
}

function checkRes(){
	gridres = prompt('Enter the grid resolution:');
	if(isNaN(gridres) == true || gridres == null || gridres == 0){
		alert('Enter a valid number greater than zero!');
		checkRes();
	}else{
		$('#main_square').find('.square').remove();
		addGrid();

	}
}

function addGrid(){
	$('.submit_button').text(gridres+"x"+gridres);
	for(var i = 0; i < Math.pow(gridres, 2); i++){
			$('<div class="square"></div>').appendTo('#main_square');
		}

	$('#main_square').find('.square').width($('#main_square').width()/gridres);
	$('#main_square').find('.square').height($('#main_square').find('.square').width());
}



function randomColor(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	color = 'rgb(' + r + ", " + g + ", " + b + ")";
	return color;
}

