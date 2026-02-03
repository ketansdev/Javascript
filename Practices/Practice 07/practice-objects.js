// Program 1: Create & Read Object

// Task:

// 1️⃣ Create an object named student with:

// name  → "Rahul"
// age   → 21
// marks → 85

// 2️⃣ Print this output:

// Rahul is 21 years old and scored 85 marks

let student = {
    name: "Rahul",
    age : 21,
    marks: 85
}

console.log(`${student.name} is ${student.age} years old and scored ${student.marks} marks`);


// Update the student’s marks from 85 → 92

// Then print:
// Updated marks: 92

student.marks = 92;

console.log(`Updated marks: ${student.marks}`);




// Program 3: Add New Property

// Task:

// Add a new property called city with value "Mumbai"
// Then print the full object.

// Expected output (structure may vary):

student.city = "Mumbai";
console.log(student);





// OBJECT QUIZ — QUESTION 4
// Program 4: Delete a Property

// Task:

// Remove the age property from the student object
// and then print the object.

delete student.age;

console.log(student);




// OBJECT QUIZ — QUESTION 5
// Program 5: Check if Property Exists

// Task:

// Check whether the property marks exists in the student object.
// If it exists, print:
// Marks property exists

// Else print:
// Marks property does not exist
console.log(student["marks"]);
if("marks"in student){
    console.log("Marks property exists");
}else{
    console.log("Marks property does not exist");
}



// Program 6: Loop Through Object

// Print all keys and values like this:

// name : Rahul
// marks : 92
// city : Mumbai


for(let key in student){
    console.log(`${key}: ${student[key]}`);
}