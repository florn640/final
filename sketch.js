//variables
var foodcourtImg;

// images
function preload() {
	foodcourtImg = loadImage("images/foodcourt.png");

}

function setup() {
	// create a place to draw
	createCanvas(1270, 630);
}

function draw() {
	image(foodcourtImg, 0, 0);



}
