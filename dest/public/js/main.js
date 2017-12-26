window.onscroll = function(){fixedHeader()};

function fixedHeader(){

	// var scrollPos = window.scrollY;
	var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
	var header = document.getElementById("header");

	// console.log(scrollPos);

	if(scrollPos > 230){
		
		// add class
		header.classList.add("fixed-header");
	} else {
		header.classList.remove("fixed-header");
		// console.log("scroll position: "+window.scrollY);
	}

}
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 10000);
}