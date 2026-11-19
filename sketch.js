let r = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,220,220);

  angleMode(DEGREES);
  translate(200,200);
  fill(255, 0, 255);
  r++;
  rotate(r);
  rectMode(CENTER);
  square(0,0,100);
}