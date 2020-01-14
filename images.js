/*wrote by Bao Xin Chen*/
			
var slideIndex = 1;

window.onload = function(){
	//set name and title
    $("#name").html(name);
	$("#mytitle").html(mytitle);
	
	//set emails
	var html_text = '';
	for (i = 0; i < emails.length; i++) {
		html_text = html_text+'<i class="fas fa-envelope" style="font-size:16px"></i> ';
		html_text = html_text+emails[i];
		if (i < emails.length-1)
			html_text = html_text+'; ';
	}
	$("#emails").html(html_text);
	
	// add images
	set_images(imgs);
	
	// start slide show
	showSlides(slideIndex);
}

function set_images(imgs){
	//set canvas
	for (i = 0; i < imgs.length; i++) {
		var div = document.createElement("div");
		$(div).attr("class", "mySlides");
		var num_text_div = document.createElement("div");
		$(num_text_div).attr("class", "numbertext");
		$(num_text_div).html((i+1)+" / "+imgs.length);
		$(div).append(num_text_div);
		var img = document.createElement("img");
		$(img).attr("class", "display");
		$(img).attr("src", imgs[i][0]);
		$(div).append(img);
		$("#canvas").append(div);
	}
	
	//set thumbnail
	var num_col = 7;
	var num_row = Math.floor(imgs.length / num_col)+1;
	console.dir(num_row);
	for (i = 0; i < num_row; i++) {
		var row_div = document.createElement("div");
		$(row_div).attr("class", "row");
		for (j = 0; (j < num_col && !(i == num_row-1)) || (j < imgs.length%num_col && i == num_row-1); j++) {
			var col_div = document.createElement("div");
			$(col_div).attr("class", "column");
			var img = document.createElement("img");
			$(img).attr("class", "demo cursor");
			console.dir(i*num_col+j);
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}