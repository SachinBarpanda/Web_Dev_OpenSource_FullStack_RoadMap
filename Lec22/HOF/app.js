// function a(fn){
//     console.log('hi I am inside A');
//     fn();
// }
// function b(){
//     console.log('hi I am inside B');
// }
// a(b);


// Cond 2
// function a(){
//     console.log('Inside a');
//     function b(){
//         console.log('Insie b');
//     }
//     return b();
// }

// let temp = a();
// console.log(temp);

// let given = true;
// let arr = ['sam','samarth',10,20,true,false];


// function getBoolean(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) == 'boolean'){
//             result.push(item);
//         }
//     }
//     return result;
// }


// function getString(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) == 'string'){
//             result.push(item);
//         }
//     }
//     return result;
// }



// function getNumber(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof(item) == 'number'){
//             result.push(item);
//         }
//     }
//     return result;
// }

// console.log(getBoolean(arr));
// console.log(getNumber(arr));
// console.log( getString(arr));


let arr = ['sam','samarth',10,20,true,false];


function get(arr,fn){
    let result = [];
    for(let item of arr){
        if(fn(item)){
            result.push(item);
        }
    }
    return result;
}

function getBoolean(item){
    return typeof(item) == 'boolean';
}
function getString(item){
    return typeof(item) == 'string';
}
function getNumber(item){
    return typeof(item) == 'number';
}

console.log(get(arr,getBoolean));
console.log(get(arr,getNumber));
console.log(get(arr,getString));