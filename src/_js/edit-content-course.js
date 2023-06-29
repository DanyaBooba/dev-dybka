function EditContent() {
	var prelist = document.getElementsByTagName("pre");

	for (i = 0; i < prelist.length; i++) {
		var pre = prelist[i];
		// console.log(pre.innerHTML);

		var html = pre.innerHTML;
		var len = html.slice(0, -7).split("\n").length;
		var str = "";
		for (i = 1; i < len; i++) {
			str += "<span class='count'></span>";
		}

		pre.innerHTML =
			"<div class='container px-0'><span class='d-flex code'><div class='d-flex flex-column counter'>" +
			str +
			"</div>" +
			html +
			"</span></div>";
	}
}

// function EditContent() {
// 	var codes = document.getElementsByTagName("code");
// 	for (i = 0; i < codes.length; i++) {
// 		var code = codes[i];
// 		if (
// 			code.classList.contains("language-C#") ||
// 			code.classList.contains("language-JSON")
// 		) {
// 			// console.log(code);
// 			code.id = "tocopycode" + i;

// 			var div = document.createElement("div");
// 			div.className = "code-copy";
// 			div.innerHTML =
// 				"<button onClick=CopyCode('tocopycode" +
// 				i +
// 				"')><svg><use xlink:href='/img/icons/icons.svg#clipboard'></use></svg>Скопировать</button>";
// 			code.prepend(div);
// 		}
// 	}
// }

function CopyCode(id) {
	var code = document.getElementById(id);
	if (code !== null) {
		navigator.clipboard.writeText(code.textContent.slice(11));
	}
}

EditContent();
