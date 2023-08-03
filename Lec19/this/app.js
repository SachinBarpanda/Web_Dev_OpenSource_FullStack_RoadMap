let obj = {
    name : 'sam',
    evs : 90,
    cn : 90,
    web : 100 ,
    maths : 90 ,
    total : function(){
        return this.evs + this.cn + this.web + this.maths;
    },
    bulao : function(){
        return `${this.name} ko bulao`;
    }
}

console.log(obj.total());
console.log(obj.bulao());

