function CheckCourse(code) {
	var input = document.getElementById("inputcode");
	input.value = code;

	var url = new URL(window.location.href);
	url.searchParams.delete("code");
	window.history.replaceState(null, null, url.href);

	if (code === null) {
		return;
	}

	var request = new XMLHttpRequest();
	request.open("GET", code, true);
	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status !== 404) {
				console.log("need open");
				request.send();
			}
		}
	};
}
