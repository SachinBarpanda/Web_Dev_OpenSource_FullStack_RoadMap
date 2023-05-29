
$('input').keypress(function(e){
    // console.log(e);
    if(e.which === 13){
        const todoText = $(this).val();
        // console.log(todoText);

        $('#list').append(`<li> <span>x </span> ${todoText} </li>`);
        $(this).val("");
    }
})

//mark as complete 
$('ul').on('click','li',function(){
    $(this).toggleClass('complete');
})


// delete todo
$('ul').on('click','span', function(e){
    e.stopPropagation();
    $(this).parent().fadeOut(800,function(){
        $(this).remove();
    });
})




$('#plus').click(function(){
    $('input').fadeToggle();
})