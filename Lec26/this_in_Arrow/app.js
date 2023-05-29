// let obj = {
//     num : 3,
//     fn : function(){
//         console.log(this);
//     }

// }
// obj.fn();

// In case of arrow function this points to the this of lexical parent
// let obj = {
//     num : 3,
//     fn : ()=>{
//         console.log(this);
//     }

// }
// obj.fn();

let obj = {
    num : 30,
    fn : function(){
        let calculate = ()=>{
            console.log(this);
        }
        calculate();
    }
}
obj.fn();