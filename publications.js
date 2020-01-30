/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/
*/

window.onload = function(){
	//set name and title
	$("title").html(name + ' Publications');
	$("#name_small").children("a").html(name);
	$("#mytitle").html(mytitle);
	
	//set emails
	for (var i = 0; i < emails.length; i++) {
		var icon = $('<i></i>');
		$(icon).addClass("fas fa-envelope");
		//$(icon).css("font-size", "16px");
		$("#emails").append(icon);
		var span = $('<span></span>');
		$(span).html(' '+emails[i]+((i < emails.length-1)?'; ':''));
		$("#emails").append(span);
	}
	
	//add publications
	load_publications();
	
	//clustrmaps
	$("#map").html(map);
	
	// copyright
	$("#copyright").html(copyright);
}