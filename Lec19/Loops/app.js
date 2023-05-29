for(let i = 0 ; i <= 5 ; i++){
    for(let j = 0 ; j <= 5 ; j++){
        if(i === j){
            break;
        }else {
            console.log(i + "  " + j);
        }
    }
}
let x = 100;
while(x >= 0){
    console.log(x);
    x-=10;
}

let person = {
    name : 'sam',
    age : 27,
    isMale : true
}
let array = ['sam', 'hardik', 'akshay','sachin'];

for(let item in person){
    console.log(`${item} --> ${person[item]}`);
}

for(let item of array){
    console.log(item);
}