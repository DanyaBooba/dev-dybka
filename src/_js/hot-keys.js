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

	var title = document.getElementsByTagName("h1")[0];
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
		var linkprevbottom = document.getElementById("mobilecoursebottomprev_link");
		console.log(linkprevbottom);

		linkprevbottom.href = linkprev.href;
	}

	// Next
	var bottomnext = document.getElementById("mobilecoursebottomnext");
	var linknext = document.getElementById("postnextlesson");

	if (linknext !== null && bottomnext !== null) {
		bottomnext.classList.remove("d-none");
		var linknextbottom = document.getElementById("mobilecoursebottomnext_link");
		console.log(linknextbottom);

		linknextbottom.href = linknext.href;
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
