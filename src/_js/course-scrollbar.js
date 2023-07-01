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
