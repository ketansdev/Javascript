// Conditional Program 8: Find Largest of Three Numbers

// Task:
// Write a function called findLargestOfThree that:
// Takes three numbers
// Returns the largest number

// Example:
// findLargestOfThree(10, 25, 15); // 25
// findLargestOfThree(5, 5, 3);   // 5


function findLargestOfThree(num1, num2, num3){
    if(num1 >= num2 && num1 >= num3){
        return num1;
    }else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else{
        return num3;
    }
}

console.log(findLargestOfThree(100, 100, 90));