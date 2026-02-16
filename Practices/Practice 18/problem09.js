// Count Even and Odd Digits

function countEvenOdd(num) {
  let even = 0;
  let odd = 0;

  if(num === 0){
    return { "even": 1, "odd": 0 }
  }

  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num/10);

    if (digit % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return { "even": even, "odd": odd }
}

let result = countEvenOdd(0);
console.log(result);
