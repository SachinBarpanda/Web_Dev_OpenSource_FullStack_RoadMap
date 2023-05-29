// function fun(){

// }
// let naam = fun();
// console.log(naam);

// function user(){
//     this.username = 'samarth';
//     this.email = 'samarthVohra@gmail.com';
// }
// let user1 = new user();
// console.log(user1);



// function user(name , email){
//     this.username = name;
//     this.email = email;
//     this.description = function(){
//         return 'my name is '+this.username;
//     }
// }


function User(name , email){
    this.username = name;
    this.email = email;
    // this.description = function(){
    //     return 'my name is '+this.username;
    // }
}
User.prototype.description=function(){
        return 'my name is '+this.username;
}

let user1 = new User('sam','a@gmail.com');
let user2 = new User('samarth','abc@gmail.com');
console.log(user1);
console.log(user1.description());
console.log(user2);
console.log(user2.description());
