let grandParent = document.getElementById('grandParent');
let parent = document.getElementById('parent');
let child = document.getElementById('child');

// grandParent.addEventListener('click' , ()=>{
//     console.log('GrandFather Clicked');
// },true)
// parent.addEventListener('click' , ()=>{
//     console.log('Father Clicked');
// },false)
// child.addEventListener('click' , ()=>{
//     console.log('child Clicked');
// },true)


//stop at one point
grandParent.addEventListener('click' , (event)=>{
    event.stopPropagation();
    console.log('GrandFather Clicked');
},true)
parent.addEventListener('click' , (event)=>{
    console.log('Father Clicked');
},false)
child.addEventListener('click' , (event)=>{
    console.log('child Clicked');
},true)