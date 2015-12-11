//variables
var foodcourtImg;
var cow1Img;
var cow2Img;
var chicken1Img;
var visitedCow = false;

var currentPage = "intro";
// images
function preload() {
	foodcourtImg = loadImage("images/foodcourt.png");
	cow1Img = loadImage("images/cow1.png");
	cow2Img = loadImage("images/cow2.png");
	chicken1Img = loadImage("images/chicken1.png");

}

function setup() {
	createCanvas(800, 530);
}

function mousePressed() {
	console.log("mp");
	if (currentPage === "intro") {
		if (mouseX > 50 && mouseX < 150 && mouseY > 350 && mouseY < 450) {
			visitedCow = true;
			currentPage = "sadCow";
		}
		if (mouseX > 150 && mouseX < 250 && mouseY > 350 && mouseY < 450) {
			currentPage = "sadChicken";
		}
	} else if (currentPage === "sadCow") {
		currentPage = "intro";
	} else if (currentPage === "sadChicken") {
		currentPage = "intro";
	}
	// if (mouseX > 50 && mouseX < 150 && mouseY > 350 && mouseY < 450) {
	// 	currentPage = "intro";
	// } else {
	// 	currentPage = "sadCow";
	// }

}

function draw() {
	if (currentPage === "intro") {
		drawPageIntro();
	} else if (currentPage === "sadCow") {
		drawPageSadCow();
	} else if (currentPage === "sadChicken") {
		drawPageSadChicken();
		//nothing yet
	}
	noStroke();
	fill(242, 242, 242);
	rect(5, 10, 85, 30);
	textSize(20);
	textFont("Georgia");
	fill(0);
	text("Go Back", 10, 30);

	console.log(currentPage);
}

function drawPageIntro() {
	image(foodcourtImg, 0, 0);
	if (visitedCow === true) {
		noStroke();
		rect(40, 330, 80, 20);
		textSize(20);
		textFont("Georgia");
		fill(0);
		text("BUY", 50, 340);
	}
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

function drawPageSadChicken() {
	image(chicken1Img, 0, 0);
}
