
// var declared 
const path_img = "./assets/images/slideshow/";
var src_img = "";
const dot = "dot";
const dot_selected = "dot_selected";
let pos = 0; // 0 = img de base & pos = img selected 
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//first time building the slider.
slider() ; 

// function bcp plus gourmande que l'autre 
// function delete_slider version with forEach and anonymous fonction 
// function del_slider() {
// 	// Get the div element by its id
// var divElement = document.getElementById("yourDivId");

// // Get all span elements inside the div
// var spanElements = divElement.querySelectorAll("span");

// // Loop through each span element and remove it
// spanElements.forEach(function(span) {
//     span.parentNode.removeChild(span);
// });
// }

// function that build the slider and deletes it to update it if it already exist
function slider() {
	delete_slider();
	const span = document.createElement("span");
	const num_dot = slides.length;
	const id_dot = document.getElementById("dot");

	for (let i = 0; i < num_dot; i++) {
		const span = document.createElement("span");
		i == pos ? span.classList.add(dot, dot_selected) : span.classList.add(dot);
		id_dot.appendChild(span);
	}
}

//Event listener that tells us when the user clicked right 
// update the slider and the img 
function click_right() {
	// venir mettre les tailles dynamique ici 4 
	pos = pos+1 == 4 ? 0 : pos+1; 
	// ++pos;
	// if (pos == 4) { pos = 0; } // taille dynamique a changer/ rajouter car on pense 
	// // pos == 4 ? pos = 0 : pos = pos ;
	swap_img();
	slider();
}

//Event listener that tells us when the user clicked left
// update the slider and the img 
function click_left() {
	// venir mettre les tailles dynamique ici 3 
	pos = pos-1 == -1 ? 3 : pos -1;
	// --pos;
	// if (pos == -1) { pos = 3; }// taille dynamique aussi a rajouter 
	// // pos == -1 ? pos =3 : pos = pos;
	swap_img();
	slider();
}

// function that update the img by taking the new one 
function swap_img() {
	const img = document.getElementsByClassName("banner-img");
	src_img = path_img + slides[pos].image;
	img[0].src = src_img;
	swap_tag_line();
} 

// function that swap the tagLine
function swap_tag_line() {
	const banner = document.getElementById("banner");
	banner.querySelector("img + p ").innerHTML = slides[pos].tagLine;
}

// function that delete the slider => simplest way to do it 
function delete_slider() {
	// Get the div element by its id
	const divElement = document.getElementById("dot");
	// Remove all span elements inside the div
	divElement.innerHTML = "";
}




