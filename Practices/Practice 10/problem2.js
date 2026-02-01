// Question 2: Increase All Marks by Bonus


// Task

// Create a function addBonus(student, bonus) that:
// Adds bonus marks to each subject
// Updates the same student object
// Returns the updated student


let student = {
  name: "Rahul",
  marks: {
    math: 60,
    eng: 55,
    sci: 70
  }
};


const addBonus = function(student, bonus){
    for(let subject in student.marks){
        student.marks[subject] += bonus;
    }

    return student;
}

let result = addBonus(student, 5);
console.log(result);