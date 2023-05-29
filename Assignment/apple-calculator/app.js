


let buttons = document.querySelectorAll('button');

let input = document.querySelector('input');

let idle = 0;

for(let button of buttons){
    button.addEventListener('click' , function(event){
        idle = 0;
        let btnText = event.target.innerText;
        if(btnText === 'C'){
            input.value = '';
        }
        else if( btnText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = 'gaddari korbe' //invalid
            }
        }
        else{
            input.value += btnText;
        }       
    })
}

const idletime = setInterval(count,2000);

function count(){
    idle++;
    console.log(idle);
    if(idle>=10){
        clearInterval(setInterval);
        location.reload();
    }
}
count();












