// Loop Program 3: Sum of Numbers from 1 to N

// Task:
// Write a function called sumTillN that:
// Takes a number n
// Returns the sum of numbers from 1 to n

// Example:
// sumTillN(5); // 15

function sumTillN(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum
}

console.log(sumTillN(5));