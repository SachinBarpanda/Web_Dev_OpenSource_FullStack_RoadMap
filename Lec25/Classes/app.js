// function Person(firstName , lastName , mail){
//     this.first = firstName;
//     this.last = lastName;
//     this.email = mail;
// }

// Person.prototype.printName = function(){
//     console.log(`My name is : ${this.first} ${this.last}`);
// }

// Person.prototype.getName = function(){
//     return (`${this.first} ${this.last}`);
// }


// let person1 = new Person('Sam', 'Vohra', 'sam@gmail.com');
// console.log(person1);
// console.log(person1.printName());
// console.log(person1.getName());

//-------Class Syntax--------------

class Person{
    constructor(firstName , lastName , mail){
        this.first = firstName;
        this.last = lastName;
        this.email = mail;
    }

    getName(){
        return (`${this.first} ${this.last}`);
    }

    printName(){
        console.log(`My name is ${this.first} ${this.last}`)
    }
}

// Inheritence 
class Student extends Person{
    constructor(firstName , lastName , mail, roll){
        super(firstName,lastName,mail);
        this.roll = roll;
    }
}

let student1 = new Student('Ras', 'putin','putin@gmail.com',123);

console.log(student1);
console.log(student1.first);
console.log(student1.last);
console.log(student1.email);
console.log(student1.roll);


// let person2 = new Person("sam","vohra","sam@123");
// console.log(person2);
// console.log(person2.email);
// console.log(person2.printName());
// console.log(person2.getName());
