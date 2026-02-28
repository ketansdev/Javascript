const inputDate = document.getElementById("date");
const calculateAgeBtn = document.getElementById("calculate-age-btn");
const message = document.getElementById("message");

function calculateAge() {
  message.style.display = "none";
  if (!inputDate.value) {
    message.style.display = "block";
    message.textContent = "Please select the date";
    message.style.color = "red";
    return;
  }

  const birthDate = new Date(inputDate.value.trim());
  const currentDate = new Date();

  console.log(birthDate.getFullYear());
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  console.log(
    new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(),
  );

  if (birthDate > currentDate) {
    message.style.display = "block";
    message.textContent = "Birth date cannot be a future date";
    message.style.color = "red";
    return;
  }

  if (days < 0) {
    months--;
    days += new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0,
    ).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  console.log(years, months, days);

  message.style.display = "block";
  message.style.color = "green";
  message.textContent = `You are ${years} years, ${months} months, and ${days} days old`;
}

calculateAgeBtn.addEventListener("click", calculateAge);
