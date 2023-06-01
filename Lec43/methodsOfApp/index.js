
// express for making server
const express = require('express');
const app = express();

// adding app.use

// without path i.e. it takes all incoming requests
// app.use((req,res)=>{//callback function
//     // console.log(req);
//     // console.log(res);
//     console.log('you made a request akshay');
//     res.send(`<h1>Mummy meri sadi kara do may june july mein </h1>`)
// })

// with path specific path only and not in other cases
app.use('/middleware' , (req,res)=>{
    console.log('you made a request at sepcific path middleware ')
    res.send(`<h1>Who's there </h1>`)
})

app.listen(8080, ()=>{
    console.log("server connected at port 8080");
})