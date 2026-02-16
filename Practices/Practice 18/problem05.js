// Check if a Number is Armstrong Number

// A number is Armstrong if:
// Sum of each digit raised to power of total digits = original number

function isArmstrong(num) {
  let sum = 0;
  let original = num;
  let count = 0;

  if (num === 0) {
    count = 1;
  }

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  num = original;

  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    sum += Math.pow(lastDigit, count);
  }

  return sum === original ? "Armstrong" : "Not Armstrong";
}

let result = isArmstrong(0);
console.log(result);
