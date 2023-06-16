function changeColor() {
	let items = document.getElementsByClassName("course_mainpage");
	if (items.length === 0) {
		return;
	}

	for (let i = 0; i < items.length; i++) {
		items[i].classList.add(randomColor());
	}
}

function randomColor() {
	return "course-color-" + Math.floor(Math.random() * 3 + 1);
}

changeColor();
