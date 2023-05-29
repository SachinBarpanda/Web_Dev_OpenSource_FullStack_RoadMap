
let ul = document.querySelector('ul');


const req = new XMLHttpRequest();

// Connection established

req.open("GET",'https://inshorts.deta.dev/news?category=science');
req.open("GET",'https://inshorts.deta.dev/news?category=entertainment');

// to send

req.send();

req.onload = function(){
    let samachar = JSON.parse(this.response);
    for (let d of samachar.data){
        let li = document.createElement('li');
        li.innerHTML =  `<img src=${d.imageUrl} height= "100px"/ >
        <span> ${d.title}</span>`;
        ul.appendChild(li);
    }
};
req.onerror = function(){
    console.log(this);
};









