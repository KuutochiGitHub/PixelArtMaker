// options
/**
 * COLOR = no difference
 * CLOLR = limited color (like depressed)
 * GRAYS = grayscale
 * MOODY = depressed-ish grayscale
 * RED   = only red channel
 * GREEN = only green channel
 * BLUE  = only blue channel
 */
let options = "COLOR";

let moodyPrecision = 20; // how many stages to go

// pixel size
let precision = 25;

// mapping
const map = {
	NORMAL: "COLOR",
	GRAYSCALE: "GRAYS",
	DEPRESSED: "MOODY",
	RED: "RED",
	GREEN: "GREEN",
	BLUE: "BLUE"
};

// color map (optional)
let cmp;
const makeCmp = () =>
	cmp = [...new Array(Math.floor(moodyPrecision) || 1)]
		.map((_, i) => Math.round(i * 255 / moodyPrecision));
cmp = makeCmp();