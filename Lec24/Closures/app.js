
// function anything(){
//     let naam = 'sam';
//     function print(){
//         console.log(naam);
//     }
//     return print();
// }
// let fun = anything();
// fun();


// function counter(){
//     let count = 0 ;

//     function getCount(){
//         return count;
//     }
//     return getCount;
// }
// console.log(counter());



// function counter(){
//     let count = 0 ;
//     return {
//         getCount : function(){
//             return count;
//         }
//     }
//     return getCount;
// }
// let counter1 = counter();
// console.log(counter1.getCount());


function counter(){
    let count = 0;

    return {
        getCount : function(){
            return count;
        }, 
        increment : function(){
            count+=1;
        },
        decrement : function(){
            count-=1;
        },
        reset : function(){
            count = 0;
        }
    };
}



let counter2 = counter();

console.log(counter2.getCount());
counter2.increment();
counter2.increment();
counter2.count = 9;
console.log(counter2.count);
console.log(counter2.getCount());
