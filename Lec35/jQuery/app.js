// selecting Elements 



// console.log($('h1'));

// console.log('.sam');

// console.log('#sam');

// manipulate elements 

// $('h1').css('color','red');
// $('h1').css('background-color','plum');

// $('h1').css({
//     color:'red',
//     backgroundColor: 'Plum'
// })

// access text 
// console.log($('p'));
// console.log($('p').html('<em> hello </em>'));
// console.log($('p').text('<em> hello </em>'));


// manipulating attributes 

// console.log($('a').text());
// console.log($('a').attr('href'));


// selecting particular element
// $('h1').css('border','2px solid plum'); 
// $('h1:first()').css('border','2px solid plum'); 
// $('h1:last()').css('border','2px solid plum'); 
// $('h1').last().css('border','20px solid plum'); 
// $('h1').first().css('border','20px solid plum'); 

// getting value of input 
// console.log($('input').val());
// console.log($('input').val('hello my nions'));

// $('h1').first().addClass('first');
// $('h1').first().addClass('first second sam');
// $('h1').first().removeClass('second');
// $('h1').first().removeClass('second sam');//multiple
// $('h1').first().toggleClass('second sam');//multiple
// $('h1').first().toggleClass('second sam');//multiple
// $('h1').first().hasClass('second sam');//multiple

// // Eventa
// $('button').click(function(){
//     console.log('master ji pitaji ki patloon 1 bilaan choti kar do')
// })

// $('li').click(function(){
//     $(this).css('color:crimson');
// })


// input ---
// $('input').keyup(function(){
//     console.log($(this).val());
// });

// addEventListener --> 'on'
// $('button').on('click',function(){
//     console.log('Hello ji kaise ho khana khaa ke jaana han');
// })


// $('input').keypress(function(e){
//     if(e.which == 13){
//         console.log($(this).val());
//     }
// });

// EFFECTS 
$('#fadeout').click(function(){
    $('#container').fadeOut();
});

$('#fadein').click(function(){
    $('#container').fadeIn();
});

$('#fadetoggle').click(function(){
    $('#container').fadeToggle();
});



