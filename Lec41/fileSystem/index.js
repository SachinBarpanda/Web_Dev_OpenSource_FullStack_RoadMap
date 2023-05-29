let fs = require('fs');
// console.log(fs);

// we will perform CRUD 

// CREATE

let data = 'neha mam data send kr rahi hain';
// // let data2 = 'neha mam data send kr rahi hain 2';
fs.writeFile('abc.txt',data,{
    encoding:'utf-8',
    flag:'w'
},(err)=>{
    if(err) {throw err}
    console.log('File written succesfully')
}
);

// fs.writeFileSync('abc.txt',data2);

// READ

// fs.readFile('abc.txt',{
//     encoding:'utf-8',
//     flag:'r'
// }, (err,data )=>{
//     if(err){throw err}
//     console.log(data);
// })

// let data = fs.readFileSync('abc.txt',{
//     encoding:'utf-8'
// });
// let data = fs.readFileSync('abc.txt',
// );
// console.log(data.toString());



// UPDATE
// fs.appendFile('abc.txt','samarth ka bhaukaal', ()=>{
//     console.log("ho gaya edit");
// });

// fs.appendFileSync('abc.txt',"Aaag lagi basti mein Sachin bhai masti mein")

// DELETE

// fs.unlink('abc.txt',(err)=>{
//     if(err){throw err}
//     console.log("Mai badmash hu maine hata diya");
// });

fs.unlinkSync('abc.txt',(err)=>{
    if(err){throw err}
    console.log("good work");
});
