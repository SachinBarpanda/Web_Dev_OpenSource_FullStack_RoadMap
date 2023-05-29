
// 1.Regular Invocation

// function fn(){
//     console.log(this);
// }
// fn();

// 2.Method Invocation
// let obj = {
//     number : 2, 
//     fun : function(){
//         console.log(this);
//     }
// }

// obj.fun();//this is pointing to the object over which it is called 


// let obj1 = {
//     number : 2, 
//     fun : function(){
//         console.log(this);
//     }
// }

// let myFun = obj1.fun;
// myFun();

// let obj = {
//     num : 20,
//     fn : function(){
//         function calculate(){
//             console.log(this);
//         }
//         calculate();
//     }
// }
// obj.fn();


// 3.Constructor function calling
// function CreateObj(){
//     this.x = 20;
// }
// let obj  = new CreateObj();
// console.log(obj.x); 

// 4. call , apply 

// let obj = {
//     a : 20,
//     fn : function(a,b,c){
//         console.log(this,a,b,c);
//     }
// }
// let obj2 = {
//     a: 50
// }

// let obj3= {
//     name : 'samarth'
// }

// // obj.fn.call(obj2);
// // obj.fn.call(obj2, 1, 2 ,3);
// // obj.fn.call(obj, 1, 2, 3);
// obj.fn.apply(obj,[ 11, 21, 31]);

// .bind()
let obj3 = {
    num : 3,
    fn : function(){
        console.log(this);
    }
}
// obj3.fn.bind(obj3);
let myFUn = obj3.fn.bind(obj3);
myFUn();






