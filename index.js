/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/
*/

window.onload = function(){
	//set meta
	$("#keywords").attr("content", keywords);

	//set picture
	$("#mypicture").attr("src", mypicture);

	//set name and title
	$("#name").html(name);
	$("title").html(name);
	$("#mytitle").html(mytitle);
	
	//set email and citizen
	for (var i = 0; i < emails.length; i++) {
		var email_p = $('<p></p>');
		var icon_span = $('<span></span>');
		$(icon_span).addClass('icon_span');
		var icon = $('<i></i>');
		$(icon).addClass("fas fa-envelope");
		//$(icon).css("font-size", "16px");
		$(icon_span).append(icon);
		$(email_p).append(icon_span);
		var span = $('<span></span>');
		$(span).html(emails[i]);
		$(email_p).append(span);
		$("#name_block").append(email_p);
	}
	var citi_p = $('<p></p>');
	var icon_span = $('<span></span>');
	$(icon_span).addClass('icon_span');
	var icon = $('<i></i>');
	$(icon).addClass("fas fa-passport");
	//$(icon).css("font-size", "16px");
	$(icon_span).append(icon);
	$(citi_p).append(icon_span);
	var span = $('<span></span>');
	$(span).html(citizen);
	$(citi_p).append(span);
	$("#name_block").append(citi_p);
	
	//set text for about me
	$("#aboutme").html(aboutme);
	
	//add info links
	var tr = $('<tr></tr>');
	for (var i = 0; i < info_links.length; i++) {
		if (info_links[i]["url"]=='')
			continue; //skip empty url entries
		var td = $('<td></td>');
		var a  = $('<a></a>'); //add link
		$(a).addClass("picture_link");
		$(a).attr("href", info_links[i]["url"]);
		$(a).attr("target", "_blank");
		
		var icon  = $('<img>');
		$(icon).addClass("info_link_icon");
		$(icon).attr("src", info_links[i]["src"]);
		$(icon).attr("alt", info_links[i]["alt"]);
		$(icon).hover(inverseColor, inverseColor);
		
		$(a).append(icon);//add icon
		$(td).append(a);
		$(tr).append(td);
	}
	$("#info_links").append(tr);
	
	//add publications
	load_publications();
	
	//add activities
	append_to_table("#activities_table", activities);

	//add awards
	// graduate
	if (graduate_awards.length>0)
		append_to_awards_table('Graduate:', graduate_awards);
	
	// undergraduate
	if (undergrad_awards.length>0)
		append_to_awards_table('Undergraduate:', undergrad_awards);
	
	// high school
	if (highschool_awards.length>0)
		append_to_awards_table('High School:', highschool_awards);
	
	//clustrmaps
	$("#map").html(map);
	
	// copyright
	$("#copyright").html(copyright);
}

function append_to_awards_table(school, arrayname){
	var tr = $('<tr></tr>');
	var td = $('<td></td>');
	$(td).html(school);
	$(td).attr('colspan', '2');
	$(td).css('padding-bottom', '5px');
	$(tr).append(td);
	$("#awards_table").append(tr);
	
	append_to_table("#awards_table", arrayname);
}

function append_to_table(tablename, arrayname){
	for (var i = 0; i < arrayname.length; i++) {
		if (arrayname[i] == '')
			continue;
		var tr = $('<tr></tr>');
		$(tr).css('vertical-align', 'top');
		var td = $('<td></td>');
		$(td).html('&#8921;');
		$(tr).append(td);
		var td = $('<td></td>');
		$(td).html(arrayname[i]);
		$(td).css('padding-bottom', '10px');
		$(tr).append(td);
		$(tablename).append(tr);
	}
}

function inverseColor(){
	//console.dir($(this).css('filter'));
	if ($(this).css('filter') != 'invert(1)')
		$(this).css('filter', 'invert(1)');
	else
		$(this).css('filter', 'invert(0)');
}

