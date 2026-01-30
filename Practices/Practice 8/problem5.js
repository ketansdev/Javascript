// Question 5: Count Keys With Value > 50
// Task:
// Write a function that counts how many properties have values greater than 50.

// Example:
// countHighScores({ math: 80, eng: 45, sci: 90 });

// Output:
// 2


const countHighScores = function(obj){
    let count = 0;
    for(let key in obj){
        if(obj[key] > 50){
            count ++
        }
    }
    return count;
}

let result = countHighScores({ math: 80, eng: 45, sci: 90 });
console.log(result);