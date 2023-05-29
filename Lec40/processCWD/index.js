console.log(process.cwd());
 console.log(__dirname);

// for(let i = 0; i < 20 ; i++){
//     let str = '';
//     if(i%3==0){
//         str+='fizz';
//     }
//     if(i%5==0){
//         str+='buzz';
//     }
//     if(str===''){
//         console.log(i);
//     }else{
//         console.log(str);
//     }
// }
let three = 0;
let five = 0;
for(let i = 0 ; i < 20 ; i++){
    let str = '';


    if(three==3){
        str += 'fizz';
        three = 0;
    }
    if(five == 5){
        str += 'buzz';
        five = 0;
    }

    if(str===''){
        console.log(i);
    }else{
        console.log(str);
    }
    three++;
    five++;

}