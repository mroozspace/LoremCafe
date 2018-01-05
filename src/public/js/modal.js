
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
