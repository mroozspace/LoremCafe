
// ======= fixedHeader.js =======

var body = document.getElementsByTagName("body")[0];
var nav = document.getElementsByTagName("nav")[0];

window.onscroll = function(){fixedHeader()};

function fixedHeader(){

	var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
	var header = document.getElementById("header");
	// console.log(scrollPos);
	if(scrollPos > 230){
		header.classList.add("header--fixed");
	} else {
		header.classList.remove("header--fixed");
	}
}

// ======= fixedHeader.js =======

var loader = document.getElementById("loader");
var mainSlideShow = document.getElementById('slideShow');
var images = document.getElementsByTagName("img");

document.onreadystatechange = function(){
	switch(document.readyState){
		case "loading":
			// console.log('loading DOM');
			setTimeout(function(){
				// console.log('loading + timeout');
			},1000);
		break;

		case "interactive":
			// console.log('Doc loaded. Changing DOM');
			setTimeout(function(){
				// console.log('doc loaded + timeout');
			},2000);
		break;

		case "complete":
			// console.log('Doc complete');
			setTimeout(function(){
			loader.classList.add("fadeOut");
			// console.log('starting fadeout');
			},2200);
			
			setTimeout(function(){
			// console.log('disappear + timeout');
			loader.style.display = "none"
			},5000);
		break;
	}
};

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

	var modSlideIndex = 0;
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
		// console.log("n : "+n);
		// console.log("modSlideIndex : "+modSlideIndex);

		// conditions to prev and next
		if (n+1 > slides.length){
			modSlideIndex = 0;
			// n=0;
		}
		if (n < 0){
			modSlideIndex = slides.length-1;
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

// keylisteners to change modal

	document.addEventListener("keydown", function(event){
		// console.log(event.key);
		switch (event.key){
			case "ArrowRight":
				changeModSlide(1);
			break;

			case " ":
				changeModSlide(1);
			break;

			case "ArrowLeft":
				changeModSlide(-1);
			break;

			case "Escape":
				closeModal();
			break;
		}
	});
}

// ======= Modal js - end =======

// scrollDown
var btnScroll = document.getElementsByClassName("btn-scroll")[0];

btnScroll.addEventListener("click", scrollDown);

function scrollDown(){
	window.scrollBy({ 
	  top: window.innerHeight,
	  left: 0, 
	  behavior: 'smooth' 
	});
}
// scrollDown