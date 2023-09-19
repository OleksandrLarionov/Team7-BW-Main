const semicirclesScore = document.querySelectorAll(".semicircle-score");
const score = 25;
const correct = document.querySelectorAll(".percent-c");
const wrong = document.querySelectorAll(".percent-w");
const question = document.querySelectorAll(".percent-q");

const totalScore = 30;
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
		const failText1 = document.querySelectorAll(".pass h3");
		const failText3 = document.querySelectorAll(".pass h4");
		const canvas = document.getElementById("canvas");
		failText1[0].innerHTML = `We're sorry.`;
		failText1[1].innerHTML = `You did not pass the exam`;
		failText3[0].innerHTML = `Check your email (including the promotions/spam folder)`;
		failText1[1].style.color = "#d20094";
		failText1[1].style.left = "16%";
		failText1[0].style.left = "34%";
		canvas.style.display = "none";
	}
};

scoreDisplay();

//FUNZIONE CONFETTI
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
	{ front: "red", back: "darkred" },
	{ front: "green", back: "darkgreen" },
	{ front: "blue", back: "darkblue" },
	{ front: "yellow", back: "darkyellow" },
	{ front: "orange", back: "darkorange" },
	{ front: "pink", back: "darkpink" },
	{ front: "purple", back: "darkpurple" },
	{ front: "turquoise", back: "darkturquoise" },
];

//-----------Functions--------------
resizeCanvas = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	cx = ctx.canvas.width / 2;
	cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

initConfetti = () => {
	for (let i = 0; i < confettiCount; i++) {
		confetti.push({
			color: colors[Math.floor(randomRange(0, colors.length))],
			dimensions: {
				x: randomRange(10, 20),
				y: randomRange(10, 30),
			},

			position: {
				x: randomRange(0, canvas.width),
				y: canvas.height - 1,
			},

			rotation: randomRange(0, 2 * Math.PI),
			scale: {
				x: 1,
				y: 1,
			},

			velocity: {
				x: randomRange(-25, 25),
				y: randomRange(0, -50),
			},
		});
	}
};

//---------Render-----------
render = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	confetti.forEach((confetto, index) => {
		let width = confetto.dimensions.x * confetto.scale.x;
		let height = confetto.dimensions.y * confetto.scale.y;

		// Move canvas to position and rotate
		ctx.translate(confetto.position.x, confetto.position.y);
		ctx.rotate(confetto.rotation);

		// Apply forces to velocity
		confetto.velocity.x -= confetto.velocity.x * drag;
		confetto.velocity.y = Math.min(
			confetto.velocity.y + gravity,
			terminalVelocity
		);
		confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

		// Set position
		confetto.position.x += confetto.velocity.x;
		confetto.position.y += confetto.velocity.y;

		// Delete confetti when out of frame
		if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

		// Loop confetto x position
		if (confetto.position.x > canvas.width) confetto.position.x = 0;
		if (confetto.position.x < 0) confetto.position.x = canvas.width;

		// Spin confetto by scaling y
		confetto.scale.y = Math.cos(confetto.position.y * 0.1);
		ctx.fillStyle =
			confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

		// Draw confetti
		ctx.fillRect(-width / 2, -height / 2, width, height);

		// Reset transform matrix
		ctx.setTransform(1, 0, 0, 1, 0, 0);
	});

	// Fire off another round of confetti
	if (confetti.length <= 10) initConfetti();

	window.requestAnimationFrame(render);
};

//---------Execution--------
initConfetti();
render();

//----------Resize----------
window.addEventListener("resize", function () {
	resizeCanvas();
});
