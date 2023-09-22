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

function AddMobileHeads2() {
	var mobilebar = document.getElementById("mobileMenuHeads2");
	var leftbar = document.getElementById("leftbar").childNodes;

	var lists = "<ul>";
	for (var i = 0; i < leftbar.length; i++) {
		var item = leftbar[i];
		lists +=
			"<li><a href='" + item.href + "'>" + item.textContent + "</a></li>";
	}

	lists += "<ul>";
	mobilebar.insertAdjacentHTML("beforeend", lists);
}

// Default

LeftBar();
EditCodeOnPage();
AddMobileHeads2();

if (content !== null && leftmenu !== null && button !== null) {
	var storageLeftMenu = localStorage.getItem("left-menu");

	if (storageLeftMenu === "full") {
		getFull();
	} else if (storageLeftMenu === "short") {
		getShort();
	}
}
