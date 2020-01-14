/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/baoxinchen/
*/

function load_publications(){
	for (i = 0; i < publications.length; i++) {
		var tr = document.createElement("tr");
		
		var td = document.createElement("td");
		$(td).attr('style','width:100px;height:100px;');
		var img = document.createElement("img");
		$(img).attr('src',publications[i]['src']);
		$(img).attr('alt',publications[i]['alt']);
		$(img).attr('style','width:100px;height:100px;');
		$(td).append(img);
		$(tr).append(td);
		var td = document.createElement("td");
		var html_text = publications[i]['authors']+'<br>';
		html_text = html_text+publications[i]['title']+'<br>';
		if (publications[i]['conf']!='')
			html_text = html_text+publications[i]['conf']+'<br>';
		if (publications[i]['info']!='')
			html_text = html_text+'<i class="fa fa-info-circle" style="font-size:16px"></i> '+publications[i]['info']+'<br>';
		if (publications[i]['award']!='')
			html_text = html_text+'<i class="fas fa-award" style="font-size:16px"></i> '+publications[i]['award']+'<br>';
		if (publications[i]['links']!='')
			html_text = html_text+'<i class="fa fa-hand-o-right" style="font-size:16px"></i> '+publications[i]['links'];
		$(td).html(html_text);
		$(tr).append(td);
		
		$('#publications_table').append(tr);
		
		
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		$(td).attr('colspan','2');
		$(td).attr('style','height:20px;');
		$(tr).append(td);
		$('#publications_table').append(tr);
	}
	
	var tr = document.createElement("tr");
	var td = document.createElement("td");
	$(td).attr('colspan','2');
	$(td).html('* denote as equal contribution');
	$(tr).append(td);
	$('#publications_table').append(tr);
	
}