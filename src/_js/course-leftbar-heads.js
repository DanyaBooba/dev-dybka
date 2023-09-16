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

AddLeftBarHeads();
AddMobileHeads();
