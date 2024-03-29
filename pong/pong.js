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

let posX = 500;
let posY = 50;
let vX = +2;
let vY = +2;
let leftPaddleY = 20;
let paddleX = 35;
let rightPaddleY = 20;
let secondPaddleX = 35;
setInterval(() => {
  renderBackground();
  renderBall(posX, posY);
  renderPaddle(15, leftPaddleY, "green");
  renderPaddle(665, rightPaddleY, "red");
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
  if (posY - radius === leftPaddleY + paddleHeight && posX + radius === paddleX +paddleWidth) {
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
  // if (posX + radius === leftPaddleY && 20) {
  //   vX = -2
  // }
  // // if (posX - radius === 0) {
  // //   vX = +2
  // // }
  // // }, 17);

  document.addEventListener("keypress", (event) => {
    if (event.key === "s") {
      leftPaddleY += 1;
    }
    if (event.key === "w") {
      leftPaddleY -= 1;
    }
  });

  document.addEventListener("keypress", (event) => {
    if (event.key === "k") {
      rightPaddleY += 1;
    }
    if (event.key === "o") {
      rightPaddleY -= 1;
    }
  });
  /*
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
*/
});
