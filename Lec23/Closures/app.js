// function someFun(){
//     let userName = 'Einstein';
//     function printName(){
//         console.log(userName);
//     }
//     return printName();
// }
// let returnedValue = someFun();
// returnedValue ;


// function someFun(){
//     let userName = 'Einstein';
//     function printName(){
//         console.log(userName);
//     }
//     return printName;
// }
// let returnedValue = someFun();
// returnedValue() ;

function someFun(){
    let userName = 'Einstein';
    function printName(){
        console.log("Hello");
        let userName1 = 'Einstein';
        console.log(userName+"12");
        function printName1(){
            console.log(userName1);
        }
        return printName1();
    }
    return printName();
}
let returnedValue = someFun();
returnedValue ;