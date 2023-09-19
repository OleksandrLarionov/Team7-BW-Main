const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");
//input

const hr = 0;
const min = 0;
const sec = 20; // set timer

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime + setTime;

const countDownTime = () => {
	const currentTime = Date.now();
	const remaningTime = futureTime - currentTime;
	const angle = (remaningTime / setTime) * 360;
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

	//timer

	// const hrs = Math.floor((remaningTime / (1000 * 60 * 60)) % 24);
	// const min = Math.floor((remaningTime / (1000 * 60)) % 60);
	const secs = Math.floor((remaningTime / 1000) % 90);

	timer.innerHTML = `
  <div class='colon'>${secs}</div>`;

	// end
	if (remaningTime < 0) {
		clearInterval(timeLoop);
		semicircles[0].style.display = "none";
		semicircles[1].style.display = "none";
		semicircles[2].style.display = "none";

		timer.innerHTML = `
    <div class='colon'>0</div>`;
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

const timeLoop = setInterval(countDownTime);
countDownTime();

//result score
