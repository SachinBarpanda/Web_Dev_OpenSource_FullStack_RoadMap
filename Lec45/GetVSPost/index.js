const express = require('express');
const app = express();
const path = require('path');


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/user',(req,res)=>{
    // console.log(req.query);
    let {username , age} = req.query;
    res.send('get request send sucessfully')
})

// post request ko handle

app.post('/user', (req,res)=>{
    console.log(req.body);
    res.send('post method ke through')
})

app.listen(8080,()=>{
    console.log('server connected at port 8080');
})