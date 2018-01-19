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
