let Menu = ['Paneer Briyani Masala', 'Pizza','Chicken Something','Dal', 'Bhatha','Chole Chawal','Manchurian','Egg Omelet','Soda'];

let veg = Menu.filter(function(item){
    if(item.includes('Chicken')|| item.includes('Egg')){
        return false;
    }
    return true;
});

console.log(veg);
