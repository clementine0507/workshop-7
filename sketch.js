let movers = [];

function setup() {
  createCanvas(400, 400);
  background(0);

  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);
    let size = random(5, 15); 
    movers.push(new Mover(x, y, r, g, b, size));
  }
}

function draw() {
  for (let mover of movers) {
    mover.step();
    mover.show();
  }
}

class Mover {
  constructor(x, y, r, g, b, size) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.size = size; 
  }

  step() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  show() {
    noStroke();
    fill(this.r, this.g, this.b);
    push();
    translate(this.x, this.y);
    drawStar(0, 0, this.size / 2, this.size, 5); 
    pop();
  }
}

for (let i = 0; i < 20; i++) {
  let x = random(width);
  let y = random(height); 
  let radius1 = random(5, 15); 
  let radius2 = random(15, 30); 
  let npoints = int(random(5, 10)); 

  drawStar(x, y, radius1, radius2, npoints); 
}


function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints; 
  let halfAngle = angle / 2.0;  

  beginShape(); 
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);


    let sxInner = x + cos(a + halfAngle) * radius1;
    let syInner = y + sin(a + halfAngle) * radius1;
    vertex(sxInner, syInner);
  }
  endShape(CLOSE); 
}