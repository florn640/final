//variables
var visitedCow = false;
var currentPage = "intro";
//general images
var nycImg;
var foodcourtImg;
//food images
var nuggetsImg;
var falafelImg;
var burgerImg;
var bowlImg;
var hotdogImg;
var pizzaImg;
//ingredients
var cow1Img;
var cow2Img;
var cow1Img;
var cow2Img;
var chicken1Img;
var chicken2Img;
var chicken3Img;
var pig1Img;
var pig2Img;
var pig3Img;
var pig4Img;
var pizza1Img;
var pizza2Img;
var pizza3Img;
var pizza4Img;
var protein1Img;
var protein2Img;
var protein3Img;
var protein4Img;
var chickpea1Img;
var chickpea2Img;
var chickpea3Img;

// images
function preload() {
	nycImg = loadImage("images/nyc.jpg");
	foodcourtImg = loadImage("images/foodcourt.png");
	nuggetsImg = loadImage("images/nuggets.png");
	falafelImg = loadImage("images/falafel.png");
	burgerImg = loadImage("images/burger.png");
	bowlImg = loadImage("images/bowl.png");
	hotdogImg = loadImage("images/hotdog.png");
	pizzaImg = loadImage("images/pizza.png");
	cow1Img = loadImage("images/cow1.png");
	cow2Img = loadImage("images/cow2.png");
	cow3Img = loadImage("images/cow3.png");
	chicken1Img = loadImage("images/chicken1.png");
	chicken2Img = loadImage("images/chicken2.png");
	chicken3Img = loadImage("images/chicken3.png");
	pig1Img = loadImage("images/pig1.png");
	pig2Img = loadImage("images/pig2.png");
	pig3Img = loadImage("images/pig3.png");
	pig4Img = loadImage("images/pig4.png");
	pizza1Img = loadImage("images/pizza1.png");
	pizza2Img = loadImage("images/pizza2.png");
	pizza3Img = loadImage("images/pizza3.png");
	pizza4Img = loadImage("images/pizza4.png");
	protein1Img = loadImage("images/protein1.png");
	protein2Img = loadImage("images/protein2.png");
	protein3Img = loadImage("images/protein3.png");
	protein4Img = loadImage("images/protein4.png");
	chickpea1Img = loadImage("images/chickpea1.png");
	chickpea2Img = loadImage("images/chickpea2.png");
	chickpea3Img = loadImage("images/chickpea3.png");

}

function setup() {
	createCanvas(1280, 610);

}

//function draw() {
//image(nycImg, 0, 0);
//}

//change from page to page when clicking
function mousePressed() {
	console.log(mouseX, mouseY);
	if (currentPage === "intro") {
		if (mouseX > 354 && mouseX < 644 && mouseY > 353 && mouseY < 607) {
			visitedCow = true;
			currentPage = "burger";
		}
		if (mouseX > 3 && mouseX < 234 && mouseY > 52 && mouseY < 310) {
			currentPage = "nuggets";
		}
		if (mouseX > 146 && mouseX < 392 && mouseY > 222 && mouseY < 467) {
			currentPage = "falafel";
		}
		if (mouseX > 647 && mouseX < 929 && mouseY > 327 && mouseY < 607) {
			currentPage = "bowl";
			//	}
		} else if (currentPage === "burger") {
			currentPage = "intro";
		} else if (currentPage === "nuggets") {
			currentPage = "intro";
		} else if (currentPage === "falafel") {
			currentPage = "intro";
		} else if (currentPage === "bowl") {
			currentPage = "intro";
		}
	}
}
//define which pages to draw after checking "currrent page"
function draw() {
	if (currentPage === "intro") {
		drawPageIntro();
	} else if (currentPage === "burger") {
		drawPageBurger();
	} else if (currentPage === "nuggets") {
		drawPageNuggets();
	} else if (currentPage === "falafel") {
		drawPageFalafel();
	} else if (currentPage === "bowl") {
		drawPageBowl();
	}
}
//}

//define pages
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

function drawPageBurger() {
	image(burgerImg, 0, 0);
	for (var i = 0; i < 10; i++) {
		frameRate(8);
		var sadImages = random(1);
		if (sadImages < 0.3) {
			image(cow1Img, 700, 150);
		} else if (sadImages > 0.3 && sadImages < 0.7) {
			image(cow2Img, 700, 150);
		} else {
			image(cow3Img, 700, 150);
		}
	}
}

function drawPageFalafel() {
	image(falafelImg, 0, 0);
	for (var i = 0; i < 10; i++) {
		frameRate(8);
		var sadImages = random(1);
		if (sadImages < 0.3) {
			image(chickpea1Img, 700, 150);
		} else if (sadImages > 0.3 && sadImages < 0.7) {
			image(chickpea2Img, 700, 150);
		} else {
			image(chickpea3Img, 700, 150);
		}
	}
}

function drawPageNuggets() {
	image(nuggetsImg, 0, 0);
	for (var i = 0; i < 10; i++) {
		frameRate(8);
		var sadImages = random(1);
		if (sadImages < 0.3) {
			image(chicken1Img, 700, 150);
		} else if (sadImages > 0.3 && sadImages < 0.7) {
			image(chicken2Img, 700, 150);
		} else {
			image(chicken3Img, 700, 150);
		}
	}
}

function drawPageBowl() {
	image(bowlImg, 0, 0);
	for (var i = 0; i < 10; i++) {
		frameRate(8);
		var sadImages = random(1);
		if (sadImages < 0.25) {
			image(protein1Img, 700, 150);
		} else if (sadImages > 0.25 && sadImages < 0.5) {
			image(protein2Img, 700, 150);
		} else if (sadImages > 0.5 && sadImages < 0.75) {
			image(protein3Img, 700, 150);
		} else {
			image(protein4Img, 700, 150);
		}
	}
}
