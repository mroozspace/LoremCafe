var moka = document.getElementById("moka");
var mokaText = document.querySelector(".moka-text");
var french = document.getElementById("french");
var mokaText = document.querySelector(".french-text");
var eksp = document.getElementById("eksp");
var mokaText = document.querySelector(".eksp-text");

var abcImg = document.querySelectorAll(".abc-img");
var textBox = document.querySelector(".side-text-abc");

for (var i=0; i<abcImg.length; i++){
	abcImg[i].addEventListener("mouseover", function(){
		this.classList.add("zoomIn");
	});
	abcImg[i].addEventListener("mouseout", function(){
		this.classList.remove("zoomIn");
	});
}


// for (var i=0; i<abcImg.length; i++){
// 	abcImg[i].addEventListener("mouseover", function(){
// 		this.classList.add("abcChoice");
// 	});
// 	abcImg[i].addEventListener("mouseout", function(){
// 		this.classList.remove("abcChoice");
// 	});
// }

for (var i=0; i<abcImg.length; i++){
	abcImg[i].addEventListener("click", function(){
		textBox.classList.add("boxSlideIn");
		if (this.id == moka){
			mokaText.classList.add("textReveal")
			console.log(mokaText);
			console.log(mokaText.classList);
		};
		if (this.id == french){ frenchText.classList.add("textReveal")};
		if (this.id == eksp){ ekspText.classList.add("textReveal")};

	});
}