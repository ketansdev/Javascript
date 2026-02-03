// Next Program (Array)
// Program 2: Find Smallest Element in Array

// Task:

// Function name: findSmallest
// Return the smallest number
// Use for loop only

const findSmallest = function(array){
    console.log(array.length);
    if(array.length === 0){
        return null;
    }
    let smallest = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] < smallest){
            smallest = array[i];
        }
    }
    return smallest;
}

console.log(findSmallest([]));