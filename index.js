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
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		var icon = document.createElement("i");
		$(icon).addClass("fas fa-envelope");
		$(icon).css("font-size", "16px");
		$(td).append(icon);
		$(tr).append(td);
		var td = document.createElement("td");
		$(td).html(emails[i]);
		$(tr).append(td);
		$("#email_citizen").append(tr);
	}
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	var icon = document.createElement("i");
	$(icon).addClass("fas fa-passport");
	$(icon).css("font-size", "16px");
	$(td).append(icon);
	$(tr).append(td);
	var td = document.createElement("td");
	$(td).html(citizen);
	$(tr).append(td);
	$("#email_citizen").append(tr);
	
	//set text for about me
	$("#aboutme").html(aboutme);
	
	//add info links
	var tr = document.createElement("tr");
	for (var i = 0; i < info_links.length; i++) {
		var td = document.createElement("td");
		var a  = document.createElement("a"); //add link
		$(a).addClass("picture_link");
		$(a).attr("href", info_links[i][1]);
		$(a).attr("target", "_blank");
		$(a).append(info_links[i][0]);//add icon
		$(a).children().eq(0).hover(inverseColor, inverseColor);
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
	var tr = document.createElement("tr");
	$(tr).append(document.createElement("td"));
	var td = document.createElement("td");
	$(td).html(school);
	$(td).css('padding-bottom', '5px');
	$(tr).append(td);
	$("#awards_table").append(tr);
	
	append_to_table("#awards_table", arrayname);
}

function append_to_table(tablename, arrayname){
	for (var i = 0; i < arrayname.length; i++) {
		if (arrayname[i] == '')
			continue;
		var tr = document.createElement('tr');
		$(tr).css('vertical-align', 'top');
		var td = document.createElement("td");
		$(td).html('&#8921;');
		$(tr).append(td);
		var td = document.createElement('td');
		$(td).html(arrayname[i]);
		$(td).css('padding-bottom', '5px');
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

