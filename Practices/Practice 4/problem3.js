// Program 3: Count Even Numbers in Array
// Task:

// Write a function called countEvenNumbers that:
// Takes an array of numbers
// Returns the count of even numbers

// Example:
// countEvenNumbers([1, 2, 3, 4, 6]) → 3

// Rules:

// ✔ Use for loop
// ✔ No array methods

const countEvenNumbers = function(array){
    if(array.length === 0){
        return null;
    }

    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 6]));