// let students = ['sachin', 'akshay','manish','sam','hardik'];

// students.forEach(function(sa, manish){
//     console.log(`${sa}->${manish}`);
// });


// map() method

// let marks = [10,15,18,9,28,12,5,40];
// let newArr = marks.map(function(item , index){
//     return item;
// })

// let newArr1 = marks.map(function(item , index){
//     return [item,index];
// })

// console.log(marks);
// console.log(newArr1);

//filter () method --> array

// let marks = [1,2,3,4,5,6,7,8,9,10];
// let filteredArray  = marks.filter(function(item){
//     if(item>=5){
//         return true;
//     }
//     return false;
// });



//mysterious
// let marks1 = [1,2,3,4,5,6,7,8,9,10];
// let filteredArray1  = marks1.filter(function(item){
//     if(item>=5){
//         return [true,index];//still same output
//     }
//     return false;
// });


// console.log(marks);
// console.log(filteredArray);

//sort()
let arr = [12,2,34,3,88,90,16,36,12];
// let newArr = arr.sort();
let newArr = arr.sort(function(o1 , o2){
    return o1-o2;
})
console.log(newArr);