var btnScroll = document.getElementsByClassName("btn-scroll")[0];

btnScroll.addEventListener("click", scrollDown);

function scrollDown(){
	window.scrollBy({ 
	  top: window.innerHeight,
	  left: 0, 
	  behavior: 'smooth' 
	});
}