
// ======= Modal js - start =======

var modalpage = document.getElementById("myModal");

// for (var i=0; i<menuItems.length; i++){
	// menuItems[i].addEventListener("mouseover", function(){
		// this.classList.add("zoomIn");

if(modalpage){

	var close = document.getElementsByClassName("modal__close")[0];
	var prev = document.getElementsByClassName('prev')[0]
	var next = document.getElementsByClassName("next")[0];


	var modalSlideIndex = 0;
	var slides = document.getElementsByClassName("modal__slides");
	var slidesLength = slides.length;
	var dots = document.getElementsByClassName("column__img");

	close.addEventListener("click", closeModal);
	
	prev.addEventListener("click", function(){
		changeModalSlide(-1);
	});
	
	next.addEventListener("click", function(){
		changeModalSlide(1);
	});

	function openModal(){
		document.getElementById("myModal").style.display="block";
		document.querySelector('body').classList.add("no-scroll");
		// document.getElementById('moments-page-wrap').classList.add("blur");
	}

	function closeModal(){
		document.getElementById("myModal").style.display="none";	
		document.querySelector('body').classList.remove("no-scroll");
		// document.getElementById('moments-page-wrap').classList.remove("blur");
	}

	showModalSlides(modalSlideIndex);

	function changeModalSlide(n){
		showModalSlides(modalSlideIndex += n);
	}

	function currentModalSlide(n){
		showModalSlides(modalSlideIndex = n-1);
	}

	function showModalSlides(n){
		// console.log("n : "+n);
		// console.log("modalSlideIndex : "+modalSlideIndex);

		// conditions to prev and next
		if (n+1 > slides.length){
			modalSlideIndex = 0;
			// n=0;
		}
		if (n < 0){
			modalSlideIndex = slides.length-1;
		}

		// change of slide 
		for ( i=0; i < slides.length; i++ ){
			slides[i].style.display = "none";
		}	
		slides[modalSlideIndex].style.display = "block";

		// change of dot
		for (i=0; i < dots.length ; i++){
			dots[i].classList.remove("active")
		}
		dots[modalSlideIndex].classList.add("active");
	}

// keylisteners

	document.addEventListener("keydown", function(event){
		// console.log(event.key);
		switch (event.key){
			case "ArrowRight":
				changeModalSlide(1);
			break;

			case " ":
				changeModalSlide(1);
			break;

			case "ArrowLeft":
				changeModalSlide(-1);
			break;

			case "Escape":
				closeModal();
			break;
		}
	});
}

// ======= Modal js - end =======
