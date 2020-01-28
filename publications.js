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
		var icon = document.createElement("i");
		$(icon).addClass("fas fa-envelope");
		$(icon).css("font-size", "16px");
		$("#emails").append(icon);
		$("#emails").append(document.createTextNode(emails[i]+((i < emails.length-1)?"; ":"")));
	}
	
	//add publications
	load_publications();
	
	//clustrmaps
	$("#map").html(map);
	
	// copyright
	$("#copyright").html(copyright);
}