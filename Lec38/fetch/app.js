// using fetch for calling an api
fetch('https://inshorts.deta.dev/news?category=science')
.then(function(response){
    return response.json();//return a promise
}).then(function(data){//so we are using then again
    console.log(data);
})

.catch(function(err){
    console.log(err);

})