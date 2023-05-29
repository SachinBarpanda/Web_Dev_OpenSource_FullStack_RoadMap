

// let formElement = document.querySelector('form');

// formElement.addEventListener('submit',function(event){
//     event.preventDefault();
//     console.log('form submitted');
// })

//browser won't get refreshed

let formEl = document.querySelector('form');
formEl.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(formEl.elements[0]);
    console.log(formEl.elements[1].value);
})








