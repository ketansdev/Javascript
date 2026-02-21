const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");

const steps = document.querySelectorAll(".step");
const errorMsg = document.querySelectorAll(".error-msg");

let currentStep = 0;

function updateForm() {
  console.log(validateStep());
  if (!validateStep()) {
    return;
  }

  currentStep++;
  updateProgressBar();
  toggleStep();
  clearErros();

  if (currentStep >= steps.length) {
    alert("Form submitted successfully ✅");
    currentStep = steps.length - 1;
  }

  toggleStep();
}

function prevStep(){
    currentStep --;
    toggleStep();
}

// toggle step

function toggleStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  prevBtn.style.display = currentStep === 0 ? "none" : "block";
  nextBtn.innerText = currentStep === steps.length - 1 ? "Submit" : "Next";

}

// Update progress bar

function updateProgressBar() {
  const progressBar = document.querySelector("#progress-bar");

  progressBar.style.width = (currentStep / steps.length) * 100 + "%";
  progressBar.style.backgroundColor = "#2D167F";
}

//  Handle Erros
function validateStep() {
  const errorMsg = document.querySelectorAll(".error-msg");
  const input = steps[currentStep].querySelector("input");

  if (
    steps[currentStep].classList.contains("active") &&
    input.value.trim() === ""
  ) {
    errorMsg[currentStep].style.display = "block";
    return false;
  }
  return true;
}

function clearErros() {
  errorMsg.forEach((error) => {
    error.style.display = "none";
  });
}

nextBtn.addEventListener("click", updateForm);
prevBtn.addEventListener("click", prevStep);
toggleStep();
updateProgressBar();
