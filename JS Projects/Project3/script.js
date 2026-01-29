let clockContainer = document.querySelector(".time");

let date = new Date();
let time = date.toLocaleTimeString();

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  clockContainer.innerText = time;
}, 1000);
