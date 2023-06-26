function OpenCourse(course, lesson) {
	var content = document.getElementById("postcontent");
	var codecontent = document.getElementById("privatecoursecode");

	var code =
		new URL(window.location.href).searchParams.get("c") ||
		localStorage.getItem("course" + course);

	if (code !== null) {
		(function () {
			var http = new XMLHttpRequest();
			http.open(
				"GET",
				"http://localhost/api/course/?k=" +
					course +
					"&ls=" +
					lesson +
					"&c=" +
					code
			);
			http.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var dom = new DOMParser()
						.parseFromString(this.responseText, "text/html")
						.getElementsByTagName("body")[0].innerHTML;

					if (dom !== null) {
						if (dom.split(" ")[0] != "error") {
							content.innerHTML = dom;
							localStorage.setItem("course" + course, code);
						}
					}
				}
			};
			http.send(null);
		})();
	}
}
