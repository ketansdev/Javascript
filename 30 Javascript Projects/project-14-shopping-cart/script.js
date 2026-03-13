const button = document.querySelectorAll(".products button");
const cart = document.querySelector(".cart");
const totalPrice = document.getElementById("total-price");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let price = Number(btn.dataset.price);

    totalPrice.textContent = Number(totalPrice.textContent) + price;

    let div = document.createElement("div");
    div.classList.add("added-product")

    let span = document.createElement("span");
    span.textContent = e.target.previousElementSibling.textContent;

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";

    delBtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      totalPrice.textContent = Number(totalPrice.textContent) - price;
    });

    div.append(span, delBtn);
    cart.append(div);
  });
});
