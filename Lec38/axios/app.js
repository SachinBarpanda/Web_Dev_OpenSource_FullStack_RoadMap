axios.get('https://inshorts.deta.dev/news?category=sports')
.then(function(response){
    console.log(response.data);
})
.catch(function(err){
    console.log(err);
})
