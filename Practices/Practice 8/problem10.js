// Question 10: Update Nested Object Property
// Task:

// Using the same student object, increase math marks by 10.
// After updating, print the full marks object.
// Expected output:

// { math: 90, eng: 95, sci: 90 }

let student = {
    name: "Rahul",
    marks: {
        math: 80,
        eng: 95,
        sci: 90
    }
};

student.marks.math = student.marks.math + 10;

console.log(student);