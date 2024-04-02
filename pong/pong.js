// Getting reference to Canvas object
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Setting dimensions of canvas
const canvasWidth = 700;
const canvasHeight = 500;

// velocity
let ballVelocity = 0.5;
let paddlesVelocity = 0.0005

///// ball
// position
let ballPosX = 500;
let ballPosY = 50;
// size
const radius = 10;
// velocity controls
let ballVelocityX = ballVelocity;
let ballVelocityY = ballVelocity;

///// paddles
// position
let leftPaddleY = 20;
let leftPaddleX = 15;
let rightPaddleY = 20;
let rightPaddleX = 665;
// size
const paddleHeight = 90;
const paddleWidth = 20;

// render rect
function renderBackground() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}


function renderPaddle(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, paddleWidth, paddleHeight);
}

//render circles
function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "cyan";
  ctx.fill();
}

let speedLeft = 0;
let leftDirection = +1
let reduceSpeedLeft = true;
let speedRight = 0;
let rightDirection = +1
let reduceSpeedRight = true;
document.addEventListener("keypress", (event) => {
  // left keys
  if (event.key === "s") {
    reduceSpeedLeft = false;
    leftDirection = +1;
  }
  if (event.key === "w") {
    reduceSpeedLeft = false;
    leftDirection = -1;
  }

  // right keys
  if (event.key === "k") {
    reduceSpeedRight = false;
    rightDirection = +1;
  }
  if (event.key === "o") {
    reduceSpeedRight = false;
    rightDirection = -1;
  }
});
document.addEventListener("keyup", (event) => {
  
  if (event.key === "s" || event.key === "w") {
    reduceSpeedLeft = true;
  }
  if (event.key === "k" || event.key === "o") {
    reduceSpeedRight = true;
  }
});

// helper functions
function isBallTouchingLeftPaddle() {
  return ballPosX - radius <= leftPaddleX + paddleWidth && ballPosY >= leftPaddleY && ballPosY <= leftPaddleY + paddleHeight;
}

function isBallTouchingRightPaddle() {
  return ballPosX + radius >= rightPaddleX && ballPosY >= rightPaddleY && ballPosY <= rightPaddleY + paddleHeight;
}

function isBallTouchingLeftWall() {
  return ballPosX - radius === 0;
}

function isBallTouchingRightWall() {
  return ballPosX + radius === canvasWidth;
}


function bounceBall() {
  if (isBallTouchingRightWall() || isBallTouchingRightPaddle()) {
    ballVelocityX = -ballVelocity;
  }
  if (isBallTouchingLeftWall() || isBallTouchingLeftPaddle()) {
    ballVelocityX = ballVelocity;
  }
  if (ballPosY + radius === canvasHeight) {
    ballVelocityY = -ballVelocity;
  }
  if (ballPosY - radius === 0) {
    ballVelocityY = ballVelocity;
  }
}


// game loop
setInterval(() => {
  renderBackground();
  renderBall(ballPosX, ballPosY);

  renderPaddle(leftPaddleX, leftPaddleY, "green");
  renderPaddle(rightPaddleX, rightPaddleY, "red");

  // move the ball
  ballPosX += ballVelocityX;
  ballPosY += ballVelocityY;
  
  // bounce the ball off the paddles and canvas borders
  bounceBall();

  // move paddles 
  leftPaddleY += leftDirection * 15 * Math.sin(speedLeft);
  rightPaddleY += rightDirection * 15 * Math.sin(speedRight);
  if (reduceSpeedLeft) {
    speedLeft -= paddlesVelocity; if (speedLeft < 0) {speedLeft = 0;} 
  } else {
    speedLeft += paddlesVelocity; if (speedLeft >= 1.6) {speedLeft = 1.6}
  }
  if (reduceSpeedRight) {
    speedRight -= paddlesVelocity; if (speedRight < 0) {speedRight = 0;}
  } else {
    speedRight += paddlesVelocity; if (speedRight >= 1.6) {speedRight = 1.6}
  }

  // create borders for the paddles
  if (leftPaddleY < 0) {
    leftPaddleY = 0;
    speedLeft = 0;
  } else if (leftPaddleY + paddleHeight > canvasHeight) {
    leftPaddleY = canvasHeight - paddleHeight;
    speedLeft = 0;
  }

  if (rightPaddleY < 0) {
    rightPaddleY = 0;
    speedRight = 0;
  } else if (rightPaddleY + paddleHeight > canvasHeight) {
    rightPaddleY = canvasHeight - paddleHeight;
    speedRight = 0;
  }

});
