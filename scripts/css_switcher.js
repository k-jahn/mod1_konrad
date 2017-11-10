
function changeStyle(x){
	
	// switch css
	$('.design').prop('disabled', true);
	$('#nysl_css_'+x).prop('disabled', false);
	// show curremt
	$(".switch").removeClass("current");
	$("#d"+x).addClass("current");
}

// on DOM load
$(function(){
	// add switch link html 
	$("body").append('<div class="cssSwitcher"><a href="#" class="switch" id="d1">Design 1</a> | <a href="#" class="switch" id="d2">Design 2</a> | <a href="#" class="switch" id="d3">Design 3</a></div>');
	// set initial style
	changeStyle(1);	
	
	
	// set link behavior
	$('#d1').click(function(){
		changeStyle(1);
		return false;
	});
	$('#d2').click(function(){
		changeStyle(2);
		return false;
	});
	$('#d3').click(function(){
		changeStyle(3);
		return false;
	});
});