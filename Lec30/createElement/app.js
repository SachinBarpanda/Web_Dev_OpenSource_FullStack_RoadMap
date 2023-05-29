// document.createElement('h1')
// document.createElement('p')
let pappiLaal = document.createElement('div');
let foolandevi = document.createElement('div');

let arti = document.getElementById('arti');

pappiLaal.innerText = 'pappiChullo';
foolandevi.innerText = 'foolean devi imagination';
// arti.appendChild(pappiLaal);
// arti.appendChild(foolandevi);//single element

// arti.append(pappiLaal,foolandevi);//multiple element
// arti.prepend(pappiLaal,foolandevi);

// arti.appendChild('ziddi child : dharamwati');//error
// arti.append(pappiLaal,foolandevi,'ziddi child : dharamwati');
let span = document.createElement("span");
span.innerText = "Span baanaya hai";
arti.append(pappiLaal);
pappiLaal.before(span , ' hello1 ')
// arti.prepend(pappiLaal,foolandevi,'ziddi child : dharamwati');
    











