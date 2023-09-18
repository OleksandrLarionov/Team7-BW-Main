const semicircles = document.querySelectorAll(".semicircle");
console.log(semicircles[0]);
const timer = document.querySelector(".timer");
//input

const hr = 0;
const min = 0;
const sec = 20;

const hours = hr * 3600000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds;
const starTime = Date.now();
const futureTime = starTime + setTime;

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
		semicircles[2].style.background.color = `acqua`;
	}

	//timer

	// const hrs = Math.floor((remaningTime / (1000 * 60 * 60)) % 24);
	// const min = Math.floor((remaningTime / (1000 * 60)) % 60);
	const secs = Math.floor((remaningTime / 1000) % 60);

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
};

const timeLoop = setInterval(countDownTime);
countDownTime();
