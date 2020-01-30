/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/
*/

function load_publications(){
	for (var i = 0; i < publications.length; i++) {
		if (publications[i]['title']=='')
			continue; //skip empty title entries
		
		var parent_tr = $('<tr></tr>');
		
		// paper icon
		var parent_td = $('<td></td>');
		var img = $('<img>');
		$(img).attr('src', publications[i]['src']);
		$(img).attr('alt', publications[i]['alt']);
		$(img).css({'width':'100px', 'height':'100px;', 'vertical-align':'middle'});
		$(parent_td).append(img);
		$(parent_tr).append(parent_td);
		
		// authors, title, conference, information, award, links
		var parent_td = $('<td></td>');
		
		// add authors
		var authors = publications[i]['authors'];
		for (var j = 0; j < authors.length; j++) {
			if (co_author_list[authors[j]] != '' && j < authors.length-1) {
				var a = $('<a></a>');
				$(a).attr('href', co_author_list[authors[j]]).attr('target', "_blank");
				$(a).html($('<span></span>').html(authors[j]));
				$(parent_td).append(a);
				$(parent_td).append($("<span></span>").html(', '));
			}
			else if (co_author_list[authors[j]] == '' && j < authors.length-1) {
				$(parent_td).append($("<span></span>").html(authors[j]+', '));
			}
			else if (co_author_list[authors[j]] != '' && j == authors.length-1) {
				$(parent_td).append($("<span></span>").html('and '));
				var a = $('<a></a>');
				$(a).attr('href', co_author_list[authors[j]]).attr('target', "_blank");
				$(a).html($('<span></span>').html(authors[j]));
				$(parent_td).append(a);
				$(parent_td).append($("<span></span>").html('<br>'));
			}
			else {
				$(parent_td).append($("<span></span>").html('and '+authors[j]+'<br>'));
			}
		}
		
		// add paper title
		$(parent_td).append($("<span></span>").html('"<b>'+publications[i]['title']+'</b>"<br>'));
		
		//add conference information
		$(parent_td).append($("<span></span>").html(publications[i]['conf']));
		
		// information icon
		if (publications[i]['info']!='') {
			var table = $('<table></table>');
			$(table).addClass("paper_info_table");
			var tr = $('<tr></tr>');
			var td = $('<td></td>');
			$(td).css('width', '16px');
			var icon = $('<i></i>');
			$(icon).addClass('fa fa-info-circle');
			$(icon).css('font-size', '16px');
			$(td).append(icon);
			$(tr).append(td);
			var td = $('<td></td>');
			$(td).html($('<span></span>').html(publications[i]['info']));
			$(tr).append(td);
			$(table).append(tr);
			$(parent_td).append(table);	
		}
		
		//award icon
		if (publications[i]['award']!='') {
			var table = $('<table></table>');
			$(table).addClass("paper_info_table");
			var tr = $('<tr></tr>');
			var td = $('<td></td>');
			$(td).css('width', '16px');
			var icon = $('<i></i>');
			$(icon).addClass('fas fa-award');
			$(icon).css('font-size', '16px');
			$(td).append(icon);
			$(tr).append(td);
			var td = $('<td></td>');
			$(td).html($('<span></span>').html(publications[i]['award']));
			$(tr).append(td);
			$(table).append(tr);
			$(parent_td).append(table);
		}
		
		//paper links
		if (!jQuery.isEmptyObject(publications[i]['links'])) { 
			var table = $('<table></table>');
			$(table).addClass("paper_links_table");
			var tr = $('<tr></tr>');
			var td = $('<td></td>');
			$(td).css('width', '16px');
			var icon = $('<i></i>');
			$(icon).addClass('fa fa-hand-o-right');
			$(icon).css('font-size', '16px');
			$(td).append(icon);
			$(tr).append(td);
			
			for (L in publications[i]['links']) {
				if (publications[i]['links'][L] != '') {
					var td = $('<td></td>');
					var a = $('<a></a>');
					$(a).attr('href', publications[i]['links'][L]).attr('target', "_blank");
					$(a).html($('<span></span>').html(L));
					$(td).append(a);
				}
				else {
					var td = $('<td></td>');
					$(td).html($('<span></span>').html(L));
				}
				$(tr).append(td);
			}
			$(table).append(tr);
			$(parent_td).append(table);
		}
		
		//$(parent_td).html(paper_info_div);
		$(parent_tr).append(parent_td);
		
		$('#publications_table').append(parent_tr);
		
		//append some space after each entry
		var tr = $('<tr></tr>');
		var td = $('<td></td>');
		$(td).attr('colspan','2');
		$(td).css('height', '20px');
		$(tr).append(td);
		$('#publications_table').append(tr);
	}
	
	//append legend
	var tr = $('<tr></tr>');
	var td = $('<td></td>');
	$(td).attr('colspan','2');
	$(td).html('* denote as equal contribution');
	$(tr).append(td);
	$('#publications_table').append(tr);
	
}
