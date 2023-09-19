const semicirclesScore = document.querySelectorAll(".semicircle-score");
const score = 15;
const correct = document.querySelectorAll(".percent-c");
const wrong = document.querySelectorAll(".percent-w");
const question = document.querySelectorAll(".percent-q");

const totalScore = 29;
const wrongScore = totalScore - score;
const wrongPercent = (((totalScore - score) * 100) / totalScore).toFixed(2);
const scorePercent = ((score * 100) / totalScore).toFixed(2);

const scoreDisplay = () => {
	const angle = (score / totalScore) * 360;
	if (angle > 180) {
		semicirclesScore[1].style.display = "default";
		semicirclesScore[0].style.transform = `rotate(${-angle}deg)`;
		semicirclesScore[1].style.transform = `rotate(180deg)`;
	} else {
		semicirclesScore[1].style.display = "default";
		semicirclesScore[0].style.transform = `rotate(${-angle}deg)`;
		semicirclesScore[1].style.transform = `rotate(${-angle}deg)`;
		semicirclesScore[2].style.transform = `rotate(180deg)`;
		semicirclesScore[2].style.backgroundColor = "#d20094";
	}

	correct[0].innerHTML = `${scorePercent}%`;
	wrong[0].innerHTML = `${wrongPercent}%`;

	question[0].innerHTML = `${score}/${totalScore} questions`;
	question[1].innerHTML = `${wrongScore}/${totalScore} questions`;
	if (scorePercent < 60) {
		const centralText = document.querySelector(".pass");
		centralText.style.display = "none";
		const congrats = document.querySelector(".congrats");
		congrats.innerHTML = `<h2 class='fail'>FAIL!</h2>`;
	}
};

scoreDisplay();
console.log(correct);
