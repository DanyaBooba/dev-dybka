function runOnKeys(func, ...codes) {
	let pressed = new Set();

	document.addEventListener("keydown", function (event) {
		pressed.add(event.code);

		for (let code of codes) {
			if (!pressed.has(code)) {
				return;
			}
		}

		pressed.clear();
		func();
	});

	document.addEventListener("keyup", function (event) {
		pressed.delete(event.code);
	});
}

function prevPage() {
	var linkprev = document.getElementById("postprevlesson");
	if (linkprev !== null) {
		window.history.replaceState(null, null, linkprev.href + "#posttitle");
		location.reload();
	}
}

function nextPage() {
	var linknext = document.getElementById("postnextlesson");
	if (linknext !== null) {
		window.history.replaceState(null, null, linknext.href + "#posttitle");
		location.reload();
	}
}

function checkBottom() {
	// Prev
	var bottomprev = document.getElementById("coursebottomprev");
	var linkprev = document.getElementById("postprevlesson");

	if (linkprev !== null && bottomprev !== null) {
		bottomprev.classList.remove("d-none");
	}

	// Next
	var bottomnext = document.getElementById("coursebottomnext");
	var linknext = document.getElementById("postnextlesson");

	if (linknext !== null && bottomnext !== null) {
		bottomnext.classList.remove("d-none");
	}

	// Title

	var title = document.getElementById("posttitle");
	var bottomtitle = document.getElementById("bottomposttitle");

	if (title !== null && bottomtitle !== null) {
		bottomtitle.textContent = title.textContent;
	}
}

function checkBottomMobile() {
	// Prev
	var bottomprev = document.getElementById("mobilecoursebottomprev");
	var linkprev = document.getElementById("postprevlesson");

	if (linkprev !== null && bottomprev !== null) {
		bottomprev.classList.remove("d-none");
	}

	// Next
	var bottomnext = document.getElementById("mobilecoursebottomnext");
	var linknext = document.getElementById("postnextlesson");

	if (linknext !== null && bottomnext !== null) {
		bottomnext.classList.remove("d-none");
	}

	// Title

	var title = document.getElementById("posttitle");
	var bottomtitle = document.getElementById("bottomcourseLabel");

	if (title !== null && bottomtitle !== null) {
		bottomtitle.textContent = title.textContent;
	}

	// Height
	var canvasBottomMobile = document.getElementById("bottomcourse");
	if ((linkprev === null || linknext === null) && canvasBottomMobile !== null) {
		canvasBottomMobile.classList.remove("height-full");
		canvasBottomMobile.classList.add("height-one");
	}
}

function closeBottom() {
	var bottompc = document.getElementById("bottompc");
	var buttonpc = document.getElementById("bottompcclosed");

	if (bottompc !== null && buttonpc !== null) {
		if (bottompc.classList.contains("d-none") === false) {
			bottompc.classList.add("d-none");
		}

		if (buttonpc.classList.contains("d-none")) {
			buttonpc.classList.remove("d-none");
		}

		localStorage.setItem("bottom-menu-pc", "close");
	}
}

function openBottom() {
	var bottompc = document.getElementById("bottompc");
	var buttonpc = document.getElementById("bottompcclosed");

	if (bottompc !== null && buttonpc !== null) {
		if (bottompc.classList.contains("d-none")) {
			bottompc.classList.remove("d-none");
		}

		if (buttonpc.classList.contains("d-none") === false) {
			buttonpc.classList.add("d-none");
		}

		localStorage.removeItem("bottom-menu-pc");
	}
}

// Prev

runOnKeys(
	() => {
		prevPage();
	},
	"AltLeft",
	"ArrowLeft"
);
runOnKeys(
	() => {
		prevPage();
	},
	"AltRight",
	"ArrowLeft"
);
runOnKeys(
	() => {
		prevPage();
	},
	"Alt",
	"ArrowLeft"
);

// Next

runOnKeys(
	() => {
		nextPage();
	},
	"AltLeft",
	"ArrowRight"
);
runOnKeys(
	() => {
		nextPage();
	},
	"AltRight",
	"ArrowRight"
);
runOnKeys(
	() => {
		nextPage();
	},
	"Alt",
	"ArrowRight"
);

// Default

checkBottom();
checkBottomMobile();

if (localStorage.getItem("bottom-menu-pc") === "close") {
	closeBottom();
}
