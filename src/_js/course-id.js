function clearText(text) {
	var text = text.toLowerCase();
	text = text.replaceAll(" ", "-");
	text = text.replaceAll(".", "");
	text = text.replaceAll("«", "");
	text = text.replaceAll("»", "");

	return text;
}

function AddID() {
	var content = document.getElementById("postcontent").children;
	for (i = 0; i < content.length; i++) {
		var tag = content[i].tagName;
		if (
			tag == "H2" ||
			tag == "H3" ||
			tag == "H4" ||
			tag == "H5" ||
			tag == "H6"
		) {
			// console.log(clearText(content[i].textContent));
			content[i].id = clearText(content[i].textContent);
			content[i].innerHTML =
				content[i].textContent +
				" <a class='hash' href='#" +
				content[i].id +
				"'>#</a>";
		}
	}
}

AddID();
