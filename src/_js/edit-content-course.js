function EditContent() {
	var codes = document.getElementsByTagName("code");
	for (i = 0; i < codes.length; i++) {
		var code = codes[i];
		if (code.classList.contains("language-C#")) {
			// console.log(code);
			code.id = "tocopycode" + i;

			var div = document.createElement("div");
			div.className = "code-copy";
			div.innerHTML =
				"<button onClick=CopyCode('tocopycode" +
				i +
				"')><svg><use xlink:href='/img/icons/icons.svg#clipboard'></use></svg>Скопировать</button>";
			code.prepend(div);
		}
	}
}

function CopyCode(id) {
	var code = document.getElementById(id);
	if (code !== null) {
		navigator.clipboard.writeText(code.textContent.slice(11));
	}
}

EditContent();