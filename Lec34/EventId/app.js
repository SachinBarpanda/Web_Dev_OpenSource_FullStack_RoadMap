
let product = document.querySelectorAll('section figure');


//not best way
// for(let item of product){
//     item.addEventListener('click', function(){
//         console.log(this.innerText);
//     })
// }

//Event Delegation

let section = document.querySelector('section');

section.addEventListener('click',function(e){
    if(e.target.nodeName ==='FIGURE'){
        console.log(e.target.innerText);
    }
})


