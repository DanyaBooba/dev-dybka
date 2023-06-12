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
		window.history.replaceState(null, null, linkprev.href + "#");
		location.reload();
	}
}

function nextPage() {
	var linknext = document.getElementById("postnextlesson");
	if (linknext !== null) {
		window.history.replaceState(null, null, linknext.href + "#");
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

checkBottom();
checkBottomMobile();
