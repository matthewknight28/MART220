var smiley;
var dragY = 3;
var dragX = 0;
var sizzle=0.5;
var dirt=1.01;
var img;

function preload() {
    smiley = loadModel('smiley/happy.obj', true);
    img = loadImage('smiley/textur.jpg');
}

function setup() {
    createCanvas(500, 500, WEBGL);
}

function draw() {
    background(200);
    scale(sizzle);
    rotateX(dragY);
    rotateY(dragX);
    normalMaterial();
    texture(img);
    model(smiley);
    

    sizzle*=dirt;

    if(sizzle>=3){
        dirt=0.99;
    } else if(sizzle<=0.5){
        dirt=1.01;
    }

    
    fill(100);
    //rect(150, -25, 100, 50);
    //triangle(250, -50, 250, 50, 300, 0);
}

function mouseDragged() {
    dragY = mouseY *- 0.1;
    dragX = mouseX *- 0.1;
}