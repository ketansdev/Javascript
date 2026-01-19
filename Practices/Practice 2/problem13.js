// Advanced Conditional Program 13: Age Category

// Task:
// Write a function called ageCategory that:
// Takes age as input

// Returns:

// "Child" → age < 13
// "Teen" → age between 13 and 19
// "Adult" → age between 20 and 59
// "Senior" → age ≥ 60
// If age is negative → "Invalid age"

// Example:
// ageCategory(10); // "Child"
// ageCategory(16); // "Teen"
// ageCategory(30); // "Adult"
// ageCategory(65); // "Senior"

function ageCategory(age){
    let result = ""
    if(age < 0){
        result = "Invalid age";
    }else if(age < 13){
        result = "Child";
    }else if(age <= 19){
        result = "Teen";
    }else if(age <= 59){
        result = "Adult";
    }else{
        result = "Senior";
    }

    return result;
}

console.log(ageCategory(8))