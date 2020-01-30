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
		$(parent_td).addClass('paper_info_cell');
		
		// add authors
		var authors = publications[i]['authors'];
		var authors_p = $('<p></p>');
		for (var j = 0; j < authors.length; j++) {
			if (co_author_list[authors[j]] != '' && j < authors.length-1) {
				var a = $('<a></a>');
				$(a).attr('href', co_author_list[authors[j]]).attr('target', "_blank");
				$(a).html(authors[j]);
				$(authors_p).append(a);
				$(authors_p).append($("<span></span>").html(', '));
			}
			else if (co_author_list[authors[j]] == '' && j < authors.length-1) {
				$(authors_p).append($("<span></span>").html(authors[j]+', '));
			}
			else if (co_author_list[authors[j]] != '' && j == authors.length-1) {
				$(authors_p).append($("<span></span>").html('and '));
				var a = $('<a></a>');
				$(a).attr('href', co_author_list[authors[j]]).attr('target', "_blank");
				$(a).html(authors[j]);
				$(authors_p).append(a);
			}
			else {
				$(authors_p).append($("<span></span>").html('and '+authors[j]));
			}
		}
		$(parent_td).append(authors_p)
		
		// add paper title
		var title_p = $('<p></p>');
		$(title_p).append('"<b>'+publications[i]['title']+'</b>"');
		$(parent_td).append(title_p)
		
		//add conference
		var conf_p = $('<p></p>');
		$(conf_p).append(publications[i]['conf']);
		$(parent_td).append(conf_p);
		
		// information icon
		if (publications[i]['info']!='') {
			var info_p = $('<p></p>');
			var icon_span = $('<span></span>');
			$(icon_span).addClass("paper_info_icon_span");
			var icon = $('<i></i>');
			$(icon).addClass('fa fa-info-circle');
			//$(icon).css('font-size', '16px');
			$(icon_span).append(icon);
			$(info_p).append(icon_span);
			var span = $('<span></span>').html(publications[i]['info']);
			$(info_p).append(span);
			$(parent_td).append(info_p);
		}
		
		//award icon
		if (publications[i]['award']!='') {
			var award_p = $('<p></p>');
			var icon_span = $('<span></span>');
			$(icon_span).addClass("paper_info_icon_span");
			var icon = $('<i></i>');
			$(icon).addClass('fas fa-award');
			//$(icon).css('font-size', '16px');
			$(icon_span).append(icon);
			$(award_p).append(icon_span);
			var span = $('<span></span>').html(publications[i]['award']);
			$(award_p).append(span);
			$(parent_td).append(award_p);
		}
		
		//paper links
		if (!jQuery.isEmptyObject(publications[i]['links'])) { 
			var links_p = $('<p></p>');
			var icon_span = $('<span></span>');
			$(icon_span).addClass("paper_info_icon_span");
			var icon = $('<i></i>');
			$(icon).addClass('fa fa-hand-o-right');
			//$(icon).css('font-size', '16px');
			$(icon_span).append(icon);
			$(links_p).append(icon_span);
			
			
			for (L in publications[i]['links']) {
				var span = $('<span></span>');
				$(span).addClass("paper_links_span");
				if (publications[i]['links'][L] != '') {
					var a = $('<a></a>');
					$(a).attr('href', publications[i]['links'][L]).attr('target', "_blank");
					$(a).html(L);
					$(span).append(a);
				}
				else {
					$(span).html(L);
				}
				$(links_p).append(span);
			}
			$(parent_td).append(links_p);
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
