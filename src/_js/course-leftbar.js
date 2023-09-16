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
