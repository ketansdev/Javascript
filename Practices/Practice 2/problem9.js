// Conditional Program 9: Check Triangle Type

// Task:
// Write a function called checkTriangleType that:
// Takes three side lengths
// Returns:

// "Equilateral" → all sides equal
// "Isosceles" → any two sides equal
// "Scalene" → all sides different

// Example:
// checkTriangleType(3, 3, 3); // "Equilateral"
// checkTriangleType(3, 3, 5); // "Isosceles"
// checkTriangleType(3, 4, 5); // "Scalene"



function checkTriangleType(s1, s2, s3){
    if(s1 === s2 && s2 === s3 && s1 === s3){
        return "Equilateral";
    }else if(s1 === s2 || s2 === s3 || s1 === s3){
        return "Isosceles";
    }else{
        return "Scalene";
    }
}

console.log(checkTriangleType(2, 3, 5))