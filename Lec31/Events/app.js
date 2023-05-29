// function doSomething(){
    
//     console.log('hello inline event');

// }

// 2nd way

// let btn = document.querySelector('button');

// btn.onclick = function(){
//     console.log('hello duniya dusra way');
// }

// mouseEnter event
// btn.onmouseenter = function(){
//     btn.style.color='red';
// }
// btn.onmouseleave = function(){
//     btn.style.color='black';
// }

// this is to show that only 1 event is possible 

// function one(){
//     console.log('one');
// }
// function two(){
//     console.log('two');
// }

// btn.onclick = one;
// btn.onclick = two;


// solution : use eventListener


// function one(){
//     console.log('one');
// }
// function two(){
//     console.log('two');
// }

// btn.addEventListener('click',one);
// btn.addEventListener('click',two);

// question: btn click --> body background-color : palm

let body = document.querySelector('body');
let btn1  = document.querySelector('button');
function change(){
    if(!body.classList.contains('toggle')){
        body.style.backgroundColor='plum';
        body.classList.toggle('toggle');
    }else{
        body.style.backgroundColor='white';
        body.classList.toggle('toggle');
    }
    
}
btn1.addEventListener('click',change);

// let body = document.querySelector('body');
// let btn1  = document.querySelector('button');
// function change(){
//     if(!body.classList.contains('a')){
//         body.style.backgroundColor = 'plum';
//         body.classList.toggle('a')
        
//     }
//     else{
//         body.style.backgroundColor = 'white'
//         body.classList.toggle('a')
//     }
// }
// btn1.addEventListener('click',change);

// ondblclick --> 2 baar click 
// let btn = document.querySelector('button');
// btn.addEventListener('dblclick',function(){
//     console.log('2 baar click hua');
// }) 
