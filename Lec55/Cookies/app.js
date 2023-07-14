const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')

// app.use(cookieParser())
app.use(cookieParser("kya hi bataien"))

app.get('/', (req,res)=>{
    console.log(req.cookies);
    // res.send('root connected');
    res.send(req.signedCookies);
})

app.get('/getsignedcookies',(req,res)=>{
    res.cookie('bindass','sachin',{signed:true});
    res.send('cookies sent succesfully');
})
// app.get('/setcookie', (req,res)=>{
//     res.cookie('mode','dark');
//     res.cookie('location','Delhi');
//     res.cookie('username','sam');
//     res.send('server sent you cookies');
// })

// app.get('/getcookies',(req,res)=>{
//     let {mode,location,username } = req.cookies;
//     res.send(`hi my name is ${username} and I live in ${location} and my theme is ${mode}`);
// })














app.listen(8080, ()=>{
    console.log("server connected at 8080");
})