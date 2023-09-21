// Code

function EditCodeOnPage() {
	var prelist = document.getElementsByTagName("pre");

	count = 1;
	for (i = 0; i < prelist.length; i++) {
		var pre = prelist[i];

		var html = pre.innerHTML;
		var len = html.slice(0, -7).split("\n").length;
		var str = "";
		for (j = 1; j < len; j++) {
			str += "<span class='count'></span>";
		}

		var language = pre.childNodes[0].classList[0];

		language = language.substring(9);

		// "<div class='language-type'>" +
		// 	language +
		// 	"</div>" +

		pre.innerHTML =
			"<div class='container px-0'><span class='d-flex code'><div class='d-flex flex-column counter'>" +
			str +
			"</div>" +
			html +
			"</span></div>";

		var predivlang =
			"<div class='language-type me-auto'>" + language + "</div>";

		var predivcopy =
			"<button onClick=CopyCode('tocopycode" +
			count +
			"') class='code-copy'><svg><use xlink:href='/img/icons/icons.svg#clipboard'></use></svg>Скопировать</button>";

		var prediv =
			"<div class='pre-code'><div class='d-flex align-items-center'>" +
			predivlang +
			predivcopy +
			"</div></div>";

		pre.insertAdjacentHTML("beforebegin", prediv);

		count += 1;
	}

	var count2 = 1;
	var codelist = document.getElementsByTagName("code");
	for (i = 0; i < codelist.length; i++) {
		var code = codelist[i];
		if (
			code.classList.contains("language-C#") ||
			code.classList.contains("language-JSON")
		) {
			code.id = "tocopycode" + count2;
			count2 += 1;
		}
	}
}

function CopyCode(id) {
	var code = document.getElementById(id);
	if (code !== null) {
		navigator.clipboard.writeText(code.textContent);
	}
}

// Hot Keys

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
		window.history.replaceState(null, null, linkprev.href + "#header");
		location.reload();
	} else {
		var startlearn = document.getElementById("startlearn");
		if (startlearn !== null) {
			window.history.replaceState(null, null, startlearn.href + "#header");
			location.reload();
		}
	}
}

function nextPage() {
	var linknext = document.getElementById("postnextlesson");
	if (linknext !== null) {
		window.history.replaceState(null, null, linknext.href + "#header");
		location.reload();
	} else {
		var startlearn = document.getElementById("startlearn");
		if (startlearn !== null) {
			window.history.replaceState(null, null, startlearn.href + "#header");
			location.reload();
		}
	}
}

function CheckBottom() {
	var bottomprev = document.getElementById("coursebottomprev");
	var linkprev = document.getElementById("postprevlesson");

	if (linkprev !== null && bottomprev !== null) {
		bottomprev.classList.remove("d-none");
	}

	var bottomnext = document.getElementById("coursebottomnext");
	var linknext = document.getElementById("postnextlesson");

	if (linknext !== null && bottomnext !== null) {
		bottomnext.classList.remove("d-none");
	}

	var title = document.getElementsByTagName("h1")[0];
	var bottomtitle = document.getElementById("bottomposttitle");

	if (title !== null && bottomtitle !== null && title !== undefined) {
		bottomtitle.textContent = title.textContent;
	}
}

function CheckBottomMobile() {
	var bottomprev = document.getElementById("mobilecoursebottomprev");
	var linkprev = document.getElementById("postprevlesson");

	if (linkprev !== null && bottomprev !== null) {
		bottomprev.classList.remove("d-none");
		var linkprevbottom = document.getElementById("mobilecoursebottomprev_link");

		linkprevbottom.href = linkprev.href;
	}

	var bottomnext = document.getElementById("mobilecoursebottomnext");
	var linknext = document.getElementById("postnextlesson");

	if (linknext !== null && bottomnext !== null) {
		bottomnext.classList.remove("d-none");
		var linknextbottom = document.getElementById("mobilecoursebottomnext_link");

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

// ID

function clearText(text) {
	var text = text.toLowerCase();
	text = text.replaceAll(" ", "-");
	text = text.replaceAll(".", "");
	text = text.replaceAll("«", "");
	text = text.replaceAll("»", "");

	return text;
}

function AddID() {
	var content = document.getElementById("postcontent").children;
	if (content === null) return;

	for (i = 0; i < content.length; i++) {
		var tag = content[i].tagName;
		if (
			tag == "H2" ||
			tag == "H3" ||
			tag == "H4" ||
			tag == "H5" ||
			tag == "H6"
		) {
			content[i].id = clearText(content[i].textContent);
			content[i].innerHTML =
				content[i].textContent +
				" <a class='hash' href='#" +
				content[i].id +
				"'>#</a>";
		}
	}
}

// Left Bar Heads

function AddLeftBarHeads() {
	var leftbar = document.getElementById("lessonleftpcmenu");

	var heads = document.querySelectorAll("h2, h3, h4, h5, h6");

	var elems = "";

	for (var i = 0; i < heads.length; i += 1) {
		var head = heads[i];

		var hash = head.childNodes[1];

		if (hash == undefined) break;

		var headText = head.textContent.slice(0, -2);
		var headLink = hash.href;

		elems += "<li><a href='" + headLink + "'>" + headText + "</a></li>";
	}

	var list = "<ul>" + elems + "</ul>";
	var str = "<div class='leftbar-heads' id='leftbarheads'>" + list + "</div>";

	leftbar.insertAdjacentHTML("beforeend", str);
}

function AddMobileHeads() {
	var mobilebar = document.getElementById("mobileMenuHeads");
	var heads = document.getElementById("leftbarheads");

	mobilebar.insertAdjacentHTML("afterbegin", heads.innerHTML);
}

// Left Bar

function LeftBar() {
	var leftbar = document.getElementById("leftbar").children;
	var buttoninfo = document.getElementById("leftbar_buttoninfo");
	var buttoninfoMobile = document.getElementById("leftbar_buttoninfo_mobile");
	var buttonfinal = document.getElementById("leftbar_final");
	var contentbuttoninfo = document.getElementById("maincontent_buttoninfo");
	var furl = window.location.href.split("/");

	url = furl[5];

	if (
		url === "" &&
		buttoninfo !== null &&
		contentbuttoninfo !== null &&
		buttoninfoMobile !== null
	) {
		buttoninfo.classList.add("active");
		buttoninfoMobile.classList.add("active");
		contentbuttoninfo.classList.add("active");
	}

	if (url === "end" && buttonfinal !== null) {
		buttonfinal.classList.add("active");
	}

	if (leftbar !== null) {
		for (i = 0; i < leftbar.length; i++) {
			if (leftbar[i].id.slice(8) === url) {
				leftbar[i].classList.add("active");
			}
		}
	}
}

// Links

function EditLinks() {
	var post = document.getElementById("postcontent");

	post.childNodes.forEach((element) => {
		if (element.tagName == "P") {
			if (element.childNodes[0].tagName == "A") {
				var link = element.childNodes[0];

				link.target = "_blank";
			}
		}
	});
}

// Scroll Bar

function ScrollBar() {
	var bar = document.getElementById("myBar");

	if (bar !== null) {
		window.onscroll = function () {
			var winScroll =
				document.body.scrollTop || document.documentElement.scrollTop;
			var height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			var scrolled = (winScroll / height) * 100;

			bar.style.width = scrolled + "%";
		};
	}
}

// Show Menu

var content = document.getElementById("lessonrightcontent");
var leftmenu = document.getElementById("lessonleftpcmenu");
var button = document.getElementById("lessonbuttonmenu");

function hideLeftMenu() {
	var fullMenu =
		haveclass(content, "w-100") === true &&
		haveclass(leftmenu, "d-none") === true &&
		haveclass(button, "d-none") === false;
	var shortMenu =
		haveclass(content, "w-100") === false &&
		haveclass(leftmenu, "d-none") === false &&
		haveclass(button, "d-none") === true;

	if (fullMenu) {
		getShort();
	} else if (shortMenu) {
		getFull();
	} else {
		defaultMenu();
	}
}

function getShort() {
	localStorage.setItem("left-menu", "short");

	removeclass(content, "w-100");
	removeclass(leftmenu, "d-none");
	addclass(button, "d-none");
}

function getFull() {
	localStorage.setItem("left-menu", "full");

	addclass(content, "w-100");
	addclass(leftmenu, "d-none");
	removeclass(button, "d-none");
}

function defaultMenu() {
	localStorage.removeItem("left-menu");

	removeclass(content, "w-100");
	removeclass(leftmenu, "d-none");
	addclass(button, "d-none");
}

function haveclass(item, name) {
	return item.classList.contains(name);
}

function addclass(item, name) {
	item.classList.add(name);
}

function removeclass(item, name) {
	item.classList.remove(name);
}

// Default

CheckBottom();
CheckBottomMobile();
EditCodeOnPage();
LeftBar();
AddID();
EditLinks();
AddLeftBarHeads();
AddMobileHeads();
ScrollBar();

if (localStorage.getItem("bottom-menu-pc") === "close") {
	closeBottom();
}

if (content !== null && leftmenu !== null && button !== null) {
	var storageLeftMenu = localStorage.getItem("left-menu");

	if (storageLeftMenu === "full") {
		getFull();
	} else if (storageLeftMenu === "short") {
		getShort();
	}
}
