function CountQuestions() {
	var block = document.getElementById("countquestions");

	if (block === null) return 0;

	return block.textContent;
}

function MainTest(active) {
	var countquestions = CountQuestions();
	var iactive = active;
	iactive += 1;

	for (var i = 1; i <= countquestions; i++) {
		var block = document.getElementById("question_" + i);

		if (block === null) break;

		if (iactive == i) {
			block.classList.remove("d-none");
			MainCheckNumber(i);
		} else {
			block.classList.add("d-none");
		}
	}
}

function MainCheckNumber(number) {
	console.log("NOW: " + number);
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

MainTest(0);
