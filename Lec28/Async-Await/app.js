





let p1 = new function(){

}
console.log(p1);//return empty object

async function some1(){

}
console.log(some());//return promise

async function some(){
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('1 sec ho gaye');
            resolve('Inside resolve');
        }, 1000);
    })

    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('1.2s hogaye')
            resolve();
        } , 1200);
    })
    console.log('dono kaam ho gaye')
}
some();
// console.log(some());