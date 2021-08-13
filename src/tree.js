const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight*0.8;

let angle1, angle2, angle3, angle4;
let slider1, slider2, slider3, slider4;

function setup(){
  createCanvas(windowWidth, windowHeight);
  slider1 = createSlider(0, 2*Math.PI, Math.PI/2, 0.01);
  slider2 = createSlider(0, 2*Math.PI, Math.PI/10, 0.01);
}

function draw(){
  background(40);
  angle1 = slider1.value();
  console.log({slider1: angle1});
  angle2 = slider2.value();
  console.log({slider2: angle2});

  stroke(255);
  translate(windowWidth/2, windowHeight);
  branch(250);
}

function branch(length){
  line(0, 0, 0, -length);
  translate(0, -length);
  if(length < 4) return;
  push()
  rotate(angle1);
  branch(length*0.55)
  pop()

  push()
  rotate(-angle1);
  branch(length*0.55)
  pop()

  push()
  rotate(angle2);
  branch(length*0.55)
  pop()

  push()
  rotate(-angle2);
  branch(length*0.55)
  pop()
}