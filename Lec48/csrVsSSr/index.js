const express = require('express')
const app = express();
const path = require('path');

let todos = ['gym','food','bath','code','bike'];


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
// app.use('/cat',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('csr vs ssr');
})

app.get('/todos',(req,res)=>{
    if(req.xhr){
        console.log('ajax req hai')
        res.json(todos)
    }
    else{
        console.log('server side')
        res.render('todos',{todos});
    }
})


app.post('/todos',(req,res)=>{
    // console.log(req.body);
    let{todo} = req.body;
    todos.push(todo);
    // res.status(200).json({msg:'todos send successfully'})
    res.redirect('/todos')
})

app.listen(8080, ()=>{
    console.log("server connected at portwa 8080");
})
