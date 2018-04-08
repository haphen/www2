function setup(){
  createCanvas(500, 500);
  background(0, 0, 91);
  stroke(255,255,90);
  fill(color(255, 228, 0));
  ellipse(250, 125, 100, 100);
  fill(color(34,116,28));
  stroke(0,0,91);
  ellipse(250, 1000, 1500, 1500);
}
function draw(){
  stroke(255,255,90,80);
  line(250, 125, random(0, width), random(0, height));
  
} 
