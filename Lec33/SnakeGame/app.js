
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let cellSize = 50;//height and width ka kaam karega
let snakeCells = [[0,0]];//snake ka start
let direction = 'right';

let boardWidth = 1000;
let boardHeight = 600;

let score = 0 ;

// keydown event is triggered
document.addEventListener('keydown', function(event){
    if(event.key == 'ArrowDown'){direction='down'}
    if(event.key == 'ArrowUp'){direction='up'}
    if(event.key == 'ArrowLeft'){direction='left'}
    if(event.key == 'ArrowRight'){direction='right'}
})

let gameOver = false;

let intervalId = setInterval(function(){
    update();
    draw();
},100);

let foodCells = generateFood();
function generateFood(){
    return [
        Math.round((Math.random()*(boardWidth - cellSize)) / cellSize)*cellSize,
        Math.round((Math.random()*(boardHeight - cellSize)) / cellSize)*cellSize
    ]
}

// function to draw snake 
function draw(){
    if(gameOver==true){
        clearInterval(intervalId);
        ctx.fillStyle = 'white';
        ctx.font='50px monospace';
        ctx.fillText('Game Over ! ! ',boardWidth/2-2*cellSize, boardHeight/2);
        return;
    }


    ctx.clearRect(0,0,boardWidth,boardHeight);
    for(let cell of snakeCells){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize);
        ctx.strokeStyle= 'orange';
    }

    ctx.fillStyle = 'green';
    console.log(foodCells[0]);
    ctx.fillRect(foodCells[0],foodCells[1],cellSize, cellSize);

    // score
    ctx.font = '24px monospace';
    ctx.fillText(`Score ${score}`, 20 ,20);
    
}

function selfEating(newHeadX,newHeadY){
    for(let cell of snakeCells){
        if(cell[0] === newHeadX && cell[1] === newHeadY){
            gameOver = true;
        }
    }
}

function update(){
    let headX = snakeCells[snakeCells.length-1][0];
    let headY = snakeCells[snakeCells.length-1][1];

    let newHeadX ;
    let newHeadY ;

    if(direction=='right'){
        newHeadX = headX+cellSize;
        newHeadY = headY;
    }
    else if(direction=='left'){
        newHeadX = headX-cellSize;
        newHeadY = headY;
    }
    else if(direction=='down'){
        newHeadX = headX;
        newHeadY = headY+cellSize;
    }
    else if(direction=='up'){
        newHeadX = headX;
        newHeadY = headY-cellSize;
    }
    selfEating(newHeadX,newHeadY);

    if(newHeadX === boardWidth ||newHeadX <0 ||newHeadY < 0 || newHeadY === boardHeight){
        console.log('gameOver')
        gameOver = true;
    }
   
    snakeCells.push([newHeadX,newHeadY]);

    if(newHeadX == foodCells[0] && newHeadY == foodCells[1]){
        foodCells = generateFood();
        score+=10;
    }else{
        snakeCells.shift();
    }
    
}














