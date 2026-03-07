const applyCouponBtn = document.getElementById("apply-coupon-btn");
const inputCoupon = document.getElementById("coupon-input");
const message = document.getElementById("message");
const finalPrice = document.getElementById("final-price");

const availableCoupons = ["save10", "save20", "discount50"];

function validateCoupon() {
  alert("Try these coupons: SAVE10, SAVE20, DISCOUNT50");
  if (!inputCoupon.value) {
    message.textContent = "Please enter a coupon code";
    message.style.color = "red";
    return;
  }

  let value = inputCoupon.value.trim().toLowerCase();
  let originalPrice = 1000;
  let discount = parseFloat(value.slice(-2));
  let finalAmount = 0;
  if (availableCoupons.includes(value)) {
    finalAmount = (discount * originalPrice) / 100;
    message.textContent = `Coupon applied! You saved ${discount} %`;
    finalPrice.textContent = originalPrice - finalAmount;
    message.style.color = "#016429";
  } else {
    message.textContent = `Invalid coupon code`;
    message.style.color = "red";
    finalPrice.textContent = originalPrice;
  }
}

applyCouponBtn.addEventListener("click", validateCoupon);
