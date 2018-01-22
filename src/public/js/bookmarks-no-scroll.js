var checkbox = document.getElementsByClassName("menu__checkbox")[0];

checkbox.addEventListener("click", function(){
	document.querySelector('body').classList.toggle("no-scroll");
})

