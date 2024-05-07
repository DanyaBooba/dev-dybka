function CountQuestions() {
	var block = document.getElementById("countquestions");

	if (block === null) return 0;

	return block.textContent;
}

function MainTest(active) {
	var countquestions = CountQuestions();

	currentnumbermenu = active;

	for (var i = 0; i < countquestions; i++) {
		var block = document.getElementById("question_" + i);

		if (block === null) break;

		if (active == i) {
			block.classList.remove("d-none");
		} else {
			block.classList.add("d-none");
		}
	}
}

function MakeActiveMenu() {
	list[currentnumbermenu] = 1;

	UpdateNext();
}

function UpdateNext() {
	if (list[currentnumbermenu] == 1) {
		var block = document.getElementById("question_" + currentnumbermenu);
		console.log(block);
	}
}

function MainFinish() {
	console.log("FINISH");

	var countquestions = CountQuestions();

	for (var i = 1; i <= countquestions; i++) {
		var block = document.getElementById("question_" + i);
		block.classList.add("d-none");
	}

	var finish = document.getElementById("finish");
	finish.classList.remove("d-none");
}

// Default

var currentnumbermenu;

var list = [];
list.length = CountQuestions();

for (var i = 0; i < list.length; i++) {
	list[i] = 0;
}

console.log(list);

MainTest(0);
