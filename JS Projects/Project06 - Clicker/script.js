const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);

  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");

  const greetings = [
    "Hello",
    "Hi",
    "Hey",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "Olá",
    "Namaste",
    "Salaam",
    "Konnichiwa",
    "Nǐ hǎo",
    "Annyeong",
    "Szia",
    "Merhaba",
    "Hei",
    "Shalom",
    "Zdravstvuyte",
    "Sawubona",
    "Jambo",
  ];

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "indigo",
    "violet",
  ];

  console.log(colors[Math.floor(Math.random() * colors.length)]);
  console.log(greetings[Math.floor(Math.random() * greetings.length)]);

  circleElement.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];

  circleElement.textContent =
    greetings[Math.floor(Math.random() * greetings.length)];

  circleElement.style.top = `${e.clientY - 25}px`;
  circleElement.style.left = `${e.clientX - 25}px`;
  body.append(circleElement);

  setTimeout(() => {
    circleElement.remove();
  }, 5000);
});
