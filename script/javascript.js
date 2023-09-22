let numberOfQuestions = localStorage.getItem('number')
let testDifficulty = localStorage.getItem('difficulty')

const easy = [
	{	
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "What does CPU stand for?",
		correct_answer: "Central Processing Unit",
		incorrect_answers: [
			"Central Process Unit",
			"Computer Personal Unit",
			"Central Processor Unit",
		],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question:
			"In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
		correct_answer: "Final",
		incorrect_answers: ["Static", "Private", "Public"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "The logo for Snapchat is a Bell.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question:
			"Pointers were not used in the original C programming language; they were added later on in C++.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question:
			"What is the most preferred image format used for logos in the Wikimedia database?",
		correct_answer: ".svg",
		incorrect_answers: [".png", ".jpeg", ".gif"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "In web design, what does CSS stand for?",
		correct_answer: "Cascading Style Sheet",
		incorrect_answers: [
			"Counter Strike: Source",
			"Corrective Style Sheet",
			"Computer Style Sheet",
		],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "normal",
		question:
			"What is the code name for the mobile operating system Android 7.0?",
		correct_answer: "Nougat",
		incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "On Twitter, what is the character limit for a Tweet?",
		correct_answer: "140",
		incorrect_answers: ["120", "160", "100"],
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "easy",
		question: "Linux was first created as an alternative to Windows XP.",
		correct_answer: "False",
		incorrect_answers: ["True"],
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "normal",
		question:
			"Which programming language shares its name with an island in Indonesia?",
		correct_answer: "Java",
		incorrect_answers: ["Python", "C", "Jakarta"],
	},
	
	
	
];

const normal = [{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "easy",
	question: "When Gmail first launched, how much storage did it provide for your email?",
	correct_answer: "1GB",
	incorrect_answers: [
		"512MB",
		"5GB",
		"Unlimited"
	]
},
{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "normal",
	question: "HTML is what type of language?",
	correct_answer: "Markup Language",
	incorrect_answers: [
		"Macro Language",
		"Programming Language",
		"Scripting Language"
	]
},
{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "normal",
	question: "If you were to code software in this language you'd only be able to type 0's and 1's.",
	correct_answer: "Binary",
	incorrect_answers: [
		"JavaScript",
		"C++",
		"Python"
	]
},
{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "normal",
	question: "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
	correct_answer: "HD Graphics 500",
	incorrect_answers: [
		"HD Graphics 700 ",
		"HD Graphics 600",
		"HD Graphics 7000"
	]
},
{
	category: "Science: Computers",
	type: "boolean",
	difficulty: "normal",
	question: "Ada Lovelace is often considered the first computer programmer.",
	correct_answer: "True",
	incorrect_answers: [
		"False"
	]
},
{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "easy",
	question: "Which computer language would you associate Django framework with?",
	correct_answer: "Python",
	incorrect_answers: [
		"C#",
		"C++",
		"Java"
	]
},
{
	category: "Science: Computers",
	type: "boolean",
	difficulty: "hard",
	question: "Time on Computers is measured via the EPOX System.",
	correct_answer: "False",
	incorrect_answers: [
		"True"
	]
},
{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "hard",
	question: "Which programming language shares its name with an island in Indonesia?",
	correct_answer: "Java",
	incorrect_answers: [
		"Python",
		"C",
		"Jakarta"
	]
},
{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "easy",
	question: "In computing, what does MIDI stand for?",
	correct_answer: "Musical Instrument Digital Interface",
	incorrect_answers: [
		"Musical Interface of Digital Instruments",
		"Modular Interface of Digital Instruments",
		"Musical Instrument Data Interface"
	]
},
{
	category: "Science: Computers",
	type: "multiple",
	difficulty: "hard",
	question: "What language does Node.js use?",
	correct_answer: "JavaScript",
	incorrect_answers: [
		"Java",
		"Java Source",
		"Joomla Source Code"
	]
}
]


const hard = [
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
		correct_answer: "1000",
		incorrect_answers: [
			"512",
			"1024",
			"500"
		]
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question: "HTML is what type of language?",
		correct_answer: "Markup Language",
		incorrect_answers: [
			"Macro Language",
			"Programming Language",
			"Scripting Language"
		]
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question: "What is the domain name for the country Tuvalu?",
		correct_answer: ".tv",
		incorrect_answers: [
			".tu",
			".tt",
			".tl"
		]
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "normal",
		question: "On Twitter, what was the original character limit for a Tweet?",
		correct_answer: "140",
		incorrect_answers: [
			"120",
			"160",
			"100"
		]
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "hard",
		question: `"HTML" stands for Hypertext Markup Language.`,
		correct_answer: "True",
		incorrect_answers: [
			"False"
		]
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "hard",
		question: "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
		correct_answer: "False",
		incorrect_answers: [
			"True"
		]
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question: "The numbering system with a radix of 16 is more commonly referred to as ",
		correct_answer: "Hexidecimal",
		incorrect_answers: [
			"Binary",
			"Duodecimal",
			"Octal"
		]
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "hard",
		question: "How many values can a single byte represent?",
		correct_answer: "256",
		incorrect_answers: [
			"8",
			"1",
			"1024"
		]
	},
	{
		category: "Science: Computers",
		type: "multiple",
		difficulty: "easy",
		question: "In computing, what does MIDI stand for?",
		correct_answer: "Musical Instrument Digital Interface",
		incorrect_answers: [
			"Musical Interface of Digital Instruments",
			"Modular Interface of Digital Instruments",
			"Musical Instrument Data Interface"
		]
	},
	{
		category: "Science: Computers",
		type: "boolean",
		difficulty: "hard",
		question: `The Python programming language gets its name from the British comedy group "Monty Python".`,
		correct_answer: "True",
		incorrect_answers: [
			"False"
		]
	}
]

let box
if (testDifficulty==='easy') {
	box = Array.from(easy)
} else if (testDifficulty==='normal'){
	box = Array.from(normal)
} else if (testDifficulty==='hard'){
	box = Array.from(hard)
}

const questions = box.splice(0,numberOfQuestions)

const denominator = document.getElementById('pink')
denominator.innerText = `/${numberOfQuestions}`

const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");

const startquiz=function()
{
	if (i < questions.length) {
		question.innerText = questions[i].question;

		if (questions[i].type === "multiple") 
		{
			const randomNumArr = [0, 1, 2, 3];
			const randomNum = function () {
				const i = Math.floor(Math.random() * randomNumArr.length);
				const randomNumber = randomNumArr.splice(i, 1)[0];
				return randomNumber;
			};

			answ[0].innerText = questions[i].correct_answer;
			answ[1].innerText = questions[i].incorrect_answers[0];
			answ[2].innerText = questions[i].incorrect_answers[1];
			answ[3].innerText = questions[i].incorrect_answers[2];
			answ[2].style.display = "inline-block";
			answ[3].style.display = "inline-block";
			answ[0].classList.add("answer-box");
			answ[1].classList.add("answer-box");
			answ[2].classList.add("answer-box");
			answ[3].classList.add("answer-box");
			answer.appendChild(answ[randomNum()]);
			answer.appendChild(answ[randomNum()]);
			answer.appendChild(answ[randomNum()]);
			answer.appendChild(answ[randomNum()]);
			
		} else if (questions[i].type === "boolean") {
			const randomNumArr = [0, 1, 2, 3];
			const randomNum = function () {
				const i = Math.floor(Math.random() * randomNumArr.length);
				const randomNumber = randomNumArr.splice(i, 1)[0];
				return randomNumber;
			};

			answ[0].innerText = questions[i].correct_answer;
			answ[1].innerText = questions[i].incorrect_answers[0];
			answ[2].style.display = "none";
			answ[3].style.display = "none";
			answ[0].classList.add("answer-box");
			answ[1].classList.add("answer-box");
			answ[2].classList.add("answer-box");
			answ[3].classList.add("answer-box");
			answer.appendChild(answ[randomNum()]);
			answer.appendChild(answ[randomNum()]);
			answer.appendChild(answ[randomNum()]);
			answer.appendChild(answ[randomNum()]);
		}
	} else {
		//alert("test finito, totale punteggio: " + score);
		resetTimer();
		let score_serialized = JSON.parse(score);
		localStorage.setItem("score", score_serialized);
		window.location.href="result-score.html"
	}
}

//input

let hr = 0;
let min = 0;
let sec = 0; // set timer
switch (questions[0].difficulty)
{
	case "easy": sec=30;
		break;
	case "normal": sec=60;
		break;
	case "hard": sec=90;
		break;
}


let hours = hr * 3600000;
let minutes = min * 60000;
let seconds = sec * 1000;
let setTime = hours + minutes + seconds;
let startTime = Date.now();
let futureTime = startTime + setTime;

// funzione per far girare i rettangoli
const moveCircles = () => {
	let currentTime = Date.now();
	let remaningTime = futureTime - currentTime;
	let angle = (remaningTime / setTime) * 360;
	//indicatore di proggressione
	if (angle > 180) {
		semicircles[1].style.display = "default";
		semicircles[0].style.transform = `rotate(${-angle}deg)`;
		semicircles[1].style.transform = `rotate(180deg)`;
	} else {
		semicircles[1].style.display = "default";
		semicircles[0].style.transform = `rotate(${-angle}deg)`;
		semicircles[1].style.transform = `rotate(${-angle}deg)`;
		semicircles[2].style.transform = `rotate(180deg)`;
		semicircles[2].style.backgroundColor = "rgb(196, 164, 200)";
	}
	
};

const countDownTime = () => {
	const currentTime = Date.now();
	const remaningTime = futureTime - currentTime;
	moveCircles();

	//timer
	const secs = Math.floor((remaningTime / 1000) % 90);

	timer.innerHTML = `
  <div class='colon'>${secs}</div>`;

	if (remaningTime < 0) {
		console.log("primo if");
		clearInterval(timeLoop);
		semicircles[0].style.display = "none";
		semicircles[1].style.display = "none";
		semicircles[2].style.display = "none";
		timer.innerHTML = `<div class='colon'>0</div>`;
		i++;
		if(counter.innerText<10)
		{
		counter.innerText = i + 1;
		}
		resetTimer();
		startquiz();
		
	}
	if (secs > 19 && secs < 100) {
		const timerPosition = (document.querySelector(".timer").style.left =
			"32px");
	} else if (secs > 9) {
		const timerPosition = (document.querySelector(".timer").style.left =
			"39px");
	} else {
		const timerPosition = (document.querySelector(".timer").style.left =
			"47px");
	}
};
let timeLoop = setInterval(countDownTime); // continua a richiamare la mia funzione del tempo e aggiorna il timer
function resetTimer() {
	semicircles[0].style.display = "block";
	semicircles[1].style.display = "block";
	semicircles[2].style.display = "block";

	let hr = 0;
	let min = 0;
	let sec = 30; //CAMBIARE QUI

	if(i<questions.length)
	{
		switch (questions[i+1].difficulty)
		{
			case "easy": sec=30;
				break;
			case "normal": sec=60;
				break;
			case "hard": sec=90;
				break;
		}
	}


	let hours = hr * 3600000;
	let minutes = min * 60000;
	let seconds = sec * 1000;
	let setTime = hours + minutes + seconds;
	futureTime = Date.now() + setTime; // Aggiorna futureTime



	// rimettiamo le funzioni del tempo
	semicircles[2].style.transform = `rotate(360deg)`;
	semicircles[2].style.backgroundColor = "#00ffff";

	// riavvio del timer
	timeLoop = setInterval(countDownTime);
}

//result score

const svuotatutto = function (e) 
	{
		const everytab = document.getElementsByClassName("cellSelected");
		const everytab1 = Array.from(everytab);
		for (let i = 0; i < everytab1.length; i++) 
	{
		everytab1[i].classList.remove("cellSelected");
	}
	confirm.style.display = "none";
};
const question = document.getElementById("question");
const answer = document.getElementById("answers");
const answ = [];
let i = 0;
const confirm = document.createElement("button");
confirm.classList.add("submit");
confirm.onclick = () => resetTimer();
confirm.innerHTML = "PROSSIMA →";
const confirmdiv = document.getElementById("confirma");
confirmdiv.appendChild(confirm);
confirm.style.display = "none";
let score = 0;
const counter = document.getElementById("totalquest");
counter.innerText = i + 1;

confirm.addEventListener("click", function () {
	let risp = document.getElementsByClassName("cellSelected");
	let risp2 = Array.from(risp);
	console.log(risp2[0].innerText);
	console.log(numberOfQuestions)
	console.log(counter.innerText)
	if (risp2[0].innerText === questions[i].correct_answer) 
	{
		score += 1;
		console.log(score);
	}
	i++;
	if(counter.innerText<questions.length)
		{
		counter.innerText = i + 1;
		console.log(counter)
		}
	svuotatutto();
	startquiz();
});
for (let i = 0; i < 4; i++) 
{
	answ[i] = document.createElement("div");
	answ[i].addEventListener("click", function (e) 
	{
		svuotatutto(e);
		answ[i].classList.add("cellSelected");
		confirm.style.display = "inline-block";
	});
}

const random = [0, 1, 2, 3];
const r = function () {
	let i = Math.floor(Math.random() * random.length);
	let num = random.splice(i, 1)[0];
	return num;
};
startquiz();


// const footer = document.getElementsByTagName('footer')[0]

console.log(i);

// console.log(questions);
//const confirm=document.createElement("div");