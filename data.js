var keywords = 'Bao Xin Chen, Bao Chen, Robot Vision, Person Following Robot';
var mypicture = './images/baoxinchen.jpg';
var name = 'Bao Xin Chen 陈宝新';
var mytitle = 'Master\'s student <i class="fas fa-at"></i> <a href="http://www.yorku.ca" target="_blank">York University</a>, Toronto, Canada</br>';

var emails = ['baox[last name][at]cse[dot]yorku[dot]ca', 
			  'baoxin[dot][last name][at]outlook[dot]com'];
var citizen = 'Country of Citizenship: Canada <i class="fab fa-canadian-maple-leaf" style="font-size:16px"></i>';

var aboutme = 'I recently completed a masters degree at<a href="http://eecs.lassonde.yorku.ca/" target="_blank">York University Electrical Engineering and Computer Science (EECS)</a> department (2016 - 2019) under <a href="http://jtl.lassonde.yorku.ca/" target="_blank">Professor John K. Tsotsos\'</a> supervision. Previously, I was an undergrad student in <a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a> computer science department. My focus was on Machine Learning and Computer Vision (2012 - 2016). My current research interest is in <b>Robot Vision</b> (real-time computer vision and machine learning applications on mobile platforms) and I am open for <b>project collaborations</b> (no limited to object detection/segmentation, object tracking, image classification, robot control, navigation, autonomous vehicle related projects, etc).';

//info_links = [[icon,link], ...]
var info_links = [['<img src="./images/icon_cv.png" alt="CV" style="height:28px; vertical-align: bottom;">', 'cv.pdf'],
                  ['<img src="./images/icon_transcript_uoft2.png" alt="TranscriptUofT" style="height:28px; vertical-align: bottom;">', 'transcriptUT.pdf'],
                  ['<img src="./images/icon_transcript_yorku2.png" alt="TranscriptYorkU" style="height:28px; vertical-align: bottom;">', 'transcriptYU.pdf'],
                  ['<i class="fa fa-linkedin-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://www.linkedin.com/in/baoxinchen'],
                  ['<i class="fa fa-youtube-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://www.youtube.com/channel/UCe4C3FN8R0iWdbt3hEoNJfQ/playlists'],
                  ['<i class="fa fa-github-square" style="font-size:33px; vertical-align: bottom;"></i>', 'https://github.com/baoxinchen'],
                  ['<i class="fab fa-researchgate" style="font-size:32px; vertical-align: bottom;"></i>', 'https://www.researchgate.net/profile/Bao_Xin_Chen'],
                  ['<i class="fas fa-user-graduate" style="font-size:28px; vertical-align: bottom;"></i>', 'https://scholar.google.ca/citations?user=&user=tnaBlxIAAAAJ']];

// the following 4 arrays are "list of text"
var activities = ['Sep 17th, 2019, passed the thesis oral examination for the degree of Master of Science at York University. My thesis committee members are Prof. John K. Tsostso, Prof. Michael Brown, and Prof. George Z.H. Zhu',
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
				  'May 1st, 2017, presented two posters at NSERC Canadian Field Robotics Network (NCFRN), Ottawa, Ontario. Our work was covered by  Discovery, the Globe and mail.'];

var graduate_awards   = ['Queen Elizabeth II Graduate Scholarships in Science & Technology (York University) - offered: CAD $15,000 (2019 - 2020, I rejected).',
                         'Queen Elizabeth II Graduate Scholarships in Science & Technology (York University) - Total value: CAD $15,000 (2018 Sep - 2019 Aug).',
						 '<a href="http://icvs2017.ram-lab.com/program/awards/" target="_blank"><b>Best Paper Finalist</b></a> award at <a href="http://icvs2017.ram-lab.com/" target="_blank">ICVS 2017</a>, Shenzhen, China',
						 '<a href="https://www.cipprs.org/awards.html" target="_blank"><b>Best Robotics Paper</b></a> award at <a href="http://aigicrv.org/2017/" target="_blank">AI-GI-CRV 2017</a>, Edmonton, Canada',
						 '<a href="http://www.yorku.ca/" target="_blank">York University</a> Masters Domestic Student Offer funding - Total value: CAD $41,666 (2016 Sep - 2018 Apr).',
						 '<a href="http://eecs.lassonde.yorku.ca/" target="_blank">Lassonde Graduate</a> Entrance Scholarship (<a href="http://www.yorku.ca/" target="_blank">York University</a>) - Total value: CAD $8,000 (2016 Sep - 2017 Aug).'];
var undergrad_awards  = ['Graduated with High Distinction (<a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a>) (2016).',
                         'Norma Brock Award (<a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a>) - Total value: CAD $3,000 (2014 & 2015).',
						 'Dean\'s List (<a href="https://www.utoronto.ca/" target="_blank">University of Toronto</a>) (2013-2016).'];
var highschool_awards = ['Ontario Principal\'s Award (2012).'];

//google analytics personal link, [TODO: detele this part]
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-98720199-1', 'auto');
ga('send', 'pageview');
//end of TODO
