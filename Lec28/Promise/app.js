

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let data = 'hi dosto ye promise hai'
        resolve(data);
        let error = 'oops dikkat aagyi';
        reject(error);

    },1000);
});

// resolve
promise.then(function(data){
    console.log(data);
})


// reject
promise.catch(function(data){
    console.log(data);
})


// Dono
promise.then(function(data){
    console.log(data);
}).catch(function(data){
    console.log(data);
})


let p1 = new Promise((resolve,reject)=>{
    console.log('3 second ka wait karo kaam in process....')
    setTimeout(()=>{
        resolve();
        // reject();
    },1000);
});

p1.then().catch();
p1.then(()=>{
    console.log('Kaam Hogaya');
}).catch(()=>{
    console.log('Error aagayo')
})

p1.then(()=>{
    new Promise((resolve,reject)=>{
        console.log('promise run kardia hai')
        setTimeout(()=>{
            resolve('2 sec lagg gaye')
        },2000);
    }).then(function(data){
        console.log(data);
    })
})

