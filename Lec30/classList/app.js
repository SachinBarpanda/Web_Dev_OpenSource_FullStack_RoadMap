let arti = document.querySelector('article');

// add()
arti.classList.add('sam');
// arti.classList.add('sam samarth')//wrong way

arti.classList.add('sam','samarth','neha','maniket');
arti.classList.add('changu-mangu');

// // 2.remove()
arti.classList.remove('sam','maniket');

// // 3.toggle
// arti.classList.toggle('toggle');
//Output: true
// arti.classList.toggle('toggle');
// OutPut: false

// contains

console.log(arti.classList.contains('sachin'))
console.log(arti.classList.contains('sam'))
console.log(arti.classList.contains('samarth'))
