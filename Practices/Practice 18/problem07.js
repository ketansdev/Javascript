// Find the Largest Digit in a Number

function largestDigit(num) {
  let max = 0;
  num = Math.abs(num);

  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);

    if (lastDigit > max) {
      max = lastDigit;
    }
  }
  return max;
}

let result = largestDigit(0);
console.log(result);
