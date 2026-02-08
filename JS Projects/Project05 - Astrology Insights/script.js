// Zodiac signs for simplicity (just repeating 12 signs)
const zodiacSigns = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

// Generate 31-day zodiac array (repeating signs)
// const zodiacDays = Array.from({length: 31}, (_, i) => zodiacSigns[i % 12]);

// Compliments array
const compliments = [
  "You are amazing!", "Your energy is inspiring!", "You shine bright today!", 
  "Your smile can light up a room!", "You are a creative soul!", "You make others happy!", 
  "You are full of courage!", "Your kindness is contagious!", "You are a natural leader!", 
  "Your intuition is strong!", "You are charming!", "You bring joy everywhere!", 
  "You are resilient!", "You are thoughtful!", "You have great ideas!", 
  "You are loved!", "Your positivity is magnetic!", "You are adventurous!", 
  "You are talented!", "Your passion is inspiring!", "You are generous!", 
  "You are confident!", "You are unique!", "Your presence is calming!", 
  "You are wise!", "Your creativity flows!", "You are unstoppable!", 
  "You are beautiful inside out!", "You are focused!", "You are playful!", 
  "You are radiant!"
];

console.log("compliments", compliments.length)

// Victim Cards / Challenges array
const victimCards = [
  "Be careful with impulsive decisions", "Watch out for conflicts today", 
  "You might feel tired, rest well", "Avoid overthinking", "Beware of misunderstandings", 
  "Take care of finances", "Patience is needed", "Don't rush tasks", "Be mindful of words", 
  "Trust your instincts", "Avoid arguments", "Stay calm under pressure", 
  "Focus on priorities", "Avoid distractions", "Plan ahead", 
  "Take small steps", "Seek advice if unsure", "Don't ignore signals", 
  "Handle emotions wisely", "Stay grounded", "Balance work and rest", 
  "Avoid overcommitment", "Listen carefully", "Stay flexible", 
  "Take time for self-care", "Be open to learning", "Handle conflicts diplomatically", 
  "Check details twice", "Be patient with others", "Stay cautious", "Reflect before acting"
];
console.log("victimCards", victimCards.length)

// Recommendations / Tips array
const recommendations = [
  "Meditate for 10 mins", "Connect with nature", "Journal your thoughts", 
  "Practice gratitude", "Exercise lightly", "Read something new", "Help someone today", 
  "Listen to music", "Try a new recipe", "Organize your space", "Reach out to a friend", 
  "Declutter mentally", "Learn a small skill", "Smile often", "Take a walk", 
  "Drink plenty of water", "Set small goals", "Reflect on achievements", 
  "Avoid negative news", "Try deep breathing", "Practice patience", 
  "Say something kind", "Focus on one task", "Take a power nap", 
  "Write down ideas", "Plan your day", "Do a random act of kindness", 
  "Stretch your body", "Visualize success", "Be mindful today", "Laugh a lot"
];
console.log("recommendations", recommendations.length)

// Predictions array
const predictions = [
  "Today is perfect for new beginnings", "You may face a minor challenge today", 
  "Expect a surprise encounter", "A friend will need your help", 
  "Take time for self-reflection", "You will feel energetic", "Good news is coming", 
  "Focus on relationships today", "Your creativity will shine", "Financial opportunities appear", 
  "Trust your intuition", "Avoid conflicts at work", "A chance to learn something new", 
  "You may feel nostalgic", "Take small risks today", 
  "Someone appreciates your efforts", "Keep calm and carry on", "A peaceful day awaits", 
  "Stay alert for new opportunities", "A breakthrough in your work", 
  "You may reconnect with someone", "Take care of your health", "Good day for planning", 
  "An idea may inspire you", "You may face delays, stay patient", 
  "Positive energy surrounds you", "Listen carefully today", "An emotional moment arises", 
  "Your efforts are recognized", "Focus on self-improvement", "End the day with gratitude"
];
console.log("predictions", predictions.length)


const form = document.getElementById("form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const firstname = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const day = parseInt(document.querySelector("#day").value);
    const month = parseInt(document.querySelector("#month").value);
    const year = parseInt(document.querySelector("#year").value);

    let text = `Hello ${firstname} ${surname}. Your Zodiac sign is ${zodiacSigns[month-1]}. ${compliments[(day*month) % 31]}. ${victimCards[month % 31]}. ${recommendations[year % 31]}. ${predictions[(firstname.length * surname.length) % 31]}`;

    // const result = document.getElementById("result");

    // result.textContent = text;
    typeWriter(text, 35);

})


const result = document.getElementById("result");

function typeWriter(text, speed = 40) {
  result.innerHTML = ""; // clear old text
  let index = 0;

  const interval = setInterval(() => {
    result.innerHTML += text.charAt(index);
    index++;

    if (index === text.length) {
      clearInterval(interval);
    }
  }, speed);
}

