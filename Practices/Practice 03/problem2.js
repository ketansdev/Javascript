// Loop Program 2: Print Even Numbers from 1 to N

// Task:
// Write a function called printEvenNumbers that:
// Takes a number n
// Prints only even numbers between 1 and n

// Example:
// printEvenNumbers(10);
// // Output:
// // 2
// // 4
// // 6
// // 8
// // 10

function printEvenNumbers(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

printEvenNumbers(10)