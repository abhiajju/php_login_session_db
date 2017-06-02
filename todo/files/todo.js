$('ul').on('click','li',function(){
	$(this).toggleClass("strike");
});


$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$('input[type="text"').keypress(function(eve){
	if(eve.which === 13){
		var sr=$(this).val();
		$('ul').append("<li><span><i class='fa fa-trash'></i></span>"+ sr+"</li>");
		$('input').val("");
	}
});	

$('.fa-plus').click(function(){
	$("input").fadeToggle(200);
})
