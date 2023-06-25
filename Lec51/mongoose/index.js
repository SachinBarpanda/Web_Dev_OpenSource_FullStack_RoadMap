const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nobita')
.then(()=>{
    console.log('DB connected succesfully')
})
.catch(()=>{
    console.log("Error while connecting DB")
})


//schema (blue-print)

const moviesSchema  = new mongoose.Schema({
    name: String,
    rating : Number,
    year: Number,
    isWatched : Boolean
})

//model (JS class)

const Movie = mongoose.model('Movie', moviesSchema);

// console.log(Movie);
let ironman = new Movie({
    name : "Ironman",
    rating:8,
    year : 2015,
    isWatched:true
})

ironman.save(); 
console.log(ironman); 