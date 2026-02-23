const getOTPButton = document.querySelector("#get-otp-btn");
const modal = document.querySelector("#modal");
const cancelButton = document.querySelector("#cancel-btn");
const verifyOTPBtutton = document.querySelector("#verify-otp-btn");
const inputs = document.querySelectorAll(".inputs input");
const msg = document.querySelector(".msg");

let otp = "";
function getOTP() {
  msg.textContent = "";
  inputs.forEach((input) => {
    input.value = "";
  });

  otp = Math.floor(1000 + Math.random() * 9000).toString();
  alert(otp);
  displayModal();
}

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function validateOTP() {
  let enteredOtp = "";

  inputs.forEach((input) => {
    enteredOtp += input.value;
  });
  console.log(enteredOtp.length);

  if (otp === enteredOtp) {
    msg.textContent = "OTP Verified ✅";
    msg.style.color = "green";
    setTimeout(() => {
      alert("Verification Successful 🎉");
      closeModal();
    }, 1000);
  } else {
    msg.textContent = "Invalid OTP ❌";
    msg.style.color = "red";
  }

  if (enteredOtp.length < 4) {
    console.log("inside");
    msg.textContent = "Please enter complete OTP";
    msg.style.color = "red";
    console.log("end");
  }
}

inputs.forEach((input, index) =>{
    input.addEventListener("input", () =>{

        if(input.value && index < inputs.length - 1){
            inputs[index+1].focus();
        }
    })

    input.addEventListener("keydown", (e) =>{
        console.log(e);
        if(e.key === "Backspace" &&  !input.value &&  index > 0){
            inputs[index-1].focus();
        }
    })
})

getOTPButton.addEventListener("click", getOTP);
cancelButton.addEventListener("click", closeModal);
verifyOTPBtutton.addEventListener("click", validateOTP);
