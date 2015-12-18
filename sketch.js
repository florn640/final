//variables
var visitedBurger = false;
var visitedNuggets = false;
var visitedFalafel = false;
var visitedBowl = false;
var visitedHotdog = false;
var visitedPizza = false;
var didClick = false;
var mouseWasPressed;

var currentPage = "intro";
//general images
var nycImg;
var foodcourtImg;
var buyImg;
var cloud1Img;
var cloud2Img;
var thanksImg;
var congratulationsImg;
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
	//overlay = load

	nycImg = loadImage("images/nyc.png");
	foodcourtImg = loadImage("images/foodcourt.png");
	buyImg = loadImage("images/buy.png");
	cloud1Img = loadImage("images/cloud1.png");
	cloud2Img = loadImage("images/cloud2.png");
	thanksImg = loadImage("images/thanks.png");
	congratulationsImg = loadImage("images/congratulations.png");
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
//change from page to page when clicking
function mousePressed() {
	if (!didClick) {
		if (mouseX > 490 && mouseX < 780 && mouseY > 331 && mouseY < 602) {
			didClick = true;
		}
	} else {
		console.log(mouseX, mouseY);
		if (currentPage === "intro") {
			if (mouseX > 446 && mouseX < 547 && mouseY > 350 && mouseY < 526) {
				visitedBurger = true;
				currentPage = "burger";
			}
			if (mouseX > 44 && mouseX < 144 && mouseY > 100 && mouseY < 230) {
				visitedNuggets = true;
				currentPage = "nuggets";
			}
			if (mouseX > 233 && mouseX < 352 && mouseY > 260 && mouseY < 397) {
				visitedFalafel = true;
				currentPage = "falafel";
			}
			if (mouseX > 740 && mouseX < 848 && mouseY > 360 && mouseY < 529) {
				visitedBowl = true;
				currentPage = "bowl";
			}
			if (mouseX > 948 && mouseX < 1060 && mouseY > 251 && mouseY < 391) {
				visitedHotdog = true;
				currentPage = "hotdog";
			}
			if (mouseX > 1105 && mouseX < 1240 && mouseY > 92 && mouseY < 222) {
				visitedPizza = true;
				currentPage = "pizza";
			}
		} else if (currentPage === "burger") {
			if (mouseX > 0 && mouseX < 170 && mouseY > 0 && mouseY < 62) {
				currentPage = "intro";
			}
		} else if (currentPage === "nuggets") {
			if (mouseX > 0 && mouseX < 170 && mouseY > 0 && mouseY < 62) {
				currentPage = "intro";
			}
		} else if (currentPage === "falafel") {
			if (mouseX > 0 && mouseX < 170 && mouseY > 0 && mouseY < 62) {
				currentPage = "intro";
			}
		} else if (currentPage === "bowl") {
			if (mouseX > 0 && mouseX < 170 && mouseY > 0 && mouseY < 62) {
				currentPage = "intro";
			}
		} else if (currentPage === "hotdog") {
			if (mouseX > 0 && mouseX < 170 && mouseY > 0 && mouseY < 62) {
				currentPage = "intro";
			}
		} else if (currentPage === "pizza") {
			if (mouseX > 0 && mouseX < 170 && mouseY > 0 && mouseY < 62) {
				currentPage = "intro";
			}
		}
	}
}

//define which pages to draw after checking "currrent page"
function draw() {
	if (!didClick) {
		background(249, 252, 254);
		image(cloud1Img, random(0, 5), 0);
		image(cloud2Img, random(500, 505), 10);
		image(nycImg, 0, 0, width, height);
	} else {
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
		} else if (currentPage === "hotdog") {
			drawPageHotdog();
		} else if (currentPage === "pizza") {
			drawPagePizza();
		}
	}
}

//define pages
function drawPageIntro() {
	background(249, 252, 254);
	image(cloud1Img, random(0, 3), 0);
	image(cloud2Img, random(580, 583), 150);
	image(foodcourtImg, 0, 0);
	if (visitedBurger === true) {
		image(buyImg, 465, 537);
	}
	if (visitedNuggets === true) {
		image(buyImg, 59, 235);
	}
	if (visitedFalafel === true) {
		image(buyImg, 256, 400);
	}
	if (visitedBowl === true) {
		image(buyImg, 761, 537);
	}
	if (visitedHotdog === true) {
		image(buyImg, 967, 400);
	}
	if (visitedPizza === true) {
		image(buyImg, 1140, 235);
	}
	if (visitedBurger === true) {
		if (mouseIsPressed)
			if (mouseX > 466 && mouseX < 530 && mouseY > 540 && mouseY < 602) {
				image(thanksImg, 0, 0);
			}
	}
	if (visitedNuggets === true) {
		if (mouseIsPressed)
			if (mouseX > 59 && mouseX < 123 && mouseY > 236 && mouseY < 300) {
				image(thanksImg, 0, 0);
			}
	}
	if (visitedFalafel === true) {
		if (mouseIsPressed)
			if (mouseX > 256 && mouseX < 321 && mouseY > 400 && mouseY < 465) {
				image(congratulationsImg, 0, 0);
			}
	}
	if (visitedBowl === true) {
		if (mouseIsPressed)
			if (mouseX > 761 && mouseX < 826 && mouseY > 540 && mouseY < 602) {
				image(congratulationsImg, 0, 0);
			}
	}
	if (visitedHotdog === true) {
		if (mouseIsPressed)
			if (mouseX > 968 && mouseX < 1032 && mouseY > 400 && mouseY < 465) {
				image(thanksImg, 0, 0);
			}
	}
	if (visitedPizza === true) {
		if (mouseIsPressed)
			if (mouseX > 1139 && mouseX < 1205 && mouseY > 236 && mouseY < 300) {
				image(thanksImg, 0, 0);
			}
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

function drawPageHotdog() {
	image(hotdogImg, 0, 0);
	for (var i = 0; i < 10; i++) {
		frameRate(8);
		var sadImages = random(1);
		if (sadImages < 0.25) {
			image(pig1Img, 700, 150);
		} else if (sadImages > 0.25 && sadImages < 0.5) {
			image(pig2Img, 700, 150);
		} else if (sadImages > 0.5 && sadImages < 0.75) {
			image(pig3Img, 700, 150);
		} else {
			image(pig4Img, 700, 150);
		}
	}
}

function drawPagePizza() {
	image(pizzaImg, 0, 0);
	for (var i = 0; i < 10; i++) {
		frameRate(8);
		var sadImages = random(1);
		if (sadImages < 0.25) {
			image(pizza1Img, 700, 150);
		} else if (sadImages > 0.25 && sadImages < 0.5) {
			image(pizza2Img, 700, 150);
		} else if (sadImages > 0.5 && sadImages < 0.75) {
			image(pizza3Img, 700, 150);
		} else {
			image(pizza4Img, 700, 150);
		}
	}
}
