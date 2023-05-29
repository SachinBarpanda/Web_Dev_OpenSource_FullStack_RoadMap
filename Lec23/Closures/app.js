function someFun(){
    let userName = 'Einstein';
    function printName(){
        console.log(userName);
    }
    return printName;
}
let returnedValue = someFun();
returnedValue() ;