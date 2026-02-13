// const getGrade = function(score){
//     if(score >= 90 && score <= 100){
//         return "A+";
//     }else if(score >=80 && score <= 89){
//         return "A";
//     }else if(score >=70 && score <= 79){
//         return "B";
//     }else if(score >=60 && score <= 69){
//         return "C";
//     }else if(score >=33 && score <= 59){
//         return "D";
//     }else if(score >= 0 && score <= 32){
//         return "Fail";
//     }else{
//         return "Invalid Marks"
//     }

// }

// console.log(getGrade(78))

// cleaner way

//

// Rock paper scissor logic

const rps = function (user, computer) {
  user = user.toLowerCase().trim();
  computer = computer.toLowerCase().trim();

  if (user === computer) return "Draw";

  if (user === "rock" && computer === "scissor") return "User";
  if (user === "paper" && computer === "rock") return "User";
  if (user === "scissor" && computer === "paper") return "User";

  return "Computer";
};

let result = rps("Scissor", "rock");
console.log(result);
