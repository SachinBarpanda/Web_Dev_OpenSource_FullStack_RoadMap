let PI = 3.141;
let magicNum = 68;

console.log('live classes ka bhaukal ');

function sqr(num){
    return num*num;
}

let obj = {
    first:'samarth',
    last : 'vohra',
    age : 27,
    getName:function(){
        console.log(this.first + ' ' + this.last);
    }
}

console.log(PI);
console.log(magicNum);
console.log(Math.sqrt(6));
console.log(obj.getName());
