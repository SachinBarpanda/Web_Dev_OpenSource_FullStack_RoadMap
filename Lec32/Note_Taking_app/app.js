
// select the title
let titleEle = document.getElementById('title');
// selecting the ul 
let listEle = document.getElementById('list');
// selecting my btn for the event 
let addBtnEle = document.getElementById('add-button');

function noteTaking(){
    
    // extracting the value from input 
    let titleText = titleEle.value;

    // creating the li for appending it
    let li = document.createElement('li');

    // inserting the text inside li from the input value
    li.innerText = titleText;

    // newly created li appended 
    listEle.appendChild(li);

    // clear input 
    titleEle.value = "";

    li.addEventListener('click', function(){
        li.remove();
    })

}

addBtnEle.addEventListener('click', noteTaking);
titleEle.addEventListener('keydown',function(e){
    if(e.key === 'Enter'){
        noteTaking();
    }
} )


