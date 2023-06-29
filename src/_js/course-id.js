function clearText(text) {
	return text;
}

function AddID() {
	var content = document.getElementById("postcontent").children;
	for (i = 0; i < content.length; i++) {
		if (
			content[i].tagName == "H2" ||
			content[i].tagName == "H3" ||
			content[i].tagName == "H4" ||
			content[i].tagName == "H5" ||
			content[i].tagName == "H6"
		) {
			console.log(clearText(content[i].textContent));
		}
	}
}

function AddHash() {
	console.log("hash");
}

AddID();
AddHash();
