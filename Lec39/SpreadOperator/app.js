// let arr1 = [10,20,30,40];
// let arr2 = [50,60,70];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// spread Operator -- modern way

// arr2 = [...arr1, 50,60,70];
// console.log(arr2);

// object

// let obj = {
//     l : 10,
//     m : 'sam',
//     n : 'live class'
// }

// let obj2 = {
//     ...obj,
//     age : 27
// }
// console.log(obj2);

// delete obj.m;

// console.log(obj);

// ques : why ?
// console.log(Math.min(0,1,2,3,4,5,6,7,8,9));
// console.log(Math.max(0,1,2,3,4,5,6,7,8,9));

let arr1 = [0,1,2,3,4,5,6,7,8,9];

console.log(Math.min(arr1));
console.log(Math.max(arr1));
console.log(Math.min(...arr1));
console.log(Math.max(...arr1));


