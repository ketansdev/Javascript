// Count Digits in a Number

// Write a function that returns how many digits are in a number.

function countDigits(num) {
    let count = 0;

    if(num === 0){
        return 1;
    }

    while(num > 0){
        num = Math.floor(num/10);

        count ++;
    }
    return count;
}

let result = countDigits(567432);
console.log(result);