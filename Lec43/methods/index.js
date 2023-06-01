// express for making server
const express = require('express');
const app = express();




app.get('/',(req,res)=>{
    res.send(`<h3>Yeh mera "/" path hai </h3>`)
})
app.get('/cat',(req,res)=>{
    res.send(`<h3>Yeh mera "/cat" path hai </h3>`)
})
app.get('/dog',( req,res)=>{
    res.send(`<h3>Yeh mera "/dog" path hai </h3>`)
})

app.get('*', (req,res)=>{
    res.send(`<h3>Abe saale </h3>`)
})

app.listen(8080,()=>{
    console.log("server connected at 8080")
})