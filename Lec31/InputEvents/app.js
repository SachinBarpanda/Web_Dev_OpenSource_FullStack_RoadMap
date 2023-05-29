

// let inputEvent = document.querySelector('input');

// inputEvent.addEventListener('input',function(){
//     console.log('input element chal gaya bhai logon');
// })

// function fun(event){
//     console.log(event.target.value);
//     console.log('input element chal gaya bhai ');
// }
// inputEvent.addEventListener('input',fun);


// task
// let inputEvent = document.querySelector('input');
// let h2tag = document.querySelector('h2');

// function fun(event){
//     h2tag.innerText = event.target.value;
// }
// inputEvent.addEventListener('input',fun);


// Practice

let input1 = document.querySelector('input');
let h2 = document.querySelector('h2');
function fun(e){
    // console.log(e.target.value);
    h2.innerText = e.target.value;
    
}
input1.addEventListener('input',fun);
