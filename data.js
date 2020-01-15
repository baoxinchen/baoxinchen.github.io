/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/baoxinchen/
*/

var copyright = 'Bao Xin Chen &#9400; updated at 2020.01.15/04:17am <a href="https://github.com/baoxinchen/baoxinchen" target="_blank">[source code]</a>';
var keywords = 'Bao Xin Chen, Bao Chen, Robot Vision, Person Following Robot';
var mypicture = './images/baoxinchen.jpg'; // this picture will display in the top left corner
var name = 'Bao Xin Chen 陈宝新';
var mytitle = 'Master\'s student @ <a href="http://www.yorku.ca" target="_blank">York University</a>, Toronto, Canada';

var emails = ['baox[last name][at]cse[dot]yorku[dot]ca', 
		'baoxin[dot][last name][at]outlook[dot]com'];
var citizen = 'Country of Citizenship: Canada <i class="fab fa-canadian-maple-leaf" style="font-size:16px"></i>';

var aboutme = 'I recently completed the Master of Science degree at <a href="http://eecs.lassonde.yorku.ca/" target="_blank">York University Electrical Engineering and Computer Science (EECS)</a> department (2016 - 2019) under <a href="http://jtl.lassonde.yorku.ca/" target="_blank">Professor John K. Tsotsos\'</a> supervision. Previously, I earned a Bachelor of Science degree from <a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a> computer science department. My focus was on Machine Learning and Computer Vision (2012 - 2016). My current research interest is in <b>Robot Vision</b> (real-time computer vision and machine learning applications on mobile platforms).';

// info_links = [[icon,link], ...]
// e.g., github, linkedin, youtube, google scholar, etc.
var info_links = [
		['<img src="./images/icon_cv.png" alt="CV" style="height:28px; vertical-align: bottom;">', './files/cv.pdf'],
		['<img src="./images/icon_transcript_uoft2.png" alt="TranscriptUofT" style="height:28px; vertical-align: bottom;">', './files/transcriptUT.pdf'],
		['<img src="./images/icon_transcript_yorku2.png" alt="TranscriptYorkU" style="height:28px; vertical-align: bottom;">', './files/transcriptYU.pdf'],
		['<i class="fa fa-linkedin-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://www.linkedin.com/in/baoxinchen'],
		['<i class="fa fa-youtube-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://www.youtube.com/channel/UCe4C3FN8R0iWdbt3hEoNJfQ/playlists'],
		['<i class="fa fa-github-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://github.com/baoxinchen'],
		['<i class="fab fa-researchgate" style="font-size:32px; vertical-align: bottom;"></i>', 'https://www.researchgate.net/profile/Bao_Xin_Chen'],
		['<i class="fas fa-user-graduate" style="font-size:28px; vertical-align: bottom;"></i>', 'https://scholar.google.ca/citations?user=&user=tnaBlxIAAAAJ']
		];

// co_author_list = {'author name': 'link', ...}
// this autors will appear in variable "publications"
var co_author_list = {
	'Xing Zhao'            : 'http://www.cse.yorku.ca/~xingzhao/',
	'Manos Papagelis'      : 'https://www.eecs.yorku.ca/~papaggel/',
	'Aijun An'             : 'http://www.cse.yorku.ca/~aan/',
	'Junfeng Liu'          : '',
	'Yonggang Hu'          : '',
	'John K. Tsotsos'      : 'http://www.cse.yorku.ca/~tsotsos',
	'Raghavender Sahdev'   : 'http://www.raghavendersahdev.com/',
	'Raghavender Sahdev*'  : 'http://www.raghavendersahdev.com/',
	'Dekun Wu'             : 'https://jackwu502.github.io/',
	'<b>Bao Xin Chen</b>'  : '',
	'<b>Bao Xin Chen</b>*' : '',
	'Author\'s Name'       : 'This author\'s homepage link'
};

// publications is a list of json objects. 
// If 'title' is empty, the entry will not display on the webpage.
var publications = [
		{'src'    : '', // image url, will display on the left side
		'alt'     : '', // if image is not available, this string will display on the left side
		'authors' : [], // name must be able to find in co_author_list
		'title'   : '', // title can't be empty
		'conf'    : '', // conference information
		'info'    : '', // extra information for the paper. e.g., Oral, Poster, etc.
		'award'   : '', // dispay awards
		'links'   : {}  // external links. e.g., link to the paper, project page, videos, arXiv, etc.
		},
		
		{'src'    : './images/paper7.jpg', 
		'alt'     : 'Elastic BSP',
		'authors' : ['Xing Zhao', 'Manos Papagelis', 'Aijun An', '<b>Bao Xin Chen</b>', 'Junfeng Liu', 'Yonggang Hu'],
		'title'   : 'Elastic Bulk Synchronous Parallel Model for Distributed Deep Learning',
		'conf'    : 'in <i>19th IEEE International Conference on Data Mining (ICDM)</i>, 2019.',
		'info'    : 'Short Paper',
		'award'   : '',
		'links'   : {
			'[paper]' : 'https://www.eecs.yorku.ca/~papaggel/docs/papers/all/ieee-icdm19-zipline.pdf',
			'[arXiv]' : 'https://arxiv.org/abs/2001.01347',
			'[cite]'  : './publications/EBSP_ICDM_2019_citation.txt'
			}
		},

		{'src'    : './images/paper6_3.jpg', 
		'alt'     : 'Visual Object Tracking',
		'authors' : ['<b>Bao Xin Chen</b>', 'John K. Tsotsos'],
		'title'   : 'Fast Visual Object Tracking with Rotated Bounding Boxes',
		'conf'    : 'in <i>IEEE/CVF International Conference on Computer Vision (ICCV) Workshop</i>, 2019.',
		'info'    : 'Oral and Poster at workshop: <a href="http://www.votchallenge.net/vot2019/" target="_blank">VOT 2019</a>',
		'award'   : '',
		'links'   : {
			'[paper]'  : 'http://openaccess.thecvf.com/content_ICCVW_2019/papers/VOT/Chen_Fast_Visual_Object_Tracking_using_Ellipse_Fitting_for_Rotated_Bounding_ICCVW_2019_paper.pdf',
			'[arXiv]'  : 'https://arxiv.org/abs/1907.03892',
			'[poster]' : './publications/vot2019_poster.pdf',
			'[cite]'   : './publications/fastVOT_arXiv_2019_citation.txt',
			'[code]'   : 'https://github.com/baoxinchen/siammask_e'
			}
		},

		{'src'    : './images/paper5_3.jpg', 
		'alt'     : 'DSSP',
		'authors' : ['Xing Zhao', 'Aijun An', 'Junfeng Liu', '<b>Bao Xin Chen</b>'],
		'title'   : 'Dynamic Stale Synchronous Parallel Distributed Training for Deep Learning',
		'conf'    : 'in <i>39th International Conference on Distributed Computing Systems (ICDCS)</i>, IEEE, 2019, pp. 1508-1517.',
		'info'    : '<b>Oral</b>',
		'award'   : '',
		'links'   : {
			'[paper]' : './publications/DSSP_ICDCS_2019.pdf',
			'[arXiv]' : 'https://arxiv.org/abs/1908.11848',
			'[cite]'  : './publications/DSSP_icdcs-2019_citation.txt'
			}
		},

		{'src'    : './images/paper4_2.png', 
		'alt'     : 'Words',
		'authors' : ['<b>Bao Xin Chen</b>', 'Raghavender Sahdev', 'Dekun Wu', 'Xing Zhao', 'Manos Papagelis', 'John K. Tsotsos'],
		'title'   : 'Scene Classification in Indoor Environments for Robots using Word Embeddings',
		'conf'    : 'in <i>IEEE International Conference on Robotics and Automation (ICRA) Workshop</i>, 2018.',
		'info'    : 'Oral and Poster at workshop: <a href="https://natanaso.github.io/rcw-icra18/" target="_blank">Multimodal Robot Perception 2018</a>',
		'award'   : '',
		'links'   : {
			'[project page]' : 'http://jtl.lassonde.yorku.ca/2018/04/scene-classification-robots/',
			'[videos]'       : 'https://www.youtube.com/playlist?list=PL_PLOWFkDLAYi8WQzvlWuVtNuUAGmHMpu',
			'[paper]'        : 'https://natanaso.github.io/rcw-icra18/assets/ref/ICRA-MRP18_paper_25.pdf',
			'[arXiv]'        : 'https://arxiv.org/abs/1908.06422',
			'[cite]'         : './publications/scene_classification_using_word_embedding_icra-2018workshop_citation.txt'
			}
		},

		{'src'    : './images/paper3_2.png', 
		'alt'     : 'Robot',
		'authors' : ['Raghavender Sahdev', '<b>Bao Xin Chen</b>', 'John K. Tsotsos'],
		'title'   : 'Indoor Localization in Dynamic Human Environments using Visual Odometry and Global Pose Refinement',
		'conf'    : 'in <i>Computer and Robot Vision (CRV), 2018 15th Conference on</i>, IEEE, 2018, pp. 360-367.',
		'info'    : 'Poster',
		'award'   : '',
		'links'   : {
			'[project page]' : 'http://jtl.lassonde.yorku.ca/2018/02/localization-among-humans/',
			'[paper]'        : 'https://www.raghavendersahdev.com/uploads/3/9/6/2/39623741/localization_among_humans_crv-2018.pdf',
			'[cite]'         : './publications/localization_among_humans_crv-2018_citation.txt'
			}
		},

		{'src'    : './images/paper2_2.png', 
		'alt'     : 'Robot',
		'authors' : ['<b>Bao Xin Chen</b>*', 'Raghavender Sahdev*', 'John K. Tsotsos'],
		'title'   : 'Integrating Stereo Vision with a CNN Tracker for a Person-Following Robot',
		'conf'    : 'in <i>11th International Conference on Computer Vision Systems (ICVS)</i>, Springer, 2017, pp. 300-313.',
		'info'    : '<b>Oral</b> in highlighted section',
		'award'   : 'Received <a href="http://icvs2017.ram-lab.com/program/awards/" target="_blank"><b>Best Paper Finalist</b></a> award at ICVS 2017, Shenzhen, China',
		'links'   : {
			'[project page]' : 'http://jtl.lassonde.yorku.ca/2017/05/person-following-cnn/',
			'[videos]'       : 'https://www.youtube.com/playlist?list=PL_PLOWFkDLAaWp7P3IEgyoyreIa8sFIIW',
			'[paper]'        : 'http://jtl.lassonde.yorku.ca/wp-content/uploads/2017/05/personfollowingrobotcnn_icvs2017.pdf',
			'[cite]'         : './publications/person_following_robot_icvs-2017_citation.txt'
			}
		},

		{'src'    : './images/paper1_2.png', 
		'alt'     : 'Robot',
		'authors' : ['<b>Bao Xin Chen</b>*', 'Raghavender Sahdev*', 'John K. Tsotsos'],
		'title'   : 'Person Following Robot Using Selected Online Ada-Boosting with Stereo Camera',
		'conf'    : 'in <i>Computer and Robot Vision (CRV), 2017 14th Conference on</i>, IEEE, 2017, pp. 48-55.',
		'info'    : '<b>Oral</b>',
		'award'   : 'Received <a href="https://www.cipprs.org/awards.html" target="_blank"><b>Best Robotics Paper</b></a> award at AI-GI-CRV 2017, Edmonton, Canada',
		'links'   : {
			'[project page]' : 'http://jtl.lassonde.yorku.ca/2017/02/person-following/',
			'[paper]'        : 'http://jtl.lassonde.yorku.ca/wp-content/uploads/2017/02/pfr_paper_crv2017.pdf',
			'[cite]'         : './publications/person_following_robot_crv-2017_citation.txt'
			}
		}
		];

/* the following 4 arrays are "list of text" */

// activities
// empty string will be skipped
var activities = [
		'', // add a news here
		'Sep 17th, 2019, passed the thesis oral examination for the degree of Master of Science at York University. My thesis committee members are Prof. John K. Tsostso, Prof. Michael Brown, and Prof. George Z.H. Zhu',
		'Aug 15th, 2019, one paper accepted in 19th IEEE International Conference on Data Mining (ICDM) 2019, Beijing, China.',
		'Aug 12th, 2019, one paper accepted in ICCV 2019 workshop: <a href="http://www.votchallenge.net/vot2019/" target="_blank">VOT 2019</a>, Seoul, South Korea.',
		'July 15th, 2019, published a new state-of-the-art object tracking algorithm for visual object tracking datasets that labeled with rotated bounding boxes (VOT 2015-2019). And, the code is available on <a href="https://github.com/baoxinchen/siammask_e" target="_blank">GitHub</a>.',
		'June 7th, 2018, I presented a poster at NCFRN AGM 2018 in Montreal, Quebec.',
		'May 21th, 2018, my paper "Scene Classification in Indoor Environments for Robots using Word Embeddings" appeared at ICRA 2018 Workshop: Representing a Complex World in Brisbane, Australia.',
		'May 10th, 2018, my paper "Indoor Localization in Dynamic Human Environments using Visual Odometry and Global Pose Refinement" appeared at the 15th Conference on Computer and Robot Vision (CRV 2018) in Toronto, Canada.',
		'May 8th-11th, 2018, volunteered at AI-GI-CRV 2018 in Toronto, Canada.',
		'May 3th, 2018, one paper accepted by ICRA 2018 Workshop: Representing a Complex World.',
		'July 10th, 2017, orally presented my paper "Integrating Stereo Vision with a CNN Tracker for a Person-Following Robot" at the 11th International Conference on Computer Vision System (ICVS 2017), Shenzhen, China (Shenzhen is a city near my hometown Taishan).',
		'June 13th, 2017, presented a poster at York University CVR & VISTA Internatinal Conference on Vision in the Real World, Toronto, Ontario.',
		'May 19th, 2017, orally presented my paper "Person Following Robot Using Selected Online Ada-Boosting with Stereo Camera" at the 14th Conference on Computer and Robot Vision (CRV 2017), Edmonton, Alberta.',
		'May 1st, 2017, presented two posters at NSERC Canadian Field Robotics Network (NCFRN), Ottawa, Ontario. Our work was covered by  Discovery, the Globe and mail.'
		];

// awards
// empty string will be skipped
var graduate_awards = [
		'', // add an award here 
		'Queen Elizabeth II Graduate Scholarships in Science & Technology (York University) - offered: CAD $15,000 (2019 - 2020, I rejected).',
		'Queen Elizabeth II Graduate Scholarships in Science & Technology (York University) - Total value: CAD $15,000 (2018 Sep - 2019 Aug).',
		'<a href="http://icvs2017.ram-lab.com/program/awards/" target="_blank"><b>Best Paper Finalist</b></a> award at ICVS 2017, Shenzhen, China',
		'<a href="https://www.cipprs.org/awards.html" target="_blank"><b>Best Robotics Paper</b></a> award at AI-GI-CRV 2017, Edmonton, Canada',
		'York University Masters Domestic Student Offer funding - Total value: CAD $41,666 (2016 Sep - 2018 Apr).',
		'Lassonde Graduate Entrance Scholarship (York University) - Total value: CAD $8,000 (2016 Sep - 2017 Aug).'
		];
var undergrad_awards = [
		'', // add an award here
		'Graduated with High Distinction (University of Toronto) (2016).',
		'Norma Brock Award (University of Toronto) - Total value: CAD $3,000 (2014 & 2015).',
		'Dean\'s List (University of Toronto) (2013-2016).'
		];
var highschool_awards = ['Ontario Principal\'s Award (2012).']; // set to [], if you don't want to list awards from high school

// add image url in this block
// imgs = [['url', 'Description'], ...]
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
