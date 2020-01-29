/*
wrote by Bao Xin Chen
https://baoxinchen.github.io/
*/
			
var slideIndex = 1;

window.onload = function(){
	//set name and title
	$("title").html(name + ' Gallery');
	$("#name_small").children("a").html(name);
	$("#mytitle").html(mytitle);
	
	//set emails
	for (var i = 0; i < emails.length; i++) {
		var icon = $('<i></i>');
		$(icon).addClass("fas fa-envelope");
		$(icon).css("font-size", "16px");
		$("#emails").append(icon);
		var span = $('<span></span>');
		$(span).html(' '+emails[i]+((i < emails.length-1)?'; ':''));
		$("#emails").append(span);
	}
	
	// add images
	set_images(imgs);
	
	// start slide show
	showSlides(slideIndex);
	
	//clustrmaps
	$("#map").html(map);
	
	// copyright
	$("#copyright").html(copyright);
}

function set_images(imgs){
	//set canvas
	for (var i = 0; i < imgs.length; i++) {
		var div = $('<div></div>');
		$(div).addClass("mySlides");
		var num_text_div = $('<div></div>');
		$(num_text_div).addClass("numbertext");
		$(num_text_div).html((i+1)+" / "+imgs.length);
		$(div).append(num_text_div);
		var img = $('<img>');
		$(img).addClass("display");
		$(img).attr("src", imgs[i][0]);
		$(img).attr("alt", imgs[i][1]);
		$(div).append(img);
		$("#canvas").append(div);
	}
	
	//set thumbnail
	var num_col = 7;
	var num_row = Math.floor(imgs.length / num_col)+1;
	for (var i = 0; i < num_row; i++) {
		var row_div = $('<div></div>');
		$(row_div).addClass("row");
		for (var j = 0; (j < num_col && !(i == num_row-1)) || (j < imgs.length%num_col && i == num_row-1); j++) {
			var col_div = $('<div></div>');
			$(col_div).addClass("column");
			var img = $('<img>');
			$(img).addClass("demo cursor");
			$(img).attr("src", imgs[i*num_col+j][0]);
			$(img).attr("onclick", "currentSlide("+(i*num_col+j+1)+")");
			$(img).attr("alt", imgs[i*num_col+j][1]);
			$(col_div).append(img);
			$(row_div).append(col_div);
		}
		$("#thumbnail").append(row_div);
	}
}

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var slides = $(".mySlides");
	var dots = $(".demo");
	var captionText = $("#caption");
	
	if (n > slides.length)
		slideIndex = 1;
	if (n < 1)
		slideIndex = slides.length;
	for (var i = 0; i < slides.length; i++)
		slides.eq(i).css("display", "none");
	for (var i = 0; i < dots.length; i++)
		dots.eq(i).removeClass("active");
		
	slides.eq(slideIndex-1).css("display", "block");
	dots.eq(slideIndex-1).addClass("active");
	captionText.html(dots[slideIndex-1].alt);
}
