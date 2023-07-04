var leftbar = document.getElementById("leftbar").children;
var buttoninfo = document.getElementById("leftbar_buttoninfo");
var contentbuttoninfo = document.getElementById("maincontent_buttoninfo");
var furl = window.location.href.split("/");

// furl[4] = "info";
url = furl[furl.length - 2];
console.log(furl);

if (url === "info" && buttoninfo !== null && contentbuttoninfo !== null) {
	buttoninfo.classList.add("active");
	contentbuttoninfo.classList.add("active");
}

if (leftbar !== null) {
	for (i = 0; i < leftbar.length; i++) {
		if (leftbar[i].id.slice(8) === url) {
			leftbar[i].classList.add("active");
		}
	}
}
