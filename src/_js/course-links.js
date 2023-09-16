function EditLinks() {
	var post = document.getElementById("postcontent");

	post.childNodes.forEach((element) => {
		if (element.tagName == "P") {
			if (element.childNodes[0].tagName == "A") {
				var link = element.childNodes[0];

				link.target = "_blank";
			}
		}
	});
}

EditLinks();
