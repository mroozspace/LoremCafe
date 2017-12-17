// defining cards
var espressoCard = {
	title: "Espresso",
	price: "8 Pln",
	description: "mocna, mało kawy",
	isClicked : false
}
var latteCard = {
	title: "Latte",
	price: "12 Pln",
	description: "słaba, mało kawy, dużo mleka",
	isClicked : false
}
var iceCard = {
	title: "Ice",
	price: "10 Pln",
	description: "słaba, połowa lodu",
	isClicked : false
}
var blackCard = {
	title: "Czarne",
	price: "8 / 10 / 12 Pln",
	description: "do wyboru : mała / średnia / duża",
	isClicked : false
}
var fruitCard = {
	title: "Owocowe",
	price: "8 / 10 / 12 Pln",
	description: "do wyboru : bananowe / wiśniowe / mix",
	isClicked : false
}
var greenCard = {
	title: "green",
	price: "8 / 10 / 12 Pln",
	description: "do wyboru : mała / średnia / duża",
	isClicked : false
}
var sandwichCard = {
	title: "Kanapki",
	price: "8 / 10 / 12 Pln",
	description: "do wyboru : ser / ser+szynka / ser+szynka+sałata",
	isClicked : false
}
var tostCard = {
	title: "Tosty",
	price: "8 / 10 / 12 Pln",
	description: "do wyboru : ser / ser+szynka / ser+szynka+ketchup",
	isClicked : false
}
var cakeCard = {
	title: "Ciasta",
	price: "8 / 10 / 12 Pln",
	description: "do wyboru : Rafaello / Snickers / Szarlotka",
	isClicked : false
}
var icecreamCard = {
	title: "Lody",
	price: "12 / 14 / 14 Pln",
	description: "do wyboru : śmietankowe / cytrynowe / bakaliowe",
	isClicked : false
}
// choosing all menu cards -> hover effect 
var menuItems = document.querySelectorAll(".menuItem");

for (var i=0; i<menuItems.length; i++){
	menuItems[i].addEventListener("mouseover", function(){
		this.classList.add("zoomIn");
	});
	menuItems[i].addEventListener("mouseout",function(){
		this.classList.remove("zoomIn");
		// hover 
	});
}

// adding animation & content change
function moreInfo(clicked_id){
	var card = document.getElementById(clicked_id);
	var card_p = document.querySelector("clicked_id"+ " " + "p"); //<-- nie dziala ??
	
	if (card == espresso){menuCard=espressoCard};
	if (card == latte){menuCard=latteCard};
	if (card == icecoffee){menuCard=iceCard};
	if (card == black){menuCard=blackCard};
	if (card == fruit){menuCard=fruitCard};
	if (card == green){menuCard=greenCard};
	if (card == sandwich){menuCard=sandwichCard};
	if (card == tost){menuCard=tostCard};
	if (card == cake){menuCard=cakeCard};
	if (card == icecream){menuCard=icecreamCard};
	
	if(!card.isClicked){
		setTimeout(function(){
			// dodac klase zamiast tego
		 	card.style.transform = "scale(1)";
			card.style.transform = "rotateY(90deg)";
		}, 100);
		// card.classList.add("menuAnimate")},100);1
		
		setTimeout(function(){
			card.style.transform = "rotateY(0deg)";
			card.classList.add("darken");
			console.log("card: "+card);

			console.log("card_p: "+card.p);
			card.style.transform = "scale(1.05)";

			card.innerHTML = 
			"<ul id='cardDescription'>"+
			"<li>"+menuCard.title+"</li>"+
			"<li>"+"Cena: "+menuCard.price+"</li>"+
			"<li>"+menuCard.description+"</li>"+
			"</ul>";

			console.log(card.innerHTML);
		}, 700);

	} else {
			setTimeout(function(){
		 		card.style.transform = "rotateY(90deg)";
		 		card.style.transform = "scale(1)";
		 		card.classList.remove("darken");
		 		card.style = "null";
				}, 100);

			setTimeout(function(){
				// card.style.transform = "rotateY(140deg)";
				card.innerHTML = "<p>"+menuCard.title+"</p>";
			},700);
				card.style.transform = "null";
		 	

			// card.style.transform = "rotateY(0deg)";
			// card.style.transform = "scale(1)";
			
			}

			
			
	card.isClicked = !card.isClicked;

	console.log(clicked_id);
	console.log(card.isClicked);


}

