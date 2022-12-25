const filterEl = document.querySelector(".type");
const detailEl = document.querySelector(".detail");
const colorTier = document.querySelector(".cold");
const ifMoody = document.querySelector(".if-moody");
const saveEl = document.querySelector(".save-canvas");
const refreshEl = document.querySelector(".refresh-canvas");

filterEl.addEventListener("change", () => {
	options = filterEl.value;
	if (options == "CLOLR" || options == "MOODY") {
		ifMoody.style.display = "block";
	} else {
		ifMoody.style.display = "none";
	}
});

detailEl.addEventListener("change", () => {
	precision = Math.round(Number(detailEl.value) || 25);
});

colorTier.addEventListener("change", () => {
	moodyPrecision = Math.round(Number(colorTier.value) || 20);
	makeCmp();
});


saveEl.addEventListener("click", () => {
	saveCanvas(c, "pixelized", "png");
});

refreshEl.addEventListener("click", () => {
	redraw();
});