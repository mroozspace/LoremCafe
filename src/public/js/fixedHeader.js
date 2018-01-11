
// ======= fixedHeader.js =======

var body = document.getElementsByTagName("body")[0];
var nav = document.getElementsByTagName("nav")[0];
// var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;


window.onscroll = function(){fixedHeader()};
body.onresize = function(){fixedOnResize()};

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
	console.log(scrollPos);
	if(width>768){
		if(scrollPos > 230){
			header.classList.add("fixed-header");
		} else {
			header.classList.remove("fixed-header");
		}
	}
}

// ======= fixedHeader.js =======
