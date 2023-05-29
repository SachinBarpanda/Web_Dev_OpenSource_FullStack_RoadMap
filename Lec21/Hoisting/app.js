//ques 1
// var a = 20;
// function meraFunc(){
//     console.log("Inside mera function");
// }
// console.log(a);
// meraFunc();

// ques 2 --> hoisting
// console.log(a);
// meraFunc();
// function meraFunc(){
//     console.log("Inside mera function");
// }

// var a = 20;

// var a = 10;
// sam();
// function sam(){
//     console.log(a);
//     console.log('inner function');
// }
// console.log(a);



console.log(a);
sam();
function sam(){
    console.log('inner function');
    console.log(a);
    
}
let a = 10;