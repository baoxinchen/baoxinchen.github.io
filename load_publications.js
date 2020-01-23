/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/baoxinchen/
*/

function load_publications(){
	for (var i = 0; i < publications.length; i++) {
		if (publications[i]['title']=='')
			continue; //skip empty title entries
		
		var tr = document.createElement("tr");
		
		var td = document.createElement("td");
		var img = document.createElement("img");
		$(img).attr('src',publications[i]['src']);
		$(img).attr('alt',publications[i]['alt']);
		$(img).attr('style','width:100px;height:100px;');
		$(td).append(img);
		$(tr).append(td);
		var td = document.createElement("td");
		var paper_info_div = document.createElement("div");
		$(paper_info_div).attr('class', 'paper_info_div');
		var html_text = '';
		
		var authors = publications[i]['authors'];
		for (var j = 0; j < authors.length; j++) {
			if (co_author_list[authors[j]] != '' && j < authors.length-1)
				html_text += '<a href="'+co_author_list[authors[j]]+'" target="_blank">'+authors[j]+'</a>, ';
			else if (co_author_list[authors[j]] == '' && j < authors.length-1)
				html_text += authors[j]+', ';
			else if (co_author_list[authors[j]] != '' && j == authors.length-1)
				html_text += 'and <a href="'+co_author_list[authors[j]]+'" target="_blank">'+authors[j]+'</a><br>';
			else
				html_text += 'and '+authors[j]+'<br>';
		}
		
		html_text += '"<b>'+publications[i]['title']+'</b>"<br>';
		
		if (publications[i]['conf']!='')
			html_text += publications[i]['conf'];
		
		if (publications[i]['info']!='')
			html_text += '<table><tr><td><i class="fa fa-info-circle" style="font-size:16px"></i></td><td>'+publications[i]['info']+'</td></tr>';
		
		if (publications[i]['award']!='')
			html_text += '<tr><td><i class="fas fa-award" style="font-size:16px"></i></i></td><td>'+publications[i]['award']+'</td></tr></table>';
		
		if (!jQuery.isEmptyObject(publications[i]['links'])) {
			html_text += '<table id="paper_icons_table"><tr><td><i class="fa fa-hand-o-right" style="font-size:16px"></i></td>';
			for (L in publications[i]['links']) {
				if (publications[i]['links'][L] != '')
					html_text += '<td><a href="'+publications[i]['links'][L]+'" target="_blank">'+L+'</a></td> '
				else
					html_text += '<td>'+L+'</a></td> '
			}
			html_text += '</tr></table>'
		}
		
		$(paper_info_div).html(html_text)
		$(td).html(paper_info_div);
		$(tr).append(td);
		
		$('#publications_table').append(tr);
		
		//append some space after each entry
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).attr('colspan','2');
		$(td).attr('style','height:20px;');
		$(tr).append(td);
		$('#publications_table').append(tr);
	}
	
	//append legend
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	$(td).attr('colspan','2');
	$(td).html('* denote as equal contribution');
	$(tr).append(td);
	$('#publications_table').append(tr);
	
}