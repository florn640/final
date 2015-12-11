console.log(mouseX, mouseY);
//variables
var foodcourtImg;
var cow1Img;
var cow2Img;

// images
function preload() {
	foodcourtImg = loadImage("images/foodcourt.png");
	cow1Img = loadImage("images/cow1.png");
	cow2Img = loadImage("images/cow2.png");

}

function setup() {
	// create a place to draw
	createCanvas(800, 530);
}

var value = 0;

function draw() {
	// if (mouseIsPressed) {
	// 	drawPageSadCow();
	// } else {
	// 	drawPageIntro();
	// }


	if (mouseIsPressed &&
		mouseX > 50 &&
		mouseX < 150 &&
		mouseY > 350 &&
		mouseY < 450) {
		drawPageSadCow();
	} else {
		drawPageIntro();
	}
	noStroke();
	fill(242, 242, 242);
	rect(5, 10, 85, 30);
	textSize(20);
	textFont("Georgia");
	fill(0);
	text("Go Back", 10, 30);

	console.log(mouseX, mouseY);
}

function drawPageIntro() {
	image(foodcourtImg, 0, 0);
}

function drawPageSadCow() {
	for (var i = 0; i < 10; i++) {
		frameRate(8);
		var sadImages = random(1);
		if (sadImages < 0.3) {
			image(cow1Img, 0, 0);
		} else {
			image(cow2Img, 0, 0);
		}
	}
}
