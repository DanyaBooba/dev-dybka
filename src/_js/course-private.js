function CheckCourse(code) {
	if (code === null) {
		return;
	}

	var input = document.getElementById("inputcode");
	input.value = code;

	var url = new URL(window.location.href);
	url.searchParams.delete("code");
	window.history.replaceState(null, null, url.href);

	var request = new XMLHttpRequest();
	request.open("GET", code, true);
	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status !== 404) {
				// console.log(url.href + code + "#header");

				window.history.replaceState(null, null, url.href + code + "#header");
				location.reload();
			} else {
				return;
			}
		}
	};

	request.send();
}
