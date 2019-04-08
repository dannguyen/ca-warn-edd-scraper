$(document).ready(function(){
	//hide the all of the elements with class answer
	$(".answer").hide();
	$(".answer_nested").hide();
	//toggle the componenet with class answer
	$(".question").click(function(){
		$(this).next(".answer").slideToggle(250);
	});
	
	$(".question_nested").click(function(){
		$(this).next(".answer_nested").slideToggle(250);
	});
	
	$(".collapseAll").click(function(){
		$(".answer").hide(250);
		$(".answer_nested").hide(250);
	});
	
	$(".expandAll").click(function(){
		$(".answer").show(250);
		$(".answer_nested").show(250);
	});
});