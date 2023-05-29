

// function step1(){
//     setTimeout(function(){
//         console.log('Image select kar');
//         return 'image001';
//     }, 4000);
// };

// function step2(image){
//     setTimeout(function(){
//         console.log('Sundar ho rahi hai '+image);
//         return image+'sundar vali';
//     }, 2000);
// }

// function step3(filteredImage){
//     setTimeout(function(){
//         console.log(`Badhiya sa caption on ${filteredImage} dekh liya `);
//         return filteredImage+'pelus caption dono';
//     }, 3000)
// }

// function step4(final){
//     setTimeout(function(){
//         console.log(final + ' Uploaded');
//     },2000)
// }

// let image = step1();
// let filteredImage = step2(image);
// let finalImage = step3(filteredImage);
// step4(finalImage);




// better way

function step1(fn){
    setTimeout(function(){
        console.log('image001 select kar');
        fn();
    }, 1000);
};

function step2(image , cb){
    setTimeout(function(){
        console.log('Sundar ho rahi hai '+image);
        // return image+'sundar vali';
        cb(' sundar '+image)
    }, 1500); 
}

function step3(filteredImage, cb){
    setTimeout(function(){
        console.log('caption aa gyi image pe');
        let finalImage = (`Badhiya sa caption on ${filteredImage}`);
        // return filteredImage+'pelus caption dono';
        cb(finalImage);
    }, 1000)
}

function step4(final){
    setTimeout(function(){
        console.log(final + ' Uploaded');
    },1000)
}

step1(function(){
    let image = 'image001';
    step2(image , function(filteredImage){
        step3(filteredImage, function(finalImage){
            step4(finalImage);
        });
    });
})