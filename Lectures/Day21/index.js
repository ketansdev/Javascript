// // prototype and classes

// const obj = {
//     name: "Ketan",
//     age: 26,
//     greet: function(){
//         console.log("Hello Javascript");
//     }
// }

// // console.log(obj);
// // console.log(obj.hasOwnProperty("name"))
// // console.log(obj.hasOwnProperty("names"))
// // console.log(obj.toString());

// // let arr = [20, 59, 34, 65]
// // console.log(arr.length)

// let obj2 = {
//     location: "Mumbai",
//     nationality: "Indian"
// }

// obj2.__proto__ = obj;
// console.log(obj2.name);



//  greet function inside the object is repeating which doesnt foillow DRY concept

// const obj1 = {
//     name: "Ketan",
//     age: 26,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }



// const obj2 = {
//     name: "Mohan",
//     age: 29,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }




// const obj3 = {
//     name: "Rohit",
//     age: 30,
//     greet: function(){
//         console.log(`Hello ${this.name}`);
//     }
// }




// class

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi ${this.name}`);
    }

}

// let person1 = new Person("Swapnil", 33);
// console.log(person1.name, person1.age);


// let person2 = new Person("Yash", 24);
// console.log(person2.name, person2.age);



// example


class Customer extends Person{
        constructor(name, age, account, balance){
            super(name, age);
            this.account = account;
            this.balance = balance;
        }

        checkBalance(){
            return this.balance;
        }
}

const c1 = new Customer("Nikhil", 30, 123456, 20000);
console.log(c1);
console.log(c1.name);
console.log(c1.greet());
console.log(c1.checkBalance());






const object1 = {
    name: "Ketan",
    age: 26
}


const object2 =  Object.create(object1)

object2.location = "Panvel";

console.log(object2);
console.log(object2.name, object2.age, object2.location);
