// average
const avg = (...o) => o.reduce((s, c) => s + c) / o.length;

// closest number in array
const cls = (num, ...arr) =>
	arr.reduce(
		(p, c) =>
			Math.abs(c - num) < Math.abs(p - num) ? c : p
	);


/**
 options
 * COLOR = no difference
 * CLOLR = limited color (like depressed)
 * GRAYS = grayscale
 * MOODY = depressed-ish grayscale
 * RED   = only red channel
 * GREEN = only green channel
 * BLUE  = only blue channel
 */
function colorify(k) {
	const
		r = k[0],
		g = k[1],
		b = k[2];
	switch (options) {
		case "COLOR": return color(r, g, b);
		case "CLOLR": return color(
			cls(r, ...cmp),
			cls(g, ...cmp),
			cls(b, ...cmp)
		);
		case "GRAYS": return color(avg(r, g, b));
		case "MOODY": return color(
			cls(
				avg(r, g, b),
				...cmp
			)
		);
		case "RED": return color(avg(r, g, b), 0, 0);
		case "GREEN": return color(0, avg(r, g, b), 0);
		case "BLUE": return color(0, 0, avg(r, g, b));
	}
}