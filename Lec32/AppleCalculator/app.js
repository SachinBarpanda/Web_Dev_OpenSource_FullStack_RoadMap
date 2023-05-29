let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let count  = 0 ;

for(let button of buttons){
    
    button.addEventListener('click',function(event){
        count = 0; 
        let btnText = event.target.innerText ;
        if(btnText == 'AC'){
            input.value = '';
        }else if(btnText == '='){
            try{
                input.value = eval(input.value);    
            }
            catch(e){
                input.value = 'nikal badmash';
            }
        }
        else{
            input.value += btnText;
        }
    })
}

setInterval(shutUp,1000);

function shutUp(){
    count++;
    console.log(count);
    if(count == 5){
        input.value = "";
    }
}