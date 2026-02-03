// Loop Program 4: Factorial of a Number

// Task:
// Write a function called factorial that:
// Takes a number n
// Returns n! (factorial)

// Example:
// factorial(5); // 120

function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));