
import Container from './Container'
import Flappy from './Flappy'
import SlapshScreen from './SplashScreen'
import Pipe from './Pipe'
import GameOver from './GameOver'
import ScoreBoard from './ScoreBoard'
import Animate from './Animate'

let ele1 = document.getElementsByClassName('wrapper')[0];
// let animate = new Animate(ele1);




// import * as util './utilities'

// let ele1 = document.getElementsByClassName('wrapper')[0];
let element = document.getElementById('container');
let container = new Container(element);
container.create();

document.addEventListener('keydown', keyStrokeDown);
// document.addEventListener('keyup', keyStrokeRelease);
// document.addEventListener('keypress', keyStrokePress);

let flappy; // = new Flappy(100,100);
let pipe;
let pipes = [];
let keyValue = false;

let gameOver = new GameOver();
gameOver.create();
ele1.appendChild(gameOver.element);

let scoreChart = new ScoreBoard();
scoreChart.create();
ele1.appendChild(scoreChart.element);

startGame();
var intervalId;

function startGame(){

  flappy = new Flappy(100,100);
  flappy.create();
  ele1.appendChild(flappy.element);



   intervalId = setInterval(() => {
      // debugger;
      container.moveBg();
      createPipe();
      movePipe();
      // if(flag === 0){
      provideGravity();
      decreaseVel();
      // }
      // else{
        // flappy.jumpUp();
      // }
      checkBoundaryCollision();
      checkPipeCollision();
      scoreCalc();
      // calculateScore();
      // console.log(flappy.yPos);
    }, 1000/60);
}
function provideGravity(){
  // if(!keyValue)
    flappy.gravity();

}
function decreaseVel(){
  // if(flappy.velocity > 0)
    flappy.velocity--; 
}

function createPipe(){
  if(container.marginLeft % 400 != 0)
    return;
  let rand = randomNumber();
  // debugger;
  for(let i = 0; i < 2; i++){
    pipe = new Pipe(i,rand);
    pipe.create();
    ele1.appendChild(pipe.element);
    pipes.push(pipe);
  }
}
function movePipe(){
  for(let i =0; i < pipes.length; i++){
    pipes[i].movePipe();
  }
}

  function keyStrokeDown(e){
      switch(e.keyCode){
      case 32:
    // debugger;
        flappy.jumpUp();
      break;
      case 13:
      if(!isGameOver)
        return;
        reset();
        startGame();
    }
  }
  function keyStrokePress(e){
    if(!keyValue)
      return;

    switch(e.keyCode){
    case 32:
    // debugger;
      flappy.jumpUp();
      break;
    case 39:
        reset();

      break;
  }
}

function keyStrokeRelease(e) {
  keyValue = false;
}

function randomNumber() {
    return -Math.floor(Math.random() * 201) - 150;
}

function checkBoundaryCollision(){
  if(flappy.yPos <= 0 || (flappy.yPos + flappy.height) >= 400){
    // debugger;
    // console.log('game over');
    clearInterval(intervalId);
    isGameOver = true;
    // GameOver();
    stopGame();
    // break;
    
  }
}
function checkPipeCollision(){
  for(let i=0 ; i< pipes.length; i++){

    // (allObstacles[i].posX <= xCar + 80 
    //       && allObstacles[i].posX + 80 >= xCar 
    //       && allObstacles[i].posY <= yCar + 100 
    //       && allObstacles[i].posY + 100 >= yCar)
    console.log(flappy.yPos);

   if (flappy.xPos<= pipes[i].xPos + pipes[i].width &&
        flappy.xPos + flappy.width >= pipes[i].xPos &&
        flappy.yPos <= pipes[i].yPos + pipes[i].height &&
        flappy.height + flappy.yPos >= pipes[i].yPos){
      // debugger;

    console.log('game over '+ i);
    clearInterval(intervalId);
    // GameOver();
    isGameOver = true;
    stopGame();

    // break;
   }
  }
}
let isGameOver = false;
function stopGame(){
  gameOver.changeZIndex(10);
  // gameOver.create();
  // ele1.appendChild(gameOver);

}

function reset(){
  // debugger;
  if(!isGameOver)
    return;
  else{
    for(let i = 0 ; i< pipes.length; i++){
      ele1.removeChild(pipes[i].element);
    }
    isGameOver = false;
    pipes = [];
    // debugger;
    ele1.removeChild(flappy.element);

    gameOver.changeZIndex(-1);
    scoreChart.resetScore();

    // startGame();
  }  
}

function scoreCalc(){
  if(isGameOver)
    return;
  for(let i = 0; i < pipes.length; i++){
    if(flappy.xPos == (pipes[i].xPos + pipes[i].width))
      scoreChart.addScore();
  }
}