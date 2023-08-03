// function sum(){
//     let num1 = 10;
//     let num2 = 30;
//     console.log(num1+num2);
// }
// sum();

// function triple(num3){
//     let num1 = 10;
//     let num2 = 20;
//     console.log(num1+num2+num3);
// }
// triple();

// function sum2(){
//     let num1 = 10;
//     let num2 = 20;
//     return num1+num2;
// }

// console.log(sum2());

// function sam(num1, num2){
//     return num1 + num2;
// }
// console.log(sam(30,40));

function sam2(num1 , num2 = 40){
    console.log(num1);
    console.log(num2);
}
sam2(20,10);

function grade( marks){
    if(marks>90){
        return 'O';
    }
    else if (marks>80){
        return 'A';
    }
    else if (marks>70){
        return 'B';
    }
    else if (marks>60){
        return 'C';
    }
    else if (marks>50){
        return 'D';
    }
    else{
        return 'Fail Ho Gye Bhai';
    }
}
console.log(grade(67));
console.log(grade("sam"));//else chalega


function summ(num1, num2){
    return num1 + num2;
}

console.log(summ(10,'sam'));
console.log(summ(10,true));//11 ayega
console.log(summ('100',false));

