// Write a function that returns an array of values whose corresponding keys start with a vowel (a, e, i, o, u).

let data = {
  age: 21,
  name: "Rahul",
  email: "rahul@gmail.com",
  city: "Mumbai",
  isStudent: true,
  occupation: "Developer"
};

const checkVovwelKey = function(obj){
    let arr = [];
    for(let key in obj){
        let objKey = key.toLocaleLowerCase();
        if(objKey.startsWith("a") || objKey.startsWith("e") || objKey.startsWith("i") || objKey.startsWith("o") || objKey.startsWith("u")){
            arr.push(obj[key]);
        }
    }
    return arr;
}

let result = checkVovwelKey(data);
console.log(result);