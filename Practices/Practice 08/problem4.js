// Question 4: Check Property Exists
// Task:

// Write a function that checks whether a property exists in an object.

// Function:
// function hasProperty(obj, prop)

// Example:
// hasProperty({ name: "Rahul", age: 21 }, "age");
// Output:
// true

// hasProperty({ name: "Rahul" }, "marks");

// Output:
// false


const hasProperty = function(obj, prop){
     return obj.hasOwnProperty(prop);
}

let result = hasProperty({ name: "Rahul"}, "age");
console.log(result);