//  reverse 456

function reverse(n){
    let reverse = 0;
    for(; n > 0; n = Math.floor(n/10)){
        let lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
    }
    return reverse;
}

console.log(reverse(456));


// Sum digits of 1234


function calcSum(n){
    let sum = 0;
    for(; n > 0; n = Math.floor(n/10)){
        let digit = n % 10;
        sum += digit;
    }
    return sum;
}

console.log(calcSum(1234));


// Count digits in 90876

function countDigits(n){
    let count = 0;
    for(; n > 0; n = Math.floor(n/10)){
        count++
    }
    return count;
}

console.log(countDigits(90876))