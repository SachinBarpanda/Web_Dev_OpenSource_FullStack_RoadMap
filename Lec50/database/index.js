const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{console.log("DB connected succesfully")})
.catch((err)=>{
    console.log("DB not connected")
    console.log(err)
})


