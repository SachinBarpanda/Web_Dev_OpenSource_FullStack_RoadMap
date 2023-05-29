

// rest  parameter
function sam(a,b,c,...d){
    let sum = 0 ;
    for(let num in d){
        sum+=num;
    }
    return a+b+c+sum;
}

let ans = sam(1,2,3,4,5,6,7,8,9);
console.log(ans);

// this parameter should be at the end
// function sam(...num , a, b, c){

// }
// this is wrong

