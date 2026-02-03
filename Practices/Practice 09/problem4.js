// Check Overall Pass / Fail

// Write a function isStudentPassed(student) that:
// Returns "Pass" if all subjects ≥ 40
// Otherwise returns "Fail"

let student = {
  name: "Rahul",
  marks: {
    math: 80,
    eng: 35,
    sci: 90,
  },
};

const isStudentPassed = function (student) {
  let failedCount = 0;
  for (let subject in student.marks) {
    if (student.marks[subject] < 40) {
      failedCount++;
    }
  }

  if (failedCount > 0) {
    return "Fail";
  } else {
    return "Pass";
  }
};

let result = isStudentPassed(student);
console.log(result);
