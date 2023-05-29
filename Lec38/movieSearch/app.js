let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('#list');

btn.addEventListener('click',function(){
    let searchText = input.value;
    // console.log(searchText);
    let data = fetchData(searchText);
    // console.log(data);
    input.value = '';
})

// api call karna
function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        // console.log(response.data);
        manipulateDOM(response.data);
    })
    
    // console.log('function chal gaya');
}

function manipulateDOM(datas){//array

    // remove previoius movies
    while(list.firstChild){
        list.firstChild.remove();
    }

    for(let data of datas){
        let figure = document.createElement('figure');

        if(data.show.image){
            figure.innerHTML = 
            `<img src=${data.show.image.original}>
            <h2>${data.show.name}</h2>
            `
            list.appendChild(figure);
        }
    }
}

{/* <h3>${data.show.summary}</h3>
            <p>${data.show.rating.average}</p> */}