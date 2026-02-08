const form = document.querySelector("form");
const answer = {
  q1: "Hyper Text Markup Language",
  q2: "h1",
  q3: "Cascading Style Sheet",
  q4: "#",
  q5: "var",
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  let finalScore = 0;

  for (let [name, value] of data.entries()) {
    if (answer[name] == value) {
      finalScore++;
    }
  }

  const result = document.getElementById("result");
  result.textContent = `Your Score is ${finalScore} out of 5`;

  if (finalScore >= 3) {
    result.style.color = "green";
  } else {
    result.style.color = "red";
  }

  setTimeout(() => {
    result.textContent = "";
  }, 5000);

  form.reset();
});
