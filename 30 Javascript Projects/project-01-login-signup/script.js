const form = document.getElementById("auth-form");
const formHeading = document.getElementById("form-heading");
const nameGroup = document.getElementById("name-group");

const submitBtn = document.getElementById("submit-btn");
const toggleText = document.getElementById("toggle-text");
const toggleLink = document.getElementById("toggle-link");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const successMessage = document.getElementById("success-msg");

let isSignup = false;
function toggleForm() {
  isSignup = !isSignup;

  if (isSignup) {
    formHeading.innerText = "Signup";
    nameGroup.style.display = "block";
    submitBtn.innerText = "Signup";
    toggleText.innerText = "Already have an account?";
    toggleLink.innerText = "Login";
  } else {
    formHeading.innerText = "Login";
    nameGroup.style.display = "none";
    submitBtn.innerText = "Login";
    toggleText.innerText = "Don't have an account?";
    toggleLink.innerText = "Signup";
  }

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);

  clearErrors();
  form.reset();
}

function clearErrors() {
  document.querySelectorAll(".error-msg").forEach((err) => {
    err.style.display = "none";
  });
}

function handleForm(e) {
  e.preventDefault();

  const inputName = document.getElementById("name").value.trim();
  const inputEmail = document.getElementById("email").value.trim();
  const inputPassword = document.getElementById("password").value.trim();

  let isValid = true;

  if (isSignup && inputName === "") {
    nameError.style.display = "block";
    isValid = false;
  }

  if (!inputEmail.includes("@") || inputEmail === "") {
    emailError.style.display = "block";
    isValid = false;
  }

  console.log(inputPassword.length);
  if (inputPassword.length < 6 || inputPassword === "") {
    passwordError.style.display = "block";
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  //   Sign up

  if (isSignup) {
    const user = { inputName, inputEmail, inputPassword };
    localStorage.setItem("user", JSON.stringify(user));

    successMessage.innerText = "Signup Successful 🎉 Please login now.";
    successMessage.style.display = "block";

    toggleForm();
    return;
  }

  //   Login

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No account Found, Please Sign up first");
  }

  if (
    inputEmail === savedUser.inputEmail &&
    inputPassword === savedUser.inputPassword
  ) {
    successMessage.style.display = "block";
    successMessage.textContent = `Welcome back, ${savedUser.inputName}✅`;
    form.reset();
  } else {
    alert("Invalid Email or Password");
  }

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 2000);
}

form.addEventListener("submit", handleForm);

toggleLink.addEventListener("click", toggleForm);
