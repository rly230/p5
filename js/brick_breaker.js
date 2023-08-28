// ブロック崩し
function setup(){
  createCanvas(400, 400);
}

// ボールの位置ベクトルの成分
let ballPx = 100;
let ballPy = 200;

// ボールの速度ベクトルの成分
let ballVx = 120;
let ballVy = 60;

function draw(){
  // ボールを移動させる
  ballPx = ballPx + ballVx/60;
  ballPy = ballPy + ballVy/60;

  if ((ballPx > 385) || (ballPx < 15)) {
    ballVx = -ballVx;
  }

  if (ballPy < 15) {
    ballVy = -ballVy;
  }

  // 描画
  background(220);
  circle(ballPx, ballPy, 30);
}
