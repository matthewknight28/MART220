var scal=0.4;
var speed=0.117;
var x=0;
var y=0;
var timerVal=30;
var test=50;
var boldFont;
var lightFont;
var lightItalicFont;
var gridX = [];
var gridY = [];
var squarz = [];
var rectz = [];
var rectLi = [];
var timerz = [];

function preload() {
    boldFont = loadFont('./assets/fonts/Bold.ttf');
    lightFont = loadFont('./assets/fonts/Light.ttf');
    lightItalicFont = loadFont('./assets/fonts/LightItalic.ttf');
  }  

function setup() {
  createCanvas(1920*scal, 1080*scal);
  setInterval(timeStamp, 1000);

  var startX=31;
  var startY=31;
  var startSq=50;
  var startTimePos=150;

  for(var i=0; i < 3; i++)
  {
    gridX[i]= startX;
    gridY[i]= startY;
    startX += 31;
    startY += 31;
  }

  for(var i=0; i < 4; i++)
  {
    squarz[i]= startSq;
    rectz[i]= startSq;
    rectLi[i]= startSq+5;
    timerz[i]= startTimePos;
    startSq += 175;
  }

}

function draw() {
background(220);

  fill(125, 200, 80);
  rect(25, 385, 55, 20);
  triangle(10, 395, 40, 375, 40, 415);
  fill(0,0,0);
  text('BACK', 45, 400);

  for (var i=0; i < 4; i++)
  {
    fill (230, 230, 255)
    square(squarz[i], 130, 125)
    fill(255, 200, 200)
    rect(rectz[i], 275, 125, 20)
    line(rectLi[i], 285, rectLi[i]+115, 285)
  }

  for(var i=0; i < 3; i++)
  {
  line(gridX[i]+squarz[0], 130, gridX[i]+squarz[0], 255);
  line(50, gridY[i]+130, 175, gridY[i]+130);
  line(gridX[i]+squarz[1], 130, gridX[i]+squarz[1], 255);
  line(225, gridY[i]+130, 350, gridY[i]+130);
  line(gridX[i]+squarz[2], 130, gridX[i]+squarz[2], 255);
  line(400, gridY[i]+130, 525, gridY[i]+130);
  line(gridX[i]+squarz[3], 130, gridX[i]+squarz[3], 255);
  line(575, gridY[i]+130, 700, gridY[i]+130);
  }
  
  
  fill(30, 30, 30);
  rect(x+55, 280, 5, 10);
  rect(x+230, 280, 5, 10);
  rect(x+405, 280, 5, 10);
  rect(x+585, 280, 5, 10);

  
  textFont(boldFont);
  text('RHYTHM', 50, 120);
  if(timerVal>=10){
  text("0:"+ timerVal, 150, 120);
  text("0:"+ timerVal, 325, 120);
  text("0:"+ timerVal, 500, 120);
  text("0:"+ timerVal, 675, 120);
  }
  if(timerVal<10){
  text("0:0"+ timerVal, 150, 120);
  text("0:0"+ timerVal, 325, 120);
  text("0:0"+ timerVal, 500, 120);
  text("0:0"+ timerVal, 675, 120);
  }
  text('BASS', 225, 120);
  text('PAD', 400, 120);
  text('LEAD', 575, 120);
  
  text('Matthew Knight', 660, 425);
  text('Music Generator 4000', 10, 20);
  
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