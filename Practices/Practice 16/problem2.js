// Create a new object where each key is included only if:

// its value is a string
// AND the string contains at least one vowel

let data = {
  name: "Rahul",
  city: "Mumbai",
  code: "xyz",
  role: "Dev",
  country: "India",
  id: 123,
};

const filterObject = function (obj) {
  let newObj = {};

  for (let key in obj) {
    let val = obj[key];
    if (
      typeof val === "string" &&
      (val.toLowerCase().includes("a") ||
        val.toLowerCase().includes("e") ||
        val.toLowerCase().includes("i") ||
        val.toLowerCase().includes("o") ||
        val.toLowerCase().includes("u"))
    ) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

let result = filterObject(data);
console.log(result);
