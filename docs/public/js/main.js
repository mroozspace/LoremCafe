
// ======= fixedHeader.js =======

var body = document.getElementsByTagName("body")[0];
var nav = document.getElementsByTagName("nav")[0];

window.onscroll = function(){fixedHeader()};
body.onresize = function() {fixedOnResize()};

fixedOnResize();


function fixedOnResize(){

	var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	if(width<=768){
		header.classList.add("fixed-header");
		nav.style.display = "block";
	} 
	if(width>768){
		header.classList.remove("fixed-header");
		nav.style.display = "none";
	}

	// console.log(width);
}

function fixedHeader(){

	var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
	var header = document.getElementById("header");

	if(width>768){
		if(scrollPos > 230){
			header.classList.add("fixed-header");
		} else {
			header.classList.remove("fixed-header");
		}
	}
}

// ======= fixedHeader.js =======

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

// ======= Modal js - start =======

var modalpage = document.getElementById("myModal");

if(modalpage){

var modSlideIndex = 1;
var slides = document.getElementsByClassName("myModSlides");
var slidesLength = slides.length;
var dots = document.getElementsByClassName("mod-img");


function openModal(){
	document.getElementById("myModal").style.display="block";
	document.querySelector('body').classList.add("no-scroll");
	document.getElementById('moments-page-wrap').classList.add("blur");
}

function closeModal(){
	document.getElementById("myModal").style.display="none";	
	document.querySelector('body').classList.remove("no-scroll");
	document.getElementById('moments-page-wrap').classList.remove("blur");
}


showModSlides(modSlideIndex);

function changeModSlide(n){
	showModSlides(modSlideIndex += n);
}

function currentModSlide(n){
	showModSlides(modSlideIndex = n-1);
}

function showModSlides(n){
	// conditions to prev and next
	if (n+1 > slides.length){
		modSlideIndex = 0;
	}
	if (n < 0){
		modSlideIndex = slides.length;
	}

	// change of slide 
	for ( i=0; i < slides.length; i++ ){
		slides[i].style.display = "none";
	}	
	slides[modSlideIndex].style.display = "block";

	// change of dot
	for (i=0; i < dots.length ; i++){
		dots[i].classList.remove("active")
	}
	dots[modSlideIndex].classList.add("active");
}

}

// ======= Modal js - end =======


// ======= index slideshow js - start 
var mainSlideShow = document.getElementById('slideShow');

if(mainSlideShow){

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
}
// ======= index slideshow js - end 
