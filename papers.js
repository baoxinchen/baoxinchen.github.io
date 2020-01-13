//publications is a list of json objects. 'src', 'authors', and 'title' can't be empty 
var publications = [{'src'     : './images/paper7.jpg', 
                     'alt'     : 'Elastic BSP',
                     'authors' : '<a href="http://www.cse.yorku.ca/~xingzhao/" target="_blank">Xing Zhao</a>, <a href="https://www.eecs.yorku.ca/~papaggel/" target="_blank">Manos Papagelis</a>, <a href="http://www.cse.yorku.ca/~aan/" target="_blank">Aijun An</a>, <b>Bao Xin Chen</b>, Junfeng Liu, and Yonggang Hu',
					 'title'   : '"<b><a href="https://www.eecs.yorku.ca/~papaggel/docs/papers/all/ieee-icdm19-zipline.pdf" target="_blank">Elastic Bulk Synchronous Parallel Model for Distributed Deep Learning</a></b>"',
					 'conf'    : 'in <a href="http://icdm2019.bigke.org/" target="_blank"><i>19th IEEE International Conference on Data Mining (ICDM)</i>, 2019</a>.',
					 'info'    : 'Short Paper',
					 'award'   : '',
					 'links'   : '<a href="https://www.eecs.yorku.ca/~papaggel/docs/papers/all/ieee-icdm19-zipline.pdf" target="_blank">[paper]</a><a href="https://arxiv.org/abs/2001.01347" target="_blank">[arXiv]</a><a href="./publications/EBSP_ICDM_2019_citation.txt" target="_blank">[cite]</a>'},
					 
					{'src'     : './images/paper6_3.jpg', 
                     'alt'     : 'Visual Object Tracking',
                     'authors' : '<b>Bao Xin Chen</b> and <a href="http://www.cse.yorku.ca/~tsotsos" target="_blank">John K. Tsotsos</a>',
					 'title'   : '"<a href="https://arxiv.org/abs/1907.03892" target="_blank"><b>Fast Visual Object Tracking with Rotated Bounding Boxes</b></a>"',
					 'conf'    : 'in <a href="http://iccv2019.thecvf.com/program/workshops" target="_blank"><i>IEEE/CVF International Conference on Computer Vision (ICCV) Workshop</i></a>, 2019.',
					 'info'    : '<a href="http://www.votchallenge.net/vot2019/" target="_blank">VOT2019</a> (Oral and Poster)',
					 'award'   : '',
					 'links'   : '<a href="https://arxiv.org/abs/1907.03892" target="_blank">[arXiv]</a><a href="./publications/vot2019_poster.pdf" target="_blank">[poster]</a><a href="./publications/fastVOT_arXiv_2019_citation.txt" target="_blank">[cite]</a><a href="https://github.com/baoxinchen/siammask_e" target="_blank">[code]</a>'},
					 
					{'src'     : './images/paper5_3.jpg', 
                     'alt'     : 'DSSP',
                     'authors' : '<a href="http://www.cse.yorku.ca/~xingzhao/" target="_blank">Xing Zhao</a>, <a href="http://www.cse.yorku.ca/~aan/" target="_blank">Aijun An</a>, Junfeng Liu, and <b>Bao Xin Chen</b>',
					 'title'   : '"<a href="./publications/DSSP_ICDCS_2019.pdf" target="_blank"><b>Dynamic Stale Synchronous Parallel Distributed Training for Deep Learning</b></a>"',
					 'conf'    : 'in <a href="https://theory.utdallas.edu/ICDCS2019/" target="_blank"><i>39th International Conference on Distributed Computing Systems (ICDCS)</i></a>, IEEE, 2019, pp. 1508-1517.',
					 'info'    : '<b>Oral</b>',
					 'award'   : '',
					 'links'   : '<a href="./publications/DSSP_ICDCS_2019.pdf" target="_blank">[paper]</a><a href="https://arxiv.org/abs/1908.11848" target="_blank">[arXiv]</a><a href="./publications/DSSP_icdcs-2019_citation.txt" target="_blank">[cite]</a>'},
					 
					{'src'     : './images/paper4_2.png', 
                     'alt'     : 'Words',
                     'authors' : '<b>Bao Xin Chen</b>, <a href="http://www.raghavendersahdev.com/" target="_blank">Raghavender Sahdev</a>, Dekun Wu, <a href="http://www.cse.yorku.ca/~xingzhao/" target="_blank">Xing Zhao</a>, <a href="https://www.eecs.yorku.ca/~papaggel/" target="_blank">Manos Papagelis</a>, and <a href="http://www.cse.yorku.ca/~tsotsos" target="_blank">John K. Tsotsos</a>',
					 'title'   : '"<a href="https://natanaso.github.io/rcw-icra18/assets/ref/ICRA-MRP18_paper_25.pdf" target="_blank"><b>Scene Classification in Indoor Environments for Robots using Word Embeddings</b></a>"',
					 'conf'    : 'in <a href="https://www.icra2018.org/" target="_blank"><i>IEEE International Conference on Robotics and Automation (ICRA) Workshop</i></a>, 2018.',
					 'info'    : 'Poster at workshop <a href="https://natanaso.github.io/rcw-icra18/" target="_blank">Multimodal Robot Perception 2018</a>',
					 'award'   : '',
					 'links'   : '<a href="http://jtl.lassonde.yorku.ca/2018/04/scene-classification-robots/" target="_blank">[project page]</a><a href="https://www.youtube.com/playlist?list=PL_PLOWFkDLAYi8WQzvlWuVtNuUAGmHMpu" target="_blank">[videos]</a><a href="https://natanaso.github.io/rcw-icra18/assets/ref/ICRA-MRP18_paper_25.pdf" target="_blank">[paper]</a><a href="https://arxiv.org/abs/1908.06422" target="_blank">[arXiv]</a><a href="./publications/scene_classification_using_word_embedding_icra-2018workshop_citation.txt" target="_blank">[cite]</a>'},
					 
					{'src'     : './images/paper3_2.png', 
                     'alt'     : 'Robot',
                     'authors' : '<a href="http://www.raghavendersahdev.com/" target="_blank">Raghavender Sahdev</a>, <b>Bao Xin Chen</b>, and <a href="http://www.cse.yorku.ca/~tsotsos" target="_blank">John K. Tsotsos</a>',
					 'title'   : '"<a href="https://www.raghavendersahdev.com/uploads/3/9/6/2/39623741/localization_among_humans_crv-2018.pdf" target="_blank"><b>Indoor Localization in Dynamic Human Environments using Visual Odometry and Global Pose Refinement</b></a>"',
					 'conf'    : 'in <a href="http://www.computerrobotvision.org/2018/" target="_blank"><i>Computer and Robot Vision (CRV), 2018 15th Conference on</i></a>, IEEE, 2018, pp. 360-367.',
					 'info'    : 'Poster',
					 'award'   : '',
					 'links'   : '<a href="http://jtl.lassonde.yorku.ca/2018/02/localization-among-humans/" target="_blank">[project page]</a><a href="https://www.raghavendersahdev.com/uploads/3/9/6/2/39623741/localization_among_humans_crv-2018.pdf" target="_blank">[paper]</a><a href="./publications/localization_among_humans_crv-2018_citation.txt" target="_blank">[cite]</a>'},
					 
					{'src'     : './images/paper2_2.png', 
                     'alt'     : 'Robot',
                     'authors' : '<b>Bao Xin Chen*</b>, <a href="http://www.raghavendersahdev.com/" target="_blank">Raghavender Sahdev*</a>, and <a href="http://www.cse.yorku.ca/~tsotsos" target="_blank">John K. Tsotsos</a>',
					 'title'   : '"<a href="http://jtl.lassonde.yorku.ca/wp-content/uploads/2017/05/personfollowingrobotcnn_icvs2017.pdf" target="_blank"><b>Integrating Stereo Vision with a CNN Tracker for a Person-Following Robot</b></a>"',
					 'conf'    : 'in <a href="http://icvs2017.ram-lab.com/" target="_blank"><i>11th International Conference on Computer Vision Systems (ICVS)</i></a>, Springer, 2017, pp. 300-313.',
					 'info'    : '<b>Oral</b> (in highlighted section)',
					 'award'   : 'Received <a href="http://icvs2017.ram-lab.com/program/awards/" target="_blank"><b>Best Paper Finalist</b></a> award at <a href="http://icvs2017.ram-lab.com/" target="_blank">ICVS 2017</a>, Shenzhen, China',
					 'links'   : '<a href="http://jtl.lassonde.yorku.ca/2017/05/person-following-cnn/" target="_blank">[project page]</a><a href="https://www.youtube.com/playlist?list=PL_PLOWFkDLAaWp7P3IEgyoyreIa8sFIIW" target="_blank">[videos]</a><a href="http://jtl.lassonde.yorku.ca/wp-content/uploads/2017/05/personfollowingrobotcnn_icvs2017.pdf" target="_blank">[paper]</a><a href="./publications/person_following_robot_icvs-2017_citation.txt" target="_blank">[cite]</a>'},
					 
					{'src'     : './images/paper1_2.png', 
                     'alt'     : 'Robot',
                     'authors' : '<b>Bao Xin Chen*</b>, <a href="http://www.raghavendersahdev.com/" target="_blank">Raghavender Sahdev*</a>, and <a href="http://www.cse.yorku.ca/~tsotsos" target="_blank">John K. Tsotsos</a>',
					 'title'   : '"<a href="http://jtl.lassonde.yorku.ca/wp-content/uploads/2017/02/pfr_paper_crv2017.pdf" target="_blank"><b>Person Following Robot Using Selected Online Ada-Boosting with Stereo Camera</b></a>"',
					 'conf'    : 'in <a href="http://www.computerrobotvision.org/2017/" target="_blank"><i>Computer and Robot Vision (CRV), 2017 14th Conference on</i></a>, IEEE, 2017, pp. 48-55.',
					 'info'    : '<b>Oral</b>',
					 'award'   : 'Received <a href="https://www.cipprs.org/awards.html" target="_blank"><b>Best Robotics Paper</b></a> award at <a href="http://aigicrv.org/2017/" target="_blank">AI-GI-CRV 2017</a>, Edmonton, Canada',
					 'links'   : '<a href="http://jtl.lassonde.yorku.ca/2017/02/person-following/" target="_blank">[project page]</a><a href="http://jtl.lassonde.yorku.ca/wp-content/uploads/2017/02/pfr_paper_crv2017.pdf" target="_blank">[paper]</a><a href="./publications/person_following_robot_crv-2017_citation.txt" target="_blank">[cite]</a>'}];


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