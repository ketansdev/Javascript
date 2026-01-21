// forEach, filter, reducer, map, set

// const arr = [20, 50, 30, 6.9, 10, 35];

// arr.forEach((number, index, array) =>{
//     console.log(number, index, array);
// })



// let sum = 0;
// arr.forEach((number) =>{
//     sum += number;
// })

// console.log(sum);



//  filter

// const arr = [20, 50, 30, 6.9, 10, 35];

// true : select , false: not selected
// const newArr = arr.filter((number) => number > 25);
// console.log(newArr);

// this = [20, 50, 30, 6.9, 10, 35];


// Array.prototype.filtering = function(compare){

//     let newArr = [];
//     for(let num of this){
//         if(compare(num)){
//             newArr.push(num)
//         }
//     }
//     return newArr;
// }

// let result = arr.filtering((num) => num > 20);
// console.log(result);


// const a = [24, 78, 90, 21, 46];
// let ans = a.filtering((num) => num > 25);
// console.log(ans)




// const arr = [20, 50, 30, 6.9, 10, 35];

// console.log(arr.sort((a, b)=> a - b));




// const arr = [20, 50, 30, 6.9, 10, 35];

// let result = arr.map((num) => num*2);
// console.log(result, arr);


const employees = [
  { id: 1, name: "Rahul Sharma", age: 28, city: "Mumbai", salary: 65000, skills: ["JS", "React"], active: true },
  { id: 2, name: "Priya Patel", age: 32, city: "Delhi", salary: 85000, skills: ["Python", "Django"], active: false },
  { id: 3, name: "Amit Singh", age: 25, city: "Bangalore", salary: 45000, skills: ["JS", "Node"], active: true },
  { id: 4, name: "Neha Gupta", age: 29, city: "Pune", salary: 72000, skills: ["Java", "Spring"], active: true },
  { id: 5, name: "Vikram Joshi", age: 34, city: "Hyderabad", salary: 95000, skills: ["Python", "ML"], active: true },
  { id: 6, name: "Sneha Rao", age: 27, city: "Chennai", salary: 58000, skills: ["JS", "Vue"], active: false },
  { id: 7, name: "Karan Mehta", age: 31, city: "Mumbai", salary: 78000, skills: ["React", "CSS"], active: true },
  { id: 8, name: "Divya Nair", age: 26, city: "Kolkata", salary: 52000, skills: ["PHP", "Laravel"], active: true },
  { id: 9, name: "Rohan Desai", age: 33, city: "Delhi", salary: 88000, skills: ["JS", "Angular"], active: true },
  { id: 10, name: "Anita Verma", age: 30, city: "Noida", salary: 68000, skills: ["Python", "Flask"], active: false },
  { id: 11, name: "Sanjay Kumar", age: 29, city: "Bangalore", salary: 71000, skills: ["Java", "Hibernate"], active: true },
  { id: 12, name: "Meera Iyer", age: 35, city: "Mumbai", salary: 92000, skills: ["Node", "MongoDB"], active: true },
  { id: 13, name: "Arjun Malhotra", age: 24, city: "Pune", salary: 42000, skills: ["JS", "HTML"], active: true },
  { id: 14, name: "Pooja Reddy", age: 28, city: "Hyderabad", salary: 64000, skills: ["React", "Redux"], active: false },
  { id: 15, name: "Nikhil Bose", age: 37, city: "Chennai", salary: 105000, skills: ["Python", "Data Science"], active: true },
  { id: 16, name: "Ritu Agarwal", age: 26, city: "Delhi", salary: 49000, skills: ["CSS", "Tailwind"], active: true },
  { id: 17, name: "Gaurav Sethi", age: 32, city: "Bangalore", salary: 82000, skills: ["Angular", "TypeScript"], active: true },
  { id: 18, name: "Shweta Pillai", age: 27, city: "Mumbai", salary: 59000, skills: ["Vue", "Vuetify"], active: true },
  { id: 19, name: "Tarun Kapoor", age: 30, city: "Noida", salary: 76000, skills: ["Node", "Express"], active: false },
  { id: 20, name: "Kavya Menon", age: 29, city: "Kolkata", salary: 67000, skills: ["MongoDB", "Mongoose"], active: true }
];

const newEmployees = employees.filter((employee) => employee.salary > 70000).sort((a, b) => b.salary - a.salary);
console.log(newEmployees);
