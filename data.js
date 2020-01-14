/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/baoxinchen/
*/

var copyright = 'Bao Xin Chen &#9400; updated at 2020.01.14/01:41am';
var keywords = 'Bao Xin Chen, Bao Chen, Robot Vision, Person Following Robot';
var mypicture = './images/baoxinchen.jpg';
var name = 'Bao Xin Chen 陈宝新';
var mytitle = 'Master\'s student <i class="fas fa-at"></i> <a href="http://www.yorku.ca" target="_blank">York University</a>, Toronto, Canada</br>';

var emails = ['baox[last name][at]cse[dot]yorku[dot]ca', 
				'baoxin[dot][last name][at]outlook[dot]com'];
var citizen = 'Country of Citizenship: Canada <i class="fab fa-canadian-maple-leaf" style="font-size:16px"></i>';

var aboutme = 'I recently completed Master of Science degree at <a href="http://eecs.lassonde.yorku.ca/" target="_blank">York University Electrical Engineering and Computer Science (EECS)</a> department (2016 - 2019) under <a href="http://jtl.lassonde.yorku.ca/" target="_blank">Professor John K. Tsotsos\'</a> supervision. Previously, I earned a Bachelor of science degree from <a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a> computer science department. My focus was on Machine Learning and Computer Vision (2012 - 2016). My current research interest is in <b>Robot Vision</b> (real-time computer vision and machine learning applications on mobile platforms).';

//info_links = [[icon,link], ...]
// e.g., github, linkedin, youtube, google scholar, etc.
var info_links = [
		['<img src="./images/icon_cv.png" alt="CV" style="height:28px; vertical-align: bottom;">', 'cv.pdf'],
		['<img src="./images/icon_transcript_uoft2.png" alt="TranscriptUofT" style="height:28px; vertical-align: bottom;">', 'transcriptUT.pdf'],
		['<img src="./images/icon_transcript_yorku2.png" alt="TranscriptYorkU" style="height:28px; vertical-align: bottom;">', 'transcriptYU.pdf'],
		['<i class="fa fa-linkedin-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://www.linkedin.com/in/baoxinchen'],
		['<i class="fa fa-youtube-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://www.youtube.com/channel/UCe4C3FN8R0iWdbt3hEoNJfQ/playlists'],
		['<i class="fa fa-github-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://github.com/baoxinchen'],
		['<i class="fab fa-researchgate" style="font-size:32px; vertical-align: bottom;"></i>', 'https://www.researchgate.net/profile/Bao_Xin_Chen'],
		['<i class="fas fa-user-graduate" style="font-size:28px; vertical-align: bottom;"></i>', 'https://scholar.google.ca/citations?user=&user=tnaBlxIAAAAJ']
		];

//publications is a list of json objects. 'src', 'authors', and 'title' can't be empty 
var publications = [
		{'src'     : './images/paper7.jpg', 
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
		'links'   : '<a href="http://jtl.lassonde.yorku.ca/2017/02/person-following/" target="_blank">[project page]</a><a href="http://jtl.lassonde.yorku.ca/wp-content/uploads/2017/02/pfr_paper_crv2017.pdf" target="_blank">[paper]</a><a href="./publications/person_following_robot_crv-2017_citation.txt" target="_blank">[cite]</a>'}
		];

// the following 4 arrays are "list of text"
// activities
var activities = [
		'Sep 17th, 2019, passed the thesis oral examination for the degree of Master of Science at York University. My thesis committee members are Prof. John K. Tsostso, Prof. Michael Brown, and Prof. George Z.H. Zhu',
		'Aug 15th, 2019, one paper accepted in <a href="http://icdm2019.bigke.org/" target="_blank">19th IEEE International Conference on Data Mining (ICDM) 2019</a>, Beijing, China.',
		'Aug 12th, 2019, one paper accepted in ICCV 2019 workshop: <a href="http://www.votchallenge.net/vot2019/" target="_blank">VOT2019</a>, Seoul, South Korea.',
		'July 15th, 2019, published a new state-of-the-art <a href="https://arxiv.org/abs/1907.03892" target="_blank">object tracking algorithm</a> for visual object tracking datasets that labeled with rotated bounding boxes (VOT2015-2019). And, the code is available on <a href="https://github.com/baoxinchen/siammask_e" target="_blank">GitHub</a>.',
		'June 7th, 2018, I presented a poster at NCFRN AGM 2018 in Montreal, Quebec.',
		'May 21th, 2018, my paper "Scene Classification in Indoor Environments for Robots using Word Embeddings" appeared at ICRA 2018 Workshop: Representing a Complex World in Brisbane, Australia.',
		'May 10th, 2018, my paper "Indoor Localization in Dynamic Human Environments using Visual Odometry and Global Pose Refinement" appeared at the 15th Conference on Computer and Robot Vision (CRV 2018) in Toronto, Canada.',
		'May 8th-11th, 2018, volunteered at <a href="http://aigicrv.org/2018/" target="_blank">AI-GI-CRV 2018</a> in Toronto, Canada.',
		'May 3th, 2018, one paper accepted by <a href="https://natanaso.github.io/rcw-icra18/" target="_blank">ICRA 2018 Workshop: Representing a Complex World</a>.',
		'July 10th, 2017, orally presented my paper "Integrating Stereo Vision with a CNN Tracker for a Person-Following Robot" at the 11th International Conference on Computer Vision System (ICVS 2017), Shenzhen, China (Shenzhen is a city near my hometown Taishan).',
		'June 13th, 2017, presented a poster at York University CVR & VISTA Internatinal Conference on Vision in the Real World, Toronto, Ontario.',
		'May 19th, 2017, orally presented my paper "Person Following Robot Using Selected Online Ada-Boosting with Stereo Camera" at the 14th Conference on Computer and Robot Vision (CRV 2017), Edmonton, Alberta.',
		'May 1st, 2017, presented two posters at NSERC Canadian Field Robotics Network (NCFRN), Ottawa, Ontario. Our work was covered by  Discovery, the Globe and mail.'
		];

//awards
var graduate_awards = [
		'Queen Elizabeth II Graduate Scholarships in Science & Technology (York University) - offered: CAD $15,000 (2019 - 2020, I rejected).',
		'Queen Elizabeth II Graduate Scholarships in Science & Technology (York University) - Total value: CAD $15,000 (2018 Sep - 2019 Aug).',
		'<a href="http://icvs2017.ram-lab.com/program/awards/" target="_blank"><b>Best Paper Finalist</b></a> award at <a href="http://icvs2017.ram-lab.com/" target="_blank">ICVS 2017</a>, Shenzhen, China',
		'<a href="https://www.cipprs.org/awards.html" target="_blank"><b>Best Robotics Paper</b></a> award at <a href="http://aigicrv.org/2017/" target="_blank">AI-GI-CRV 2017</a>, Edmonton, Canada',
		'<a href="http://www.yorku.ca/" target="_blank">York University</a> Masters Domestic Student Offer funding - Total value: CAD $41,666 (2016 Sep - 2018 Apr).',
		'<a href="http://eecs.lassonde.yorku.ca/" target="_blank">Lassonde Graduate</a> Entrance Scholarship (<a href="http://www.yorku.ca/" target="_blank">York University</a>) - Total value: CAD $8,000 (2016 Sep - 2017 Aug).'
		];
var undergrad_awards = [
		'Graduated with High Distinction (<a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a>) (2016).',
		'Norma Brock Award (<a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a>) - Total value: CAD $3,000 (2014 & 2015).',
		'Dean\'s List (<a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a>) (2013-2016).'
		];
var highschool_awards = ['Ontario Principal\'s Award (2012).'];

/*add image url in this block*/
var imgs = [
		['./images/20170711_124223149_iOS.jpg',      'ICVS2017'],
		['./images/IMG_7964.JPG',                    'UofT2016'],
		['./images/Office_Lens_20170518-233842.jpg', 'CRV2017' ],
		['./images/20170711_125230036_iOS.jpg',      'ICVS2017']
		];

//google analytics personal link, [TODO: detele this part]
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-98720199-1', 'auto');
ga('send', 'pageview');
//end of TODO
