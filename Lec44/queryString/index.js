const express = require('express');
const app = express();

app.get('/search', (req,res)=>{
    // console.log(req.query);
    // console.log(req.query.search);
    let {search} = req.query;
    // console.log(search);
    // res.send(search);
    // res.send(req.query);
    res.send(req.query.search);

})


app.listen(8080, ()=>{
    console.log("mera server chalne laga")
})