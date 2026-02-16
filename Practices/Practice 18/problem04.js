// Find Sum of Digits

// Write a function that returns the sum of digits of a number.

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    sum += lastDigit;
  }
  return sum;
}

let result = sumOfDigits(100);
console.log(result);