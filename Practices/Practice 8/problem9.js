// Question 9: Nested Object Access
// Task:

// We have a nested object:

// let student = {
//     name: "Rahul",
//     marks: {
//         math: 80,
//         eng: 95,
//         sci: 90
//     }
// };


// Write code to print the science marks:

// 90

let student = {
    name: "Rahul",
    marks: {
        math: 80,
        eng: 95,
        sci: 90
    }
};

console.log(student["marks"]["sci"])