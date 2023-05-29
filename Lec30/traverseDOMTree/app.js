
// 1.parentElement
let para1 = document.querySelector('#para1');


console.log(para1.parentElement);//property hai 
console.log(para1.parentElement.parentElement);//property hai 
console.log(para1.parentElement.parentElement.parentElement);//property hai 
console.log(para1.parentElement.parentElement.parentElement.parentElement);//property hai 
console.log(para1.parentElement.parentElement.parentElement.parentElement.parentElement);//property hai 



// 2.children
let arti = document.querySelector('#arti');
console.log(arti.children);//also a property

let coll = arti.children;
for(let item of coll){
    item.style.fontSize = '25px';
}

// 3.next Element Sibling

let div3 = document.querySelector('#div3');
console.log(div3.nextElementSibling);

// 4. previous Element Sibling

console.log(div3.previousElementSibling);