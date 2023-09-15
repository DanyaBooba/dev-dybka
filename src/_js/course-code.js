function EditContent() {
	var prelist = document.getElementsByTagName("pre");

	count = 1;
	for (i = 0; i < prelist.length; i++) {
		var pre = prelist[i];

		var html = pre.innerHTML;
		var len = html.slice(0, -7).split("\n").length;
		var str = "";
		for (j = 1; j < len; j++) {
			str += "<span class='count'></span>";
		}

		pre.innerHTML =
			"<div class='container px-0'><span class='d-flex code'><div class='d-flex flex-column counter'>" +
			str +
			"</div>" +
			html +
			"</span></div>" +
			"<button onClick=CopyCode('tocopycode" +
			count +
			"') class='code-copy'><svg><use xlink:href='/img/icons/icons.svg#clipboard'></use></svg>Скопировать</button>";

		count += 1;
	}

	var count2 = 1;
	var codelist = document.getElementsByTagName("code");
	for (i = 0; i < codelist.length; i++) {
		var code = codelist[i];
		if (
			code.classList.contains("language-C#") ||
			code.classList.contains("language-JSON")
		) {
			code.id = "tocopycode" + count2;
			count2 += 1;
		}
	}
}

function CopyCode(id) {
	var code = document.getElementById(id);
	if (code !== null) {
		navigator.clipboard.writeText(code.textContent);
	}
}

EditContent();
