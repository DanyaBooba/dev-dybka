var leftbar = document.getElementById("leftbar").children;
var buttoninfo = document.getElementById("leftbar_buttoninfo");
var contentbuttoninfo = document.getElementById("maincontent_buttoninfo");
var url = window.location.href.split("/");

url.shift();
url.shift();
url.shift();
url.shift();
url.shift();
url = url[0];

if (url === "" && buttoninfo !== null && contentbuttoninfo !== null) {
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
