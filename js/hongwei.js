// JavaScript Document


// 

$(function(){
	$("a[href*=#]:not([href=#])").click(function(){
		
		var target = $($(this).attr("href")).offset().top;
		
		$("html,body").animate({scrollTop:target},500);
		
		return false;
		
		});
	});
	

	