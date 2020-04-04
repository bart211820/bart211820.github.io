$(document).ready(function(){
	
	$('body').on('click','#button1',function(){
		$('#ninjaDiv').css('background-image', 'url(img/SwordAttack.gif)');
	});

	$('body').on('click','#button2',function(){
		$('#ninjaDiv').css('background-image', 'url(img/ChargeAttack.gif)');
	});

	$('body').on('click','#button3',function(){
		$('#ninjaDiv').css('background-image', 'url(img/FireAttack.gif)');
	});
	
	
});