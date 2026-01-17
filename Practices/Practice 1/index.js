/*
Question 1 (Basics: numbers, conditionals, functions)

Task:
Write a function called checkEvenOdd that:
Takes one number as a parameter
Returns "Even" if the number is even
Returns "Odd" if the number is odd

*/


function checkEvenOdd(num){
    if(num%2 === 0){
        return "Even";
    }else{
        return "Odd"
    }
}

console.log(checkEvenOdd(6));

/**************************************************************************/

/**
 * Question 2 (Strings + loops)

Task:
Write a function called countVowels that:

Takes a string as input
Counts how many vowels (a, e, i, o, u) are present
Returns the count
 */


function countVowels(str){
    let count = 0;
    str = str.toLowerCase();
    for(let ch in str){
        if(str[ch] === "a" || str[ch] === "e" || str[ch] === "i" || str[ch] === "o" || str[ch] === "u"){
            count += 1;
        }
    }
    return count;
}

console.log(countVowels("ketAn Vilas Shetge"));


/**************************************************************************/

/**
 * 
 *Question 3 (Arrays + loops)

Task:
Write a function called sumArray that:
Takes an array of numbers
Returns the sum of all elements

Example:
sumArray([1, 2, 3, 4]); // 10
sumArray([10, 5]);     // 15
 */


function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4]));



/**************************************************************************/

/**
 * Question 4 (Objects + functions)

Task:
Create a function called getFullName that:
Takes an object as input
The object has properties: firstName and lastName
Returns the full name as a single string
 */

function getFullName(obj){
    return obj.firstName + " " + obj.lastName;

}

console.log(getFullName({ firstName: "Ketan", lastName: "Shetge" }));


/**************************************************************************/


/**
 * Question 5 (Conditionals + arrays)

Task:
Write a function called findLargest that:
Takes an array of numbers
Returns the largest number in the array
Assume array will always have at least one number

Example:
findLargest([3, 7, 2, 9, 1]); // 9
 */

function findLargest(arr){
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest([3, 7, 2, 9, 1]));



/**************************************************************************/

/**
 * Question 6 (Functions + conditionals)
 * Task:
Write a function called isPalindrome that:
Takes a string
Returns true if the string is a palindrome
Returns false otherwise

🔹 A palindrome reads the same forward and backward.
 */


function isPalindrome(str){
    for(let i =0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        } 
    }
    return true;
}

console.log(isPalindrome("ketan"));
