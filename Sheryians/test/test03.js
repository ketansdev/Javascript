// Q1 . Print Numbers from 1 to 10 using for loop

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Q2. Print numbers from 10 to 1 using while loop

// let i = 10

// while(i > 0){
//     console.log(i);
//     i--;
// }

// Q3. Print even numbers from 1 to 20 using a for loop

// for(let i = 1 ; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// Q4. Print odd numbers from 1 to 15 using a while loop

// let i = 1;

// while(i <= 15){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i++;
// }

// Q5. Print the multiplication table of 5

// for(let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = ${i*5}`);
// }

// Q6. Find the sum of numbers from 1 to 100 using a loop

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }

// console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3

// for(let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log(i);
//     }
// }

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
//  for eg "1 is odd", "2 is even", ...

// let num = prompt("Enter a number");

// for(let i = 1; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is Even`);
//     }else{
//         console.log(`${i} is Odd`);
//     }
// }

// Q9. Count how many numbers between 1 to 100 are divisble by both 3 and 5

// let count = 0;
// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//         count++;
//     }
// }

// console.log(count);

// 10. Stop at First Multiple of 7

// write a loop from 1 to 100 that:
//  Prints each number
//  Stops completely when it finds the first number divisble by 7

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   if (i % 7 === 0) {
//     break;
//   }
// }

//  11. Skip Multiplies of 3

// Write a loop from 1 to 20 that:

// Skips numbers divisible by 3
// Prints all others

// use continue

// Expected output : 1 2 4 5 7 8 10 11....(no 3, 6, 9, 12 etc)

// for(let i = 1; i <= 20; i++){
//     if(i % 3 === 0){
//         continue;
//     }

//     console.log(i);
// }

// Q12 . Print first 5 Odd numbers only

// Write a loop from 1 to 100 that:
// prints only 5 odd numbers
// then stops the loop

// use both if, contiunue and a counter + break

// Expected output:

// 1 3 5 7 9

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
  count++;

  if (count >= 5) {
    break;
  }
  
}
