let obj = {
    evs : 90,
    cn : 90,
    web : 100 ,
    maths : 90 ,
    total : function(){
        // console.log(290);
        return (90+90+100+10);
        // return (this.evs+this.cn+this.web+this.maths);
    },
    bulao : function(){
        return "sam ko bulao";
    }
}

console.log(obj.total());
console.log(obj.bulao());
console.log(obj.evs);