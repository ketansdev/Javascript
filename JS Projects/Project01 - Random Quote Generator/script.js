const quotes = [
  "Believe in yourself and all that you are.",
  "Every day is a second chance.",
  "Do something today that your future self will thank you for.",
  "Small steps every day lead to big results.",
  "Dream big. Start small. Act now.",
  "Success is not final, failure is not fatal.",
  "Your only limit is your mind.",
  "Hard work beats talent when talent doesn’t work hard.",
  "Don’t wait for opportunity. Create it.",
  "Stay focused and never give up.",
  "Consistency is more important than perfection.",
  "Great things take time.",
  "Push yourself, because no one else will.",
  "Learning never exhausts the mind.",
  "Discipline is the bridge between goals and achievement.",
  "The future depends on what you do today.",
  "Believe you can and you’re halfway there.",
  "Progress, not perfection.",
  "Success starts with self-belief.",
  "Make today count.",
  "Failure is proof that you are trying.",
  "Turn obstacles into opportunities.",
  "Focus on improvement, not comparison.",
  "Your mindset shapes your reality.",
  "Work hard in silence, let success make the noise.",
  "Don’t stop until you’re proud.",
  "The best time to start was yesterday. The next best time is now.",
  "Stay positive, work hard, make it happen.",
  "Knowledge is power.",
  "Learn something new every day.",
  "Doubt kills more dreams than failure ever will.",
  "Action is the foundation of success.",
  "Be patient. Good things take time.",
  "Success is built on daily habits.",
  "Your efforts will pay off.",
  "Think big, start small.",
  "Don’t fear failure, learn from it.",
  "One step at a time is still progress.",
  "Believe. Work. Achieve.",
  "Focus on what you can control.",
  "Every expert was once a beginner.",
  "Your journey is your own.",
  "Stay hungry for knowledge.",
  "Simple actions create powerful results.",
  "Make progress every single day.",
  "Confidence comes from preparation.",
  "The grind today builds the future.",
  "Never stop learning.",
  "Growth begins outside your comfort zone.",
  "Success comes to those who keep going."
];


let quote = document.querySelector(".quote");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let index = Math.floor(Math.random() * 20);

  quote.textContent = quotes[index];
})