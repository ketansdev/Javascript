const successBtn = document.querySelector("#success-btn");
const errorBtn = document.querySelector("#error-btn");
const infoBtn = document.querySelector("#info-btn");
const toastContainer = document.querySelector("#toastMsg");

function displayToast(type) {
  const toast = document.createElement("div");
  toast.classList.add("toast", type);
  let message = "";
  if (type === "success") message = "Action Successful";
  if (type === "error") message = "Something went wrong!";
  if (type === "info") message = "Here is some information";

  toast.innerHTML = `<span>${message}</span>
  <button id = "toast-close-btn">x</button>`;

  toastContainer.append(toast);

  const closeBtn = toast.querySelector("#toast-close-btn");

  closeBtn.addEventListener("click", () => {
    toast.remove();
  });

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

successBtn.addEventListener("click", () => displayToast("success"));
errorBtn.addEventListener("click", () => displayToast("error"));
infoBtn.addEventListener("click", () => displayToast("info"));
