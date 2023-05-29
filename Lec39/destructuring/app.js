// let fruits = ['apple','Mango', 'Guava', 'Banana', 'Lichi', 'Pineapple'];
// let first = fruits[0]; 
// let second = fruits[1];
// console.log(first);
// console.log(second);

// destructure an array 
// let fruits = ['apple','Mango', 'Guava', 'Banana', 'Lichi', 'Pineapple'];
// let [sachin, manish] = fruits

// console.log(sachin);
// console.log(manish);


// let fruits = ['apple','Mango', 'Guava' , 'Grapes'];
// let [sachin,manish,third ,forth='ananas', fifth] = fruits;
// console.log(sachin);
// console.log(manish);
// console.log(third);
// console.log(forth);
// console.log(fifth);




let car = {
    name : 'Nano',
    price : 100000
}


// older way
// let n = car.name;
// let p = car.price;
// console.log (n);
// console.log (p);


// newer way
// let {n,p} = car;
// console.log (n);
// console.log (p);

// let {name,price} = car;
// console.log ( name);
// console.log ( price);


// let {name:n, price:p} = car;
// console.log ( name);//won't work
// console.log ( price);


let {name : naam = "maruti",price} = car;
//default value nahi ayega because we have original values
console.log ( naam);
console.log ( price);
