// Getting reference to Canvas object
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Setting dimensions of canvas
const canvasWidth = 700;
const canvasHeight = 500;
const radius = 10;

// render rect
function renderBackground() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

const paddleHeight = 90;
const paddleWidth = 20;
function renderPaddle(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, paddleWidth, paddleHeight);
}

//render circles
function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
}

// ball
let ballPosX = 500;
let ballPosY = 50;
let ballVelocityX = +2;
let ballVelocityY = +2;
// paddles
let leftPaddleY = 20;
let leftPaddleX = 35;
let rightPaddleY = 20;
let rightPaddleX = 35;
let paddlesVelocity = 10

document.addEventListener("keypress", (event) => {
  if (event.key === "s") {
    leftPaddleY += paddlesVelocity;
  }
  if (event.key === "w") {
    leftPaddleY -= paddlesVelocity;
  }
  console.log(leftPaddleY);
  console.log(rightPaddleY);
});

document.addEventListener("keypress", (event) => {
  if (event.key === "k") {
    rightPaddleY += paddlesVelocity;
  }
  if (event.key === "o") {
    rightPaddleY -= paddlesVelocity;
  }
  console.log(leftPaddleY);
  console.log(rightPaddleY);
});


setInterval(() => {
  renderBackground();
  renderBall(ballPosX, ballPosY);

  renderPaddle(15, leftPaddleY, "green");
  renderPaddle(665, rightPaddleY, "red");

  // move the ball
  ballPosX += ballVelocityX;
  ballPosY += ballVelocityY;
  // if (ballPosX + radius === canvasWidth || ballPosX - radius === 0) {
  //   ballVelocityX = -ballVelocityX
  // }

  // bounce the ball when it reaches the canvas borders
  if (ballPosX + radius === canvasWidth) {
    ballVelocityX = -2;
  }
  if (ballPosX - radius === 0) {
    ballVelocityX = +2;
  }
  if (ballPosY + radius === canvasHeight) {
    ballVelocityY = -2;
  }
  if (ballPosY - radius === 0) {
    ballVelocityY = +2;
  }
  /*
  if (ballPosY - radius === leftPaddleY + paddleHeight && ballPosX + radius === leftPaddleX +paddleWidth) {
    ballVelocityX = +2
    ballVelocityY = +2
  }

  if (ballPosY - radius >= secondPaddleHeight && ballPosY + radius <= secondPaddleHeight) {
    ballVelocityY = +2
  }
  if (ballPosX - radius >= secondPaddleWidth && ballPosX + radius <= secondPaddleWidth) {
    ballVelocityX = +2
  } 

}, 17); 
*/
  // if (ballPosX + radius === leftPaddleY && 20) {
  //   ballVelocityX = -2
  // }
  // // if (ballPosX - radius === 0) {
  // //   ballVelocityX = +2
  // // }
  // // }, 17);
  
  // create borders for the paddles
  if (leftPaddleY <= 0) {
    leftPaddleY = 0;
  } else if (leftPaddleY >= 500) {
    leftPaddleY = 500;
  }

  if (rightPaddleY <= 0) {
    rightPaddleY = 0;
  } else if (rightPaddleY >= 500) {
    rightPaddleY = 500;
  }

});
