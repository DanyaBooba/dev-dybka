// Main

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

// Logic

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

// Help

function haveclass(item, name) {
	return item.classList.contains(name);
}

function addclass(item, name) {
	item.classList.add(name);
}

function removeclass(item, name) {
	item.classList.remove(name);
}

// Local storage

var storageLeftMenu = localStorage.getItem("left-menu");

if (storageLeftMenu === "full") {
	getFull();
} else if (storageLeftMenu === "short") {
	getShort();
}
