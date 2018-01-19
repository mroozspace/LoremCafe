
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
