let s;
let walls;

function setup() {
  createCanvas(1000, 1000);
  
  walls = [];
  
  for (let i = 0; i < 10; i++) {
      walls.push(new Wall(random(0, width), random(0, height), random(0, width), random(0, height)));
  }
  
  walls.push(new Wall(-10000, -10000, 10000, -10000));
  walls.push(new Wall(-10000, 10000, 10000, 10000));
  walls.push(new Wall(-10000, -10000, -10000, 10000));
  walls.push(new Wall(10000, -10000, 10000, 10000));
  
  
  s = new Spot(100, 200);
}

function draw() {
  background(0);
  
  for (const w of walls) {
      w.show();
  }
  
  s.update(mouseX, mouseY);
  s.testIntersect(walls);
}
