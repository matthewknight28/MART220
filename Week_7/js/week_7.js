var scal=0.4;
var speed=0.117;
var x=0;
var y=0;
var timerVal=30;
var boldFont;
var lightFont;
var lightItalicFont;

let osc, playing, freq, amp;


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

  fill(125, 200, 80);
  rect(25, 385, 55, 20);
  triangle(10, 395, 40, 375, 40, 415);
  fill(0,0,0);
  text('BACK', 45, 400);
  
  text('Matthew Knight', 660, 425);
  text('Music Generator 4000', 10, 20);

  var grid1 = new myGrid(50, 130, "RHYTHM");
  grid1.drawGrid();

  var grid2 = new myGrid(225, 130, "BASS");
  grid2.drawGrid();

  var grid3 = new myGrid(400, 130, "PAD");
  grid3.drawGrid();

  var grid4 = new myGrid(575, 130, "LEAD");
  grid4.drawGrid();
  
  x+=speed;
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