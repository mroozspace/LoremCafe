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
function initMap() {
  var warsaw = {lat: 52.229852, lng: 21.011723};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: warsaw
  });
    var marker = new google.maps.Marker({
    position: warsaw,
    map: map
});
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