const express = require('express')
const app = express();
const path = require('path');

app.set('view engine','ejs');//view engine को set कर दिया है ताकि टेंपलटेस देख पाये
app.set('views', path.join(__dirname+'/views'));//better

const todosHai = ['go to gym ' , 'go to club ' , 'drink water'];


// root route
app.get('/',(req,res)=>{
    // res.send('<h1>Hi</h1>')
    // res.render('views/index');//but views is by default
    res.render('index');
})

app.get('/random',(req,res)=>{
    let number = Math.floor(Math.random() *100);
  res.render('random', {number});
})

// toDO show
app.get('/todo',(req,res)=>{
    res.render('todo',{todosHai});
})

app.listen(8080,()=>{
    console.log("Server at 8080")
})