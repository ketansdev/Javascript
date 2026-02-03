// Program: Count Total Marks

// Task:
// You are given a student object with nested marks.

// let student = {
//     name: "Rahul",
//     marks: {
//         math: 80,
//         eng: 95,
//         sci: 90
//     }
// };


// 👉 Write a function totalMarks(student) that:
// Loops through the marks object
// Calculates the total sum of marks
// Returns the total
// Expected Output:

// 265


let student = {
    name: "Rahul",
    marks: {
        math: 80,
        eng: 95,
        sci: 90
    }
};

const totalMarks = function(student){
    let sum = 0;
    for(let subject in student.marks){
        sum += student.marks[subject]
    }

    return sum;
}

let result = totalMarks(student);
console.log(result);