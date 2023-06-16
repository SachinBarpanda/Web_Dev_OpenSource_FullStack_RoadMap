// console.log("Welcome to script.js");

function refreshList(){
    $('#list').empty();
    $.get('/todos', function(data){// data -> array
        for(let item of data){
            $('#list').append(`<li> ${item} </li>`)
        }
    });
}    

$('#btn').on('click',function(){
    // console.log('Btn clicked')
    let todo = $('#inp').val();
    $.post('/todos',{todo} , function(){
        console.log(todo);
        $('#inp').val("");
        refreshList();
    })
    
})
refreshList();


