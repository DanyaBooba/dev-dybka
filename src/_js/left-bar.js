var leftbar = document.getElementById("leftbar").children;
var url = window.location.href.split("/").at(-2);

if (leftbar !== null) {
	for (i = 0; i < leftbar.length; i++) {
		if (leftbar[i].id.slice(8) === url) {
			leftbar[i].classList.add("active");
		}
	}
}
