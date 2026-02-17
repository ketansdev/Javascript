// let obj = {
//     name: "Ketan",
//     age : 25,
//     height : 5.7,
//     address: "Mumbai"
// }

// console.log(obj.address);
// console.log(obj["height"]);



// Deep access

// const user = {
//   name: "Ketan",
//   address: {
//     city: "Mumbai",
//     pin: 400018,
//     location: {
//       lat: 23.2,
//       lng: 77.4,
//     },
//   },
// };

// console.log(user['address']['location']['lng']);
// console.log(user.address.location.lng);




// destructuring

// let {lat, lng} = user.address.location
// console.log(lat, lng);




// for in loop

// let obj = {
//     name: "Ketan",
//     age: 25,
//     email: "Ketanshetgedev@gmail.com"
// }

// for(let key in obj){
//     console.log(key, obj[key]);
// }


// object.keys & object.entries

// let obj = {
//     name: "Ketan",
//     age: 25,
//     email: "Ketanshetgedev@gmail.com"
// }


// console.log(Object.keys(obj));
// console.log(Object.entries(obj));




// spread operator

// let obj = {
//     name: "Ketan",
//     age: 25,
//     email: "Ketanshetgedev@gmail.com"
// }


// let obj2 = {...obj};
// obj2.height = 5.7;
// console.log(obj2);
// console.log(obj);




// obhect.assign

// let obj = {
//     name: "Ketan",
//     age: 25,
//     email: "Ketanshetgedev@gmail.com"
// };

// let newObj = Object.assign({role: "Engineer"}, obj);

// console.log(obj);
// console.log(newObj);




//  Deep cloning

// const user = {
//   name: "Ketan",
//   address: {
//     city: "Mumbai",
//     pin: 400018,
//     location: {
//       lat: 23.2,
//       lng: 77.4,
//     },
//   },
// };


// let user2 = JSON.parse(JSON.stringify(user));
// console.log(user2);

// user2.address.city = "Pune";

// console.log(user);
// console.log(user2)





//  destructuring 


// const user = {
//     "first-name" : "Ketan",
// }


// let { "first-name" :firstName} = user;

// console.log(firstName);





const course = {
    title: "Javascript",
    duration : "4 Weeks",
}

for(let key in course){
    console.log(`${key} : ${course[key]}`);
}