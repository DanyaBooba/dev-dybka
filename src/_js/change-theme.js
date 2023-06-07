function returnValue() {
	var val = "";
	const values = document.querySelectorAll('input[name="color-theme"]');
	for (const i of values) {
		if (i.checked) {
			val = i.value;
		}
	}

	return val;
}

function checkValue() {
	var value = returnValue();
	var light = document.getElementById("stylesheetlight");
	var dark = document.getElementById("stylesheetdark");

	if (value === "dark") {
		localStorage.setItem("color-theme", "dark");
		light.media = "not all";
		dark.media = "all";
	} else if (value === "light") {
		localStorage.setItem("color-theme", "light");
		light.media = "all";
		dark.media = "not all";
	} else {
		localStorage.removeItem("color-theme");
		light.media = "(prefers-color-scheme: light)";
		dark.media = "(prefers-color-scheme: dark)";
	}
}

checkValue();
