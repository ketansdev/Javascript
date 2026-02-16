// Problem 1: Reverse a Number

// Write a function that:
// Takes a number as input
// Returns the reversed number

// const reverseNumber = function (num) {
//   if (num === 0) {
//     return;
//   }
//   let reverse = 0;
//   while (num > 0) {
//     let lastDigit = num % 10;
//     let removeLast = Math.floor(num / 10);
//     num = removeLast;

//     reverse = reverse * 10 + lastDigit;
//   }
//   return reverse;
// };

// let result = reverseNumber(123);
// console.log(result);

function reverseNumber(num) {
  if (num === 0) {
    return;
  }
  let reverse = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    let removeLast = Math.floor(num / 10);

    num = removeLast;
    reverse = reverse * 10 + lastDigit;
  }
  return reverse;
}

let result = reverseNumber(123);
console.log(result);