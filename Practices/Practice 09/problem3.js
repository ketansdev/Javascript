// Count Passed Subjects

// Write a function countPassedSubjects(student) that:
// Counts how many subjects have marks ≥ 40
// Returns the count

// Example:

// { math: 80, eng: 35, sci: 90 }
// → 2

let student = {
    name: "Rahul",
    marks: { math: 80, eng: 35, sci: 90 }
};


const countPassedSubjects = function(student){
    let count = 0;

    for(let subject in student.marks){
        if(student.marks[subject] >= 40){
            count++;
        }
    }
    return count;
}

let result = countPassedSubjects(student);
console.log(result);