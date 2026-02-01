// Question 13: Rename a Property


// Task

// Write a function renameProperty(obj, oldKey, newKey) that:
// Renames oldKey to newKey
// Keeps the value the same
// Deletes the old key
// Returns the updated object

let student = {
  name: "Rahul",
  age: 21,
  city: "Mumbai"
};

const renameProperty = function(obj, oldKey, newKey){
    let value = obj[oldKey];
    delete obj[oldKey];
    obj[newKey] = value;

    return obj;
}

let result = renameProperty(student, "city", "location");
console.log(result);