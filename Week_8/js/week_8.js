var scal=0.4;
var speed=0.117;
var x=0;
var y=0;
var timerVal=30;
var boldFont;
var lightFont;
var lightItalicFont;
var grid1;
var freq;
var osc;
const particles = [];

function preload() {
    boldFont = loadFont('./assets/fonts/Bold.ttf');
    lightFont = loadFont('./assets/fonts/Light.ttf');
    lightItalicFont = loadFont('./assets/fonts/LightItalic.ttf');
  }  

function setup() {
  createCanvas(1920*scal, 1080*scal);
  setInterval(timeStamp, 1000);
}

function draw() {
background(220);


var partSpeed=mouseX;

  fill(125, 200, 80);
  rect(25, 385, 55, 20);
  triangle(10, 395, 40, 375, 40, 415);
  fill(0,0,0);
  text('BACK', 45, 400);
  
  text('Matthew Knight', 660, 425);
  text('Music Generator 4000', 10, 20);

  grid1 = new mySynth(50, 130, "RHYTHM");
  grid1.makeSynth();

  var grid2 = new mySynth(225, 130, "BASS");
  grid2.makeSynth();

  var grid3 = new mySynth(400, 130, "PAD");
  grid3.makeSynth();

  var grid4 = new mySynth(575, 130, "LEAD");
  grid4.makeSynth();
  
  x+=speed;

  text('MouseX is '+ partSpeed, 400, 50);


  partSpeed++;
  } 




function timeStamp(){
  if (timerVal > 0) {
    timerVal--;
  }
  else{
    timerVal=30;
    x=0;
  }
}

function createParticles(x, y)
{
for (let i = 0; i < 5; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
}


function mousePressed(){
  grid1.mousePressy();
}

function mouseReleased(){
  grid1.mouseUnpressy();
}