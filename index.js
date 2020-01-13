window.onload = function(){
	//set meta
	$("meta").attr("content", keywords);
	
	//set picture
	$("#mypicture").attr("src", mypicture);
	
	//set name and title
    $("#name").html(name);
	$("#mytitle").html(mytitle);
	
	//set email and citizen
	for (i = 0; i < emails.length; i++) {
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).html("<i class='fas fa-envelope' style='font-size:16px'></i>");
		$(tr).append(td);
		var td = document.createElement("td");
		$(td).html(emails[i]);
		$(tr).append(td);
		$("#email_citizen").append(tr);
	}
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	$(td).html("<i class='fas fa-passport' style='font-size:16px'></i>");
	$(tr).append(td);
	var td = document.createElement("td");
	$(td).html(citizen);
	$(tr).append(td);
	$("#email_citizen").append(tr);
	
	//set text for about me
	$("#aboutme").html(aboutme);
	
	//add info links
	var tr = document.createElement("tr");
	for (i = 0; i < info_links.length; i++) {
		var td = document.createElement("td");
		var a  = document.createElement("a"); //add link
		$(a).attr("href", info_links[i][1]);
		$(a).attr("target", "_blank");
		$(a).append(info_links[i][0]);//add icon
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
		append_to_awards_table('<i>Graduate:</i>', graduate_awards);
	
	// undergraduate
	if (undergrad_awards.length>0)
		append_to_awards_table('<i>Undergraduate:</i>', undergrad_awards);
	
	// high school
	if (highschool_awards.length>0)
		append_to_awards_table('<i>High School:</i>', highschool_awards);
}

function append_to_awards_table(school, arrayname){
	var tr = document.createElement("tr");
	$(tr).append(document.createElement("td"));
	var td = document.createElement("td");
	$(td).html(school);
	$(tr).append(td);
	$("#awards_table").append(tr);
	append_to_table("#awards_table", arrayname);
}

function append_to_table(tablename, arrayname){
	for (i = 0; i < arrayname.length; i++) {
		var tr = document.createElement("tr");
		$(tr).attr("valign", "top");
		var td = document.createElement("td");
		$(td).html("&#8921;");
		$(tr).append(td);
		var td = document.createElement("td");
		$(td).html(arrayname[i]);
		$(tr).append(td);
		$(tablename).append(tr);
		
		var tr = document.createElement("tr");
		$(tr).attr("style", "height:5px;");
		$(tablename).append(tr);
	}
}