const express = require('express');
const app = express();
const path = require('path');

// dummy array instead of DB
let comments = [
    {
        id:0,
        username : "Akshay",
        comment : "Kuch nahi"
    },
    {
        id:1,
        username : "Sachin",
        comment : "Kaun"
    },
    {
        id:2,
        username : "Sam",
        comment : "Whatever you see "
    },
    {
        id:3,
        username : "Ojaswa",
        comment : "Pols aagayi Pols"
    },
]

app.set('view engine','ejs');
app.set('views ' ,path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended : true}));


app.get('/', (req,res)=>{
    res.send("root is here")
})

// task-1
 app.get('/blogs', (req,res)=>{
    res.render('index',{comments})
 })



// task-2

app.get('/blog/new',(req,res)=>{
    res.render('new');
})

// task-3 to actually add a blog 

app.post('/blogs',(req,res)=>{
    // console.log(req.body);
    let {username,comment} = req.body;
    comments.push({username,comment,id : comments.length})
    // res.send("data aagaya")
    res.redirect('/blogs');
})

// task-4 
app.get('/blogs/:id', (req,res)=>{
    let {id} = req.params;
    let foundComment = comments.find((comment)=>{return comment.id==id})
    console.log(foundComment);
    // res.send("show particular page");
    res.render('show',{foundComment});
});


app.listen(8080, ()=>{
    console.log("server running at port 8080")
})