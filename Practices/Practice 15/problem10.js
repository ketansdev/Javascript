// Create a new object with only those properties whose VALUE is a string AND starts with a vowel (a, e, i, o, u).

let data = {
  name: "Rahul",
  city: "Mumbai",
  country: "India",
  company: "OpenAI",
  role: "Dev",
  age: 21,
};

const filterObject = function (obj) {
  let newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      let val = (obj[key]).toLowerCase();
      if(val.startsWith("a") || val.startsWith("e") || val.startsWith("i") || val.startsWith("o") || val.startsWith("u") ){
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
};

let result = filterObject(data);
console.log(result);
