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