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
function renderPaddle(y) {
  ctx.fillStyle = "green";
  ctx.fillRect(15, y, paddleWidth, paddleHeight);
}

const secondPaddleHeight = 90;
const secondPaddleWidth = 20;
function renderSecondPaddle(y) {
  ctx.fillStyle = "red";
  ctx.fillRect(665, y, secondPaddleWidth, secondPaddleHeight);
}

//render circles
function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
}

let posX = 500;
let posY = 50;
let vX = +2;
let vY = +2;
let paddleY = 20;
let paddleX = 35;
let secondPaddleY = 20;
let secondPaddleX = 35;
setInterval(() => {
  renderBackground();
  renderBall(posX, posY);
  renderPaddle(paddleY);
  renderSecondPaddle(secondPaddleY);
  posX += vX;
  posY += vY;
  // if (posX + radius === canvasWidth || posX - radius === 0) {
  //   vX = -vX
  // }

  if (posX + radius === canvasWidth) {
    vX = -2;
  }
  if (posX - radius === 0) {
    vX = +2;
  }
  if (posY + radius === canvasHeight) {
    vY = -2;
  }
  if (posY - radius === 0) {
    vY = +2;
  }
  /*
  if (posY - radius === paddleY + paddleHeight && posX + radius === paddleX +paddleWidth) {
    vX = +2
    vY = +2
  }

  if (posY - radius >= secondPaddleHeight && posY + radius <= secondPaddleHeight) {
    vY = +2
  }
  if (posX - radius >= secondPaddleWidth && posX + radius <= secondPaddleWidth) {
    vX = +2
  } 

}, 17); 
*/
  // if (posX + radius === paddleY && 20) {
  //   vX = -2
  // }
  // // if (posX - radius === 0) {
  // //   vX = +2
  // // }
  // // }, 17);

  document.addEventListener("keypress", (event) => {
    if (event.key === "s") {
      paddleY += 10;
    }
    if (event.key === "w") {
      paddleY -= 10;
    }
  });

  document.addEventListener("keypress", (event) => {
    if (event.key === "k") {
      secondPaddleY += 10;
    }
    if (event.key === "o") {
      secondPaddleY -= 10;
    }
  });
  /*
if (paddleY <= 0) {
  paddleY = 0;
} else if (paddleY >= 500) {
  paddleY = 500;
}

if (secondPaddleY <= 0) {
  secondPaddleY = 0;
} else if (secondPaddleY >= 500) {
  secondPaddleY = 500;
}
*/
});
