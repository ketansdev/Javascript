// Conditional Program 2: Even or Odd

// Task:
// Write a function called isEvenOrOdd that:
// Takes a number
// Returns "Even" if the number is even
// Returns "Odd" if the number is odd

// Example:
// isEvenOrOdd(10); // "Even"
// isEvenOrOdd(7);  // "Odd"


function isEvenOrOdd(num){
    if(num % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

console.log(isEvenOrOdd(-8))