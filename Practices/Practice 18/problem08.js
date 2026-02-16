// Second Largest Digit

function secondLargestDigit(num) {
  // your code
  let largest = -1;
  let secondLargest = -1;

  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);

    if (digit > largest) {
      secondLargest = largest;
      largest = digit;
    } else if(digit > secondLargest && digit !== largest){
      secondLargest = digit;
    }
  }
  if (largest === secondLargest) {
    return -1;
  }
  return secondLargest;
}

let result = secondLargestDigit(954789);
console.log(result);
