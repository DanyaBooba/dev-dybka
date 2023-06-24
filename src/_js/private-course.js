function OpenCourse(course, lesson) {
	var content = document.getElementById("postcontent");
	var codecontent = document.getElementById("privatecoursecode");
	var placeholder = document.getElementById("privatecourseplaceholder");

	var code = new URL(window.location.href).searchParams.get("c");

	if (code !== null) {
		codecontent.classList.add("d-none");
		// placeholder.classList.remove("d-none");

		(function () {
			var http = new XMLHttpRequest();
			http.open("GET", "/api/html.txt");
			http.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					var dom = new DOMParser()
						.parseFromString(this.responseText, "text/html")
						.getElementsByTagName("body")[0].innerHTML;

					if (dom !== null) {
						// console.log(dom);
						content.innerHTML = dom;
					}
				}
			};
			http.send(null);
		})();
	}
}
