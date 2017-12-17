var maxGame=5;
var first=0;
$("#one").click( function() {
	first+=1;
	if(first<=maxGame)
		$("#first").html(first);
	if (first>=maxGame)
		$("#first").css("color","green");	
});

var second=0;
$("#two").click( function() {
	second+=1;
	if(second<=maxGame)
		$("#second").html(second);
	if (second>=maxGame)
		$("#second").css("color","green");
});

$("#reset").click( function() {
	second=0;
	first=0;
	$("#second").html(second);
	$("#first").html(second);
});

$("#maxGame").click(function() {
	maxGame=$(this).val();
	$("#total").html(maxGame);
});


