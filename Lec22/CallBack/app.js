


function getBoolean(item){
    return typeof(item) == 'boolean';
}
function getString(item){
    return typeof(item) == 'string';
}
function getNumber(item){
    return typeof(item) == 'number';
}


function check(item , fn){
    return fn(item);//callback function
}

console.log(check(true, getBoolean));//true
console.log(check(19, getString));//false
console.log(check(19, getNumber));//true

