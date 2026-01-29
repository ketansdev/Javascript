let result = document.querySelector(".result");

setInterval(() => {
  

  let current_timeStamp = Date.now();
  let olympic_start_timeStamp = new Date(2026, 1, 6).getTime();
  let timeStamp = olympic_start_timeStamp - current_timeStamp;

  if (timeStamp <= 0) {
    clearInterval(timer);
    result.innerText = "🏔️ Winter Olympics 2026 has started!";
    return;
  }

  let day = Math.floor(timeStamp / (1000 * 60 * 60 * 24));
  timeStamp %= 1000 * 60 * 60 * 24;

  let hours = Math.floor(timeStamp / (1000 * 60 * 60));
  timeStamp %= 1000 * 60 * 60;

  let minutes = Math.floor(timeStamp / (1000 * 60));
  timeStamp %= 1000 * 60;

  let seconds = Math.floor(timeStamp / 1000);
  timeStamp %= 1000;

  day = String(day).padStart(2, "0")
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  result.innerText = `${day} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}, 1000);
