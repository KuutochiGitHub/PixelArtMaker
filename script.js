let input;
let img;
let c;

function setup() {
	c = createCanvas(600, 600)
		.class("game")
		.parent(document.querySelector(".canvas"));

	input = createFileInput(handleFile)
		.attribute("placeholder", "Input File")
		.attribute("accept", "image/*")
		.class("file")
		.parent(document.querySelector(".filecont"));

	noStroke();
	frameRate(10);
}

function draw() {
	background(255);
	if (img) {
		cursor("initial");
		image(img, 0, 0, width, height);

		// let ar = get(width / 2, height / 2);
		// console.log(
		// 	ar[0], ar[1], ar[2]
		// );

		for (let x = 0; x < width; x += precision) {
			for (let y = 0; y < height; y += precision) {
				let r = get(x, y); // get color
				let c = colorify(r); // set color
				fill(c);
				rect(x, y, precision, precision);
			}
		}

		noLoop();
	} else {
		cursor("progress");
		fill(0);
		textFont("Nunito");
		textSize(50);
		textAlign(CENTER);
		text("Loading . . .", width / 2, height / 2);
	}
}

function handleFile(file) {
	if (file.type == "image") {
		img = createImg(file.data, "The unprocessed image.");
		img.hide();

		document.querySelector(".game").style.display = "inline";
		document.querySelector(".after-gen").style.display = "flex";

		document.querySelector(".fileinput").style.display = "none";
		document.querySelector(".ui").style.display = "none";
		document.querySelector(".tutorial").style.display = "none";
	} else {
		img = null;
	}
}