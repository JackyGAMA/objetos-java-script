var ball={
  x:200,
  y:150,
  r:25,
  color:["green","purple","blue","pink"],
  xspeed:0,
  yspeed:0
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[1])
  ball.xspeed=1;
  ball.x=ball.x+ball.xspeed;
}