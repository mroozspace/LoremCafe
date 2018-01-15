var loader = document.getElementById("loader");
var mainSlideShow = document.getElementById('slideShow');

if(mainSlideShow){

window.addEventListener('load',closePreload());

	function closePreload(){

		setTimeout(function(){
			loader.classList.add("fadeOut");
		},2000);
		setTimeout(function(){
			loader.style.display="none";
		},4000);
	}
}